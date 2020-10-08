const mongoose = require('mongoose');


const cursoSchema=new mongoose.Schema({
   codigo:{type:String,required:true},
   nombre:{type:String,required:true},
   credito:{type:String,required:true}
})


const cursos = mongoose.model("cursos",cursoSchema);
module.exports = cursos;