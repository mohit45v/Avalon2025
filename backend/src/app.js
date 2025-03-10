import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import queryRoutes from "./routes/query.routes.js"; 

const app = express();
app.use(express.json());

app.use(
    cors({
        origin: ['https://avalon2025.vercel.app', 'https://avalontechfest.in',
            'http://localhost:5173'
        ],  // Allow both origins
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    })
);

app.options('*', (req, res) => {
    // Update OPTIONS handler to handle both origins
    const allowedOrigins = ['https://avalon2025.vercel.app', 'https://avalontechfest.in',
        'http://localhost:5173'
    ];
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(204);
});
app.use(cookieParser());



app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/queries", queryRoutes);


export default app;