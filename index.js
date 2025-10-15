import express from 'express';
import { Connection } from './Database/db.js';
import user_route from './Routes/userRoute.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
Connection()


app.use(express.json());

app.use('/api', user_route);


app.get('/', (req,res) =>{

    res.send("Hello World");
})


app.listen(process.env.PORT, () =>{
    console.log("Server is Connected Successfully...");
})