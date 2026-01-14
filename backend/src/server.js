import express from "express";

import dotenv from "dotenv"
import cors from "cors"

 
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter  from  "./middleware/rateLimiter.js"


dotenv.config()

console.log(process.env.MONGO_URI)

// Create an express app
const app = express();

const PORT = process.env.PORT || 5001; 



//Middleware needed 
app.use(express.json()); //this middleware will parse JSON bodies: req.body 

app.use(rateLimiter);

app.use(cors);

// Use the route "/api/notes"
app.use("/api/notes", notesRoutes);

//Call the db.js to connect to the database 
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
}); 

