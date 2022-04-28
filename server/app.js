require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ("./db/conn");

const port = 8080;

app.listen(port,()=> {
    console.log(`servidor rodando na porta ${port}`);
});

