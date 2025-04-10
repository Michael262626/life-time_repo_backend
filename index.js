const express = require("express");
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const accountRoutes = require("./routes/account.routes");
const HttpException = require("./exceptions/httpException");
const db = require("./models");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded())

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));


app.use(express.static("public"));

// API routes
app.use("/api/v1/accounts", accountRoutes);

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Global error handler
app.use((err, req, res, next) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({ message: err.message });
  }
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced.");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
