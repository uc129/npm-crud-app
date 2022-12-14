const express= require ("express");
const bodyParser= require ("body-parser");

const usersRoutes= require('./routes/user.routes')

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
