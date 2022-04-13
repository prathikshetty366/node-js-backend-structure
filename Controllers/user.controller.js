const dbConn = require("../db/config");


module.exports = {
    user: (req, res) => {
        dbConn.query('SELECT * FROM users', function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'users list.', success: true });
        });
    },
    userWithId: (req, res) => {
        let user_id = req.params.id;
        if (!user_id) {
            return res.status(400).send({ error: true, message: 'Please provide user_id' });
        }
        dbConn.query('SELECT * FROM users where id=?', user_id, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results[0], message: 'users list.', success: true });
        });
    },
    newUser: (req, res) => {
        let user = req.body.user;
        console.log(req.body, "fffffffff");
        if (!user) {
            return res.status(400).send({ error: true, message: 'Please provide user' });
        }
        dbConn.query("INSERT INTO users SET ? ", { user: user }, function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
        });
    },
    editUser: (req, res) => {
        f
        let user_id = req.body.user_id;
        let user = req.body.user;
        if (!user_id || !user) {
            return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
        }
        dbConn.query("UPDATE users SET user = ? WHERE id = ?", [user, user_id], function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
        });
    },
    deleteUser: (req, res) => {
        let user_id = req.body.user_id;
        if (!user_id) {
            return res.status(400).send({ error: true, message: 'Please provide user_id' });
        }
        dbConn.query('DELETE FROM users WHERE id = ?', [user_id], function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'User has been updated successfully.' });
        });
    }
}