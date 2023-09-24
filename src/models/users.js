const { Schema, model } = require('mongoose')
const bcryp = require('bcrypt-nodejs')

const userSchema = new Schema ({
    name: String,
    ci: {
        type: String,
        //unique: true
    },
    password: String,
    type: String
    
});


userSchema.method.encryptPassword = (password) => {
    return bcryp.hashSync(password, bcryp.genSaltSync(10))
}
userSchema.method.comparePassword = function (password) {
    return bcryp.compareSync(password, this.password)
}


module.exports = model('users', userSchema)