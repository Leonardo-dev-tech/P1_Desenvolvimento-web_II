const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const produtoRoutes = require("./src/routes/produtoRoutes");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

app.use("/produtos", produtoRoutes);
app.use("/usuarios", usuarioRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
