const User = require('../models/UserModel')
const shortId = require('shortid');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    
    //Check if user already exists
    User.findOne({email: req.body.email}, (err, user) => {
        if(err) {
            return res.status(422).json({error: 'Something went wrong'});
        }
        if(user) {
            return res.status(422).json({error: 'User already exists'});
        }

        const {name, email, password } = req.body;
        //genrate user with shortId
        let username = shortId.generate();
        //profile
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;


        //If user does not exist, create a new user
        const newUser = new User({
            name,
            email,
            profile,
            username,
            password
        });

        //save user
        newUser.save((err, user) => {
            if(err) {
                return res.status(422).json({error: 'Something went wrong'});
            }
            res.json({message: 'Signup successfull! Please Sign In'});
        })
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body;
    //Check if user already exists
    User.findOne({email: req.body.email}).exec((err, user) => {
        //Return an error if something went wrong
        if(err || !user) {
            return res.status(400).json({error: 'Invalid email or password. Please create an account!'});
        }

        //authenticate if password is correct
        if(!user.authenticate(password)) {
            return res.status(422).json({error: 'Invalid email or password'});
        }

        //generate jwt token
        //if user is authenticated, generate a token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});

        //put token in cookie
        res.cookie('token', token, {expiresIn: '1d'});

        //json response with user and token
        const {_id, username, name, email, role} = user;
        return res.json({token, user: {_id, username, name, email, role}});
    })

}

exports.signout = (req, res) => {
    //clear cookie when user signs out
    res.clearCookie("token");
    res.json({message: "Signout successfull"});
}

//protected routes middleware
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: "auth",
});