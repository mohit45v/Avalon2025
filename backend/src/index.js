import dotenv from "dotenv";
dotenv.config();
import connectDB from "./database/database.js";
import app from "./app.js";

connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log('MongoDB Failed !!!', err)
})