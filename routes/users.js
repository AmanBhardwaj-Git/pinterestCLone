const mongoose = require('mongoose');

require('dotenv').config(); 
  const dbURI = process.env.MONGO_URI;
  mongoose.connect(`${dbURI}/pinterest-clone`);


const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact : Number,
  boards: {
    type:Array,
    default: []
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'post'
  }]
});
userSchema.plugin(plm);

module.exports = mongoose.model('user' ,userSchema);