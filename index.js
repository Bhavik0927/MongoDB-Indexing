import express from 'express';
import { Connection } from './Database/db.js';

const app = express();
const PORT = 3000;
Connection()

app.get('/', (req,res) =>{
    res.send("Hello World");
})


app.listen(PORT, () =>{
    console.log("Server is Connected Successfully...");
})