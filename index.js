// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
     cats.push(name);
    }

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}


function appendCat(name){
    const copyCats = [...cats, name];
    return copyCats;
}

function prependCat(name){
   const copyCats =[name, ...cats];
   return copyCats;
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);
}

    