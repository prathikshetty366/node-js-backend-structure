const Razorpay = require("razorpay");



const instance = new Razorpay({
  key_id:'rzp_test_5yg5qSrdPk6tuL'|| process.env.RAZORPAY_KEY,
  key_secret:'DYPrU6wkziNryudHFXz9aVjC' || process.env.RAZORPAY_SECRET_KEY,
});

module.exports={
    
    order:(req,res)=>{

            try {
              const options = {
                amount: 10 * 100, // amount == Rs 10
                currency: "INR",
                receipt: "receipt#1",
                payment_capture: 0,
           // 1 for automatic capture // 0 for manual capture
              };
            instance.orders.create(options, async function (err, order) {
              if (err) {
                console.log(err)
                return res.status(500).json({
                  message: "something Went Wrong",
                });
              }
            return res.status(200).json(order);
           });
          } catch (err) {
            console.log(err)
            return res.status(500).json({
              message: "something Went Wrong",
            });
           }
          },
        
    
}