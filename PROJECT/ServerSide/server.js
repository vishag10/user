import express, { json } from 'express';
import env from "dotenv"
import connection from './connection.js';
import router from './router.js';
env.config()

const app = express();

app.use(express.static("../ClientSide"))
app.use(express.json())
app.use("/api",router)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started on port http://localhost:${process.env.PORT}`)
    })
})