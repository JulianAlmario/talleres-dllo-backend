const express=require('express');
const datos= require('./24-taller-04-datos.json');
const fs=require('fs');
const router= express.Router();


router.get('', (req, res) => {
    res.json(datos)
})

//punto1
function Punto1(datos,hobby){
  return datos.filter((a)=>a.hobbies.some((b)=>b===hobby));
}


router.get('/hobby', (req, res) => {
 const {hobby}=req.query;
 if (!hobby) {
  return res.status(400).json({ error: 'Falta el parámetro hobby' });
 }
 const resultado=Punto1(datos,hobby);
 if(resultado===undefined){
  res.status(404).json({error:'No se encontraron usuarios con ese hobby'});
}
 res.json(resultado);
});


//punto2

function Punto2(datos,codigo){
  return datos.find((a)=>a.codigo===codigo);
}

router.get('/exists',(req,res)=>{
  const {codigo}=req.query;
  if (!codigo) {
    return res.status(400).json({ error: 'Falta el parámetro codigo' });
  }
  const resultado=Punto2(datos,codigo);
  if(resultado===undefined){
    res.status(404).json({error:'No se encontro un usuario con ese codigo'});
  }else{
    res.status(200).json({message:'El usuario existe'});
  }
})

//punto3
function Punto3(datos,hobby){
  return datos.filter((a)=>a.hobbies.some((b)=>b===hobby)).length;
}

router.get('/hobby/count', (req, res) => {
  const {hobby}=req.query;
  const resultado=Punto3(datos,hobby);
  res.json(resultado);
 });

 //punto4
 function Punto4(datos){
  return datos.filter((a)=>a.hobbies.length<3);
 }

 router.get('/is-free', (req, res) => {
  const resultado=Punto4(datos);
  res.json(resultado);
 });


 //punto5
 function Punto5(hobby,usuario){
   if(usuario.hobbies.length<3){
      usuario.hobbies.push(hobby);
      return usuario;
   }else{
    return null;
   }
 }

 router.get('/suggest', (req, res) => {
  const {hobby,usuario}=req.query;
  if (!usuario || !hobby) {
    return res.status(400).json({ error: 'Faltan parámetros, hobby y/o usuario' });
  }
  try{
    const resultado=Punto5(hobby,JSON.parse(usuario));
  
  if (!resultado) {
     return res.status(400).json({ error: 'No se pudo agregar el hobby. El usuario ya tiene 3 o más hobbies' });
  }
  
  res.json(resultado);
} catch (error) {
  return res.status(400).json({ error: 'El parámetro usuario no es un JSON válido' });
}
 });


 //punto6
 router.post('',(req,res)=>{
  const {codigo,hobbies,apellido,nombre}=req.query;
  if(!codigo || !hobbies || !apellido || !nombre) {
   return res.status(400).json({ error: 'Faltan parámetros' });
  }
 
  let hobbiesArray;
  try{
   hobbiesArray = JSON.parse(hobbies);
  }catch(error){
    return res.status(400).json({ error: 'El parámetro hobbies no es un JSON válido' });
  }
  
   if( hobbiesArray.length<2){
    return res.status(400).json({ error: 'El usuario debe tener al menos 2 hobbies' });
   }

 const nuevousuario={
  hobbies:hobbiesArray,codigo,apellido,nombre
 };

 datos.push(nuevousuario);
 fs.writeFile('./24-taller-04-datos.json', JSON.stringify(datos,null,2), (err) => {
  if(err){
   return res.status(500).json({error:'Error al guardar el usuario'});
  }
});
  res.status(200).json({message:"Usuario agregado:",usuario:nuevousuario});
});



module.exports=router;