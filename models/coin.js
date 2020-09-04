const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const coinSchema=new Schema({
    coinName:{type:String,default:'Unknown'},
    coinDenomination:{type:String,default:'Unknown'},
    coinCountry:{type:String,default:'Unknown'},
    coinYear:{type:String,default:'Unknown'},
    coinMint:{type:String,default:'No Mint-Mark'},
    coinStrike:{type:String,default:'Business'},
    coinError:{type:String,default:'None'},
    coinComposition:{type:Array,default:'Unknown'},
    coinGrade:{type:String,default:'Ungraded'}
})
module.exports=mongoose.model('Coin', coinSchema);