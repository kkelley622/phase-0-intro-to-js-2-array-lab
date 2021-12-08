// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
} 

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

appendCat('Broom');

function prependCat() {
    const newerCats = ["Arnold", ...cats];
    return newerCats;
}

prependCat('Arnold');

function removeLastCat() {
    const noLastCat = [...cats.slice(0,-1)];
    return noLastCat;
}

function removeFirstCat() {
    const noFirstCat = [...cats.slice(1)];
    return noFirstCat;
}


