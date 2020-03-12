const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username: String,
    Password: String,
    ProfileImage: String
});

module.exports = mongoose.model("Users", UserSchema);