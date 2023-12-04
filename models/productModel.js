import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,


    },
    category:{
        type:mongoose.ObjectId,
        ref:"Catagory",
        required:true,

    },
    quantity:{
        type:Number,
        required:true,
    },
    photo:{
        type:Buffer,
        contentType:String,

    },

}, {timestamps:true}
);
export default mongoose.model("Product",productSchema)