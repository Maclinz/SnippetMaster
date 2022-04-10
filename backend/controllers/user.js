const User = require('../models/UserModel')
//User profile info
exports.read = (req, res) => {
    req.profile.hashed_password = undefined;
    //return current user when user is logged in
    return res.json(req.profile);
}
