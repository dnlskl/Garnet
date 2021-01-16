import Mongoose from 'mongoose'
const { Schema } = Mongoose

const UserSchema = new Schema({
    email: String,
    login: String,
    password: String,
    name: String,
})

export default UserSchema