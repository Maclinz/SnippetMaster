const mongoose = require('mongoose')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxLength: 40,
        unique: true,
        index: true,
        lowecase: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        max: 40,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowecase: true
    },
    profile:{
        type: String,
        required: true,
    },
    hashed_password: {
        type: String,
        required: true,

    },
    //how strong the password is
    salt: String,
    about:{
        type: String,
    },
    role:{
        type: String,
        trim: true,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink: {
        data: String,
        default: ""
    }

}, {timestamps: true})

//virtual field to get password and hash it
//It does not store the password in the database but it is used to hash the password
UserSchema.virtual('password')
    .set(function(password){
        //create temporary variable called _password
        this._password = password
        //generate salt
        this.salt = this.makeSalt()
        //hash password
        this.hashed_password = this.encryptPassword(password)

    })
    .get(function(){
        return this._password
    })

UserSchema.methods = {
    authenticate: function(plainText){
        //Compare the plain text password with the hashed password
        return this.encryptPassword(plainText) === this.hashed_password
    },
    makeSalt: function(){
        //Return random numerical values
        return Math.round(new Date().valueOf() * Math.random()) + '';
    },
    encryptPassword: function(password){
        //Return empty string if password is empty
        if(!password) return ''
        try {
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
        } catch (error) {
            return '';
        }
    },
}


module.exports = mongoose.model('User', UserSchema)

