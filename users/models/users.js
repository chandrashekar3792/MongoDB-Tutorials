const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  name:{type:String,require:true}
});

//create model
const User=mongoose.model('user',UserSchema);

module.exports = User;
