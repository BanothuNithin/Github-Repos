import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DataBase connected Buddy..!!")
    
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
