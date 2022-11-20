import express from "express";
import morgan from "morgan";
// Routes
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/materias", usuarioRoutes);

export default app;