const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username name is required"],
        unique: [true, "username name should be unique"],
        minlength: [3, "username name must be at least three characters long"]
    },
    score: {
        type: Number,
        required: [true, "username name is required"],
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;