const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const requestSchema = new Schema({
  User_ID:String,
  Coins:Array
});
const listSchema=new Schema({
    Author_ID:String,
    List_title:{type:String,default:'My Coins'},
    Coins:{type:Array,default:['']},
    Requests:[requestSchema]
})
module.exports = mongoose.model('List', listSchema);