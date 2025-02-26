function findMax(list){
 let max=list[0];
 for(let i=1;i<list.length;i++){
    if(list[i]>max){
        max=list[i];
    }
 }
 return max;
}

function includes(list,number){
   let includes=false;
    for(let i in list){
        if(list[i]===number){
            includes=true;
        }
    }
    return includes;
}

function sum(list){
   let sum=0;
    for(i in list){
        sum+=list[i];
    }
return sum;
}

function findMin(list){
   let min=list[0];
    for(let i=1;i<list.length;i++){
        if(list[i]<min){
            min=list[i];
        }
    }
    return min;
}

function missingNumbers(list){
   let missing=[];
    const min=findMin(list);
    const max=findMax(list);
    for(let i=min;i<=max;i++){
        if(!includes(list,i)){
            missing.push(i);
        }
    }
return missing;
}

