import express from "express"

// Create an express app
const app = express()

//example of a simple api
// app.get("/api/notes", (req, res) => {
//     res.send("you got 5 notes");
// });


app.listen(5001, () =>{
    console.log("Server started on PORT: 5001");
}); 


