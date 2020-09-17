const { User } = require('../models/User');

exports.login = (req, res) => {
    const { login, password } = req.body;
    User.query().select('*').where('login', '=', login).where('password', '=', password).first().then(user => {
        if (user) {
            return res.send(user.toAuthJSON());
        } else {
            return res.status(404).send({
                message: "User not found with this credentials"
            });
        }
    }).catch(err =>{
        return res.send(err.message);
    });
};

exports.createUser = (req, res) => {
    const data = req.body;
    const { name, login, password } = data;
    const role = "member";
    User.query().insert({
        name,
        login,
        password,
        role
    }).then(user => {
        if (user) {
            return res.send(user.toAuthJSON());
        }
    }).catch(err =>{
        return res.send(err.message);
    });
};
