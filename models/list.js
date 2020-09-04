const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const requestSchema = new Schema({
  userId:String,
  coins:Array
});
const listSchema=new Schema({
    authorId:{type:Schema.Types.ObjectId,ref:'User'},
    listTitle:{type:String,default:'My Coins'},
    coinType:{type:String,default:'Token'},
    coinCategory:{type:String,default:'World Coins'},
    coins:Array,
    requests:[requestSchema]
})
module.exports = mongoose.model('List', listSchema);