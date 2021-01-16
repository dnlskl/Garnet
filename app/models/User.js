import Mongoose from 'mongoose'
import UserSchema from '../../db/schemes/UserSchema'

const UserModel = Mongoose.model('User', UserSchema)

export default UserModel