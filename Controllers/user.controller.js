const dbConn = require("../db/config");
const userModel = require("../Models/user.model")


module.exports = {
    user: (req, res) => {
        userModel.Alluser(req, res)

    },
    userWithId: (req, res) => {
        let user_id = req.params.id;
        if (!user_id) {
            return res.status(400).send({ error: true, message: 'Please provide user_id' });
        }
        userModel.userWithId(req, res, user_id)
    },
    newUser: (req, res) => {
        let user = req.body.user;
        if (!user) {
            return res.status(400).send({ error: true, message: 'Please provide user', success: false });
        }
        userModel.newUSer(req, res, user)

    },
    editUser: (req, res) => {

        let user_id = req.body.user_id;
        let user = req.body.user;
        if (!user_id || !user) {
            return res.status(400).send({ error: user, message: 'Please provide user and user_id' });
        }
        userModel.editUSer(req, res, user_id, user);

    },
    deleteUser: (req, res) => {
        let user_id = req.body.user_id;
        console.log(user_id, "user id");
        if (!user_id) {
            return res.status(400).send({ error: true, message: 'Please provide user_id' });
        }
        userModel.deleteUSer(req, res, user_id)
    }
}