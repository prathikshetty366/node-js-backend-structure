const dbConn = require("../db/config")

module.exports = {
    Alluser: (req, res) => {
        dbConn.query('SELECT * FROM users', function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'users list.', success: true });
        });
    },
    userWithId:(req,res,user_id)=>{
        dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results[0], message: 'users list.', success: true });
        });
    },
    newUSer:(req,res,user)=>{
        console.log(req.body, "request body in model");
        dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
        });
    },
    editUSer:(req,res,user_id,user)=>{
        dbConn.query("PATCH users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
        });
    },
    deleteUSer:(req,res,user_id)=>{
        dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
        });

    }
}