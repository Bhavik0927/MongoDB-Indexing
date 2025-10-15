import mongoose from 'mongoose';

export const Connection = async() =>{
    
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((err) => {
        console.log("Error while connecting with the database ", err?.message);
      });
}