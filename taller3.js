function desglosarString(palabra,tipoletra){
  let vocales = ["a","e","i","o","u"];
  let c=0;
    if(tipoletra==="vocales"){
     for(let i=0;i<palabra.length;i++){
       if(vocales.includes(palabra[i])){
         c++;
       }
     }
  }else if(tipoletra==="consonantes"){
    for(let i=0;i<palabra.length;i++){
      if(!vocales.includes(palabra[i])){
        c++;
      }
    }
  }
  return c;
}

function twoSum(lista,numero){
    let sum=0;
    for(let i=0;i<lista.length;i++){
        for(let j=i+1;j<lista.length;j++){
            if(lista[i]!==lista[j]){
                sum=lista[i]+lista[j];
                if(sum===numero){
                    return [i,j];
                }
            }
        }
    }
    return "No hay numeros que sumen el numero dado";
}

const NRomanos = [
    [1,'I'],
    [4,'IV'],
    [5,'V'],
    [9,'IX'],
    [10,'X'],
    [40,'XL'],
    [50,'L'],
    [90,'XC'],
    [100,'C'],
    [400,'CD'],
    [500,'D'],
    [900,'CM'],
    [1000,'M']
];

function conversion(numero){
    let n;
    for(let j in NRomanos){
        if(numero===NRomanos[j][1]){
          n=NRomanos[j][0];
          break;
        }
       }
   return n;
    }

function conversionRomana(numero){
    let n=0;
    let sig=0;
    let actual=0;
    while(numero.length>0){
            actual=conversion(numero[0]);
            if(conversion(numero[1])>actual){
                n-=actual;
            }else{
                n+=actual;
            }
            numero=numero.substring(1);
        
        
    }
    return n;
}


