
import express from "express";
import dotenv from "dotenv";
import registrateRouter from "./router.js";

dotenv.config();

const app = new express();

app.use(express.json())
const PORT = process.env.PORT || 3000;

registrateRouter(app);

console.log(PORT);


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
});

export default app; 

