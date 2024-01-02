import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const addressSchema = Schema({
    user_id:{
        type:String
    },
    address:[
        {
            fullName:{
                type:String
            },
            mobileNumber:{
                type:Number
            },
            address: {
              type: String
            },
            city:{
              type: String
            },
            state:{
              type: String
            },
            type:{
              type: String
            },
          }
    ]
})

export default model('Address',addressSchema);