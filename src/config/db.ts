import mongoose from "mongoose";

const connectDB = async () : Promise<void> =>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string);

        console.log("Database Connected");
    }catch(error){
        console.log("Database Error: ",error);

        process.exit(1);
    }
};

export default connectDB;