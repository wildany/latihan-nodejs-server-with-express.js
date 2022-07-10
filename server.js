import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import cors from "cors";
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/restful_db", {
    useUnifiedTopology: true

});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
app.use(express.json());
app.use('/product', router);

app.listen('3000', () => console.log('Server running at port : 3000'));

