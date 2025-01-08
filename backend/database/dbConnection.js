import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect('mongodb+srv://marlinpatel1711:marlin@cluster0.vx4yv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: $(err)`);
    });
};