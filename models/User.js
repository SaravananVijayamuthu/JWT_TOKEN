const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret, opt) => {
        delete ret["password"];
        delete ret["_id"];
        delete ret["__v"];
        return ret;
    },
});

userSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
    this.password = hash;

    next();
});

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

mongoose.model("users", userSchema);