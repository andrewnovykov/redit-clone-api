import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'usrname must be 5 characters or more']
  },
  password: {
    type: String,
    required: true,
    minlength: [8, 'password must be 5 characters or more']
  }

})

const User = mongoose.model('User', userSchema);
export default User;
