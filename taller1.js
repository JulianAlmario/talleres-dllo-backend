
function convertidorTemp(C){
   return C*9/5+32;
}

function resolvedor(a,b,c,negativo){
    const p1=b**2;
    const p2=4*a*c;
    const p3=2*a;
   if(negativo){
     return (-b-Math.sqrt(p1-p2))/p3;
   }else{
    return (-b+Math.sqrt(p1-p2))/p3;
   }
}

function MejorParidad(n){
   if(n%2===0){
    return true;
   }else{
    return false;
   }
}

function PeorParidad(n){
    const list=[1,2,3,4,5,6,7,8,9,10];
    if(list.includes(n)){
       if(n!==1 && n!==3 && n!==5 && n!==7 && n!==9){
           if(n==2 || n==4 || n==6 || n==8 || n==10){
              return true;
           }
       }else{
        return false;
       }
    }else{
        return false;
    }

}

//punto1
const C=prompt("Ingrese temperatura en Celcius:");
console.log(`Fahrenheit=${convertidorTemp(C)}`);

//punto2
const a=prompt("a:");
const b=prompt("b:");
const c=prompt("c:");
const pregunta=prompt("Quieres el valor negativo? Responde si o no");
if(pregunta==="si"){
 negativo=true;
}else{
    negativo=false;
}

console.log(`x=${resolvedor(a,b,c,negativo)}`);

//punto3
const n1=prompt("Ingresa un numero:");
const Paridad=MejorParidad(n1);
if(Paridad){
    console.log("El numero es par");
}else{
    console.log("El numero no es par");
}

//punto4
const n2=prompt("Ingresa un numero:");
const Paridad2=PeorParidad(n2);
if(Paridad2){
    console.log("El numero es par");
}else{
    console.log("El numero no es par");
}
