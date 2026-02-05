import mongoose from "mongoose"

const connectToDB = async () => {
  await mongoose.connect("mongodb+srv://mauryahimanshu517_db_user:eJ7nMbe5VGT4eggg@cluster0.9kxhpay.mongodb.net/day-4");
  console.log("MongoDB connected");
};

export default connectToDB
