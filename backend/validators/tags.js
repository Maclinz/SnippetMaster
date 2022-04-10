const { check } = require("express-validator");
//Validations for tags
exports.tagsCreatorValidator = [
    check("name").not().isEmpty().withMessage("A Tag is required"),
]
