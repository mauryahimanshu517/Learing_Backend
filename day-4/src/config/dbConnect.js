import mongoose from "mongoose"

const connectToDB = async () => {
  await mongoose.connect(`${process.env.DB_DATA}`);
  console.log("MongoDB connected");
};

export default connectToDB
