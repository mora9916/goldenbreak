import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    //Datos que quiero de mi usuario
    displayName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Por favor ingresa un email válido'
        ]
    },
    hashPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','customer','guest']
    },
    avatar:{
        type:String,
        required:true,
        default:'https://placehold.co/100x100'
    },
    phone:{
        type:String,
        required: true,
        max:10
    },
    isActive:{
        type:Boolean,
        default: true
    }
});
const User = mongoose.model('User', userSchema);

export default User;