const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    age: {
        type: Number,
        required: true
    }
}
);

const Users = mongoose.model("Users",UserSchema) ;

module.exports = Users

