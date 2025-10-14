import express from 'express';
import { Connection } from './Database/db.js';
import user_route from './Routes/userRoute.js';

const app = express();
const PORT = 3000;
Connection()


app.use(express.json());

app.use('/api', user_route);


app.get('/', (req,res) =>{

    res.send("Hello World");
})


app.listen(PORT, () =>{
    console.log("Server is Connected Successfully...");
})