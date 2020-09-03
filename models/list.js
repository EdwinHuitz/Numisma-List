const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const requestSchema = new Schema({
  User_ID:String,
  Coins:Array
});
const listSchema=new Schema({
    Author_ID:{type:Schema.Types.ObjectId,ref:'User'},
    List_title:{type:String,default:'My Coins'},
    Coin_type:{type:String,default:'Token'},
    Coin_category:{type:String,default:'World Coins'},
    Coins:{type:Array,default:['']},
    Requests:[requestSchema]
})
module.exports = mongoose.model('List', listSchema);