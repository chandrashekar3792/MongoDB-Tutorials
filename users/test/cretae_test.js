const assert = require('assert');
const User = require('../models/users');
//creating users in mongoDB
describe('Create records',()=>{
  it('saves a user',()=>{
      const insertUser=new User({name:'Chandrashekar'});
      insertUser.save();
  });
});
