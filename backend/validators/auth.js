const { check } = require("express-validator");
//Validations for the auth routes
exports.userSignUpValidator = [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Email is required and must be a valid email"),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
]
//Validate sign In checking email and password
exports.userSignInValidator = [
    check("email").isEmail().withMessage("Email is required and must be a valid email"),
    check("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
]