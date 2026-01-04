import express from "express";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"


dotenv.config()

console.log(process.env.MONGO_URI)

// Create an express app
const app = express();

const PORT = process.env.PORT || 5001; 

//Call the db.js to connect to the database 
connectDB(); 

// Use the route "/api/notes"
app.use("/api/notes", notesRoutes);

app.listen(PORT, () =>{
    console.log("Server started on PORT:", PORT);
}); 