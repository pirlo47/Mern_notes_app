import express from "express";

import dotenv from "dotenv"
import cors from "cors"
import path from "path"

 
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter  from  "./middleware/rateLimiter.js"


dotenv.config()

console.log(process.env.MONGO_URI)

// Create an express app
const app = express();

const PORT = process.env.PORT || 5001; 

const __dirname = path.resolve(); 



//Middleware needed 
if(process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173"
        })
    );
};
app.use(express.json()); //this middleware will parse JSON bodies: req.body 


app.use(rateLimiter);


// Use the route "/api/notes"
app.use("/api/notes", notesRoutes);

//use a different middleware for deployment 
app.use(express.static(path.join(__dirname,"../frontend/dist")))

if(process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

//Call the db.js to connect to the database 
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
}); 

