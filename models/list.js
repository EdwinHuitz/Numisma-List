const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const requestSchema = new Schema({
  User_ID:String,
  Coins:Array
});
const listSchema=new Schema({
    Author_ID:{type:Schema.Types.ObjectId,ref:'User'},
    listTitle:{type:String,default:'My Coins'},
    coinType:{type:String,default:'Token'},
    coinCategory:{type:String,default:'World Coins'},
    Coins:{type:Array,default:['']},
    Requests:[requestSchema]
})
module.exports = mongoose.model('List', listSchema);