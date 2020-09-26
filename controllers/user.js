const jwt = require("jsonwebtoken");

const config = require("../config");


exports.generateToken = (user) => {
    const body = {
        id: user.id,
        email: user.email
    };

    const token = jwt.sign({
        user: body
    }, config.secret);

    return token;
};