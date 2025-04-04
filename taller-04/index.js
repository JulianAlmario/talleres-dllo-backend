const express= require('express');
const routes= require('./routes.js');

const app= express();
app.use(express.json());

app.use('/users', routes);

app.use(async function (req,res){
    res.status(404).json({error:'Ruta no encontrada'});
    
})

app.listen(3000,()=>{
    console.log('Server running on port 3000');
});