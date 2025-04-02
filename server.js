const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const produtoRoutes = require("./src/routes/produtoRoutes");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

app.use("/produtos", produtoRoutes);
app.use("/usuarios", usuarioRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
