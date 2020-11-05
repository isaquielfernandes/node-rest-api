import express, { Application } from "express";
import "reflect-metadata";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { createConnection } from 'typeorm';
import router from "./routes/router";

const port = 3000
const app: Application = express()

app.disable("x-powered-by")

// Create Connection (db)
createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "weatherdb",
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

// middleware
app.use(cors())
app.use(morgan('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

// routes
app.use(router)

//server
app.listen(port, () => {
    console.log(`server listen on ${port}`)
})
