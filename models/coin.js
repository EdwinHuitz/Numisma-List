const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const coinSchema=new Schema({
    Coin_name:{type:String,default:'Unknown'},
    Coin_denomination:{type:String,default:'Unknown'},
    Coin_country:{type:String,default:'Unknown'},
    Coin_year:{type:String,default:'Unknown'},
    Coin_mint:{type:String,default:'No Mint-Mark'},
    Coin_strike:{type:String,default:'Business'},
    Coin_error:{type:String,default:'None'},
    Coin_composition:{type:Array,default:'Unknown'},
    Coin_grade:{type:String,default:'Ungraded'}
})
module.exports=mongoose.model('Coin', coinSchema);