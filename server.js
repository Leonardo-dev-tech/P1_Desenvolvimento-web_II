require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connection = require('./config/database'); // Importando a conexão com o banco

const app = express(); // Criando o app Express

// Middlewares
app.use(cors());  
app.use(express.json());  

// Testando conexão com MySQL
connection.connect((err) => {
    if (err) {
        console.error("❌ Erro ao conectar ao banco de dados:", err.message);
        return;
    }
    console.log("✅ Conectado ao banco de dados MySQL com sucesso!");
});

// Rota inicial para testar o servidor
app.get('/', (req, res) => {
    res.send("🚀 API de Gerenciamento de Produtos está rodando!");
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
