const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    profile_image: String
});

module.exports = mongoose.model("Users", UserSchema);