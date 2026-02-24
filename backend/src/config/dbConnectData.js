import mongoose from "mongoose";

let isConnected = false;

const dbConnect = async () => {
  if (isConnected) return;

  const db = await mongoose.connect(process.env.DB_DATA);
  isConnected = db.connections[0].readyState;
};

export default dbConnect;
