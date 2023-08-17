import * as express from "express";
const app = express();
const port = 7000

app.get("/hola", (req, res)=>{
    res.json({
        message: "Hola Mundo desde el servidor"
    })
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})