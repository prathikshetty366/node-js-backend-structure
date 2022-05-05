const Razorpay = require("razorpay");



const razorpay = new Razorpay({
  key_id: 'rzp_test_5yg5qSrdPk6tuL' || process.env.RAZORPAY_KEY,
  key_secret: 'DYPrU6wkziNryudHFXz9aVjC' || process.env.RAZORPAY_SECRET_KEY,
});

module.exports = {

  order: (req, res) => {
    console.log(req.body, "req body")
    try {
      const options = {
        amount: req.body.amount * 100, // amount == Rs 10
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 1,
        // 1 for automatic capture // 0 for manual capture
      };
      razorpay.orders.create(options, async function (err, order) {
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