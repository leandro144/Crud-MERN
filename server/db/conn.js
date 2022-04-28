const mongoose = require("mongoose");

const DB = "mongodb+srv://harsh:548frrhc6J4dWHd0@cluster0.s2vgm.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Conexão iniciada")).catch((error)=> console.log(error.message));