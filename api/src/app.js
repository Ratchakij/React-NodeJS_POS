require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./models/index");
const packRoute = require("./routes/package-route");

const errorMiddleware = require("./middlewares/error");

// const connectDb = require("../database");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
    res.send("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
app.use("/package", packRoute);

app.use(errorMiddleware);
// app.get("/select", async (req, res) => {
//   try {
//     const result = await EmployeeModel.findAll({ order: ["id"] });
//     res.status(200).json({ result });
//   } catch (err) {
//     console.error("Error retrieving products:", err);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });

// app.get("/info/:id", async (req, res) => {
//   const value = req.params;
//   const rows = await EmployeeModel.findByPk(value.id);
//   res.status(200).json({ rows });
// });

// app.post("/insert", async (req, res) => {
//   const value = req.body;
//   const rows = await EmployeeModel.create(value);
//   res.status(200).json({ rows });
// });

// app.put("/update", async (req, res) => {
//   const value = req.body;
//   console.log(value);
//   const rows = await EmployeeModel.update(value, {
//     where: { id: value.id },
//   });
//   res.status(200).json({ rows });
// });

// app.delete("/delete/:id", async (req, res) => {
//   const value = req.params;
//   const rows = await EmployeeModel.destroy({
//     where: { id: value.id },
//   });
//   res.status(200).json({ rows });
// });

const PORT = process.env.PORT || "3000";
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
