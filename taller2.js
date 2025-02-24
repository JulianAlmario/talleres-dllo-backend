function findMax(lista){
 let max=lista[0];
 for(let i=1;i<lista.length;i++){
    if(lista[i]>max){
        max=lista[i];
    }
 }
 return max;
}

function includes(lista,numero){
   let incluye=false;
    for(let i in lista){
        if(lista[i]===numero){
            incluye=true;
        }
    }
    return incluye;
}

function sum(lista){
   let sum=0;
    for(i in lista){
        sum+=lista[i];
    }
return sum;
}

function findMin(lista){
   let min=lista[0];
    for(let i=1;i<lista.length;i++){
        if(lista[i]<min){
            min=lista[i];
        }
    }
    return min;
}

function missingNumbers(lista){
   let faltantes=[];
    const min=findMin(lista);
    const max=findMax(lista);
    for(let i=min;i<=max;i++){
        if(!includes(lista,i)){
            faltantes.push(i);
        }
    }
return faltantes;
}


