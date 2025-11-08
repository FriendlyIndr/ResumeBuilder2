import app from "./src/app.js";
import { connectDB } from "./src/db/connect.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});