import mongoose from "mongoose";
import {Schema , Document } from "mongoose";

export interface IStudent extends Document {
    name :string,
    age : number,
    grade : string;
}

const studentSchema = new Schema<IStudent>({
    name : {
        type : String,
        required :true,
        trim : true
    },

    age : {
        type : Number,
        required : true,
        min :1
    },

    grade : {
        type : String,
        required : true,
    }
    } , { 
        timestamps : true 
});

export default mongoose.model<IStudent>("Student",studentSchema);