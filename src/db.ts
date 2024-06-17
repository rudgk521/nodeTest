import "dotenv/config";
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const DB_HOST:string = process.env.MONGODB_URI_PROD as string;

const connect = () => {
    mongoose
        .connect(DB_HOST)
        .then(() => console.log("mongoose Connected"))
        .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
    console.error("mongoDB connecting error", err);
});

export default connect;