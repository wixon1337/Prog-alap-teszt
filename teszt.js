// 1. feladat
// variable (változó)
let a = 2;
// constans (kosntans)
const b = 5;
// string (karakterlánc)
let str = 'szia';
// array (tömb)
let arr = [1, 2, 3];
// boolean (logikai érték)
let c = true;
// object
let ob = { a: a, b: b };

// 2.feladat
/* Érték szerinti paraméterátadás esetén az érték lemásolódik és csak
a függvényben változik meg az értéke. Referencia szerinti
paraméterátadás esetén a megadott paramétert megváltoztatja a
függvény. Referenciaként pl tömb adódik át, változó pedig értékként */

const empty = (array) => {
  array = [];
};
empty(arr);

const addAB = (a, b) => {
  return a + b;
};
addAB(a, b);

// 3.feladat
const addBA = (a, b) => {
  return a + b;
};
addBA(a, b);

// 4.feladat
const countArr = (arr, x) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x === arr[i]) {
      count++;
    }
  }
  return count;
};

// 5.feladat
const switchFunc = (n) => {
  switch (n) {
    case 1: console.log('szia');
      break;
    case 2: process.exit();
  }
};

// 6.feladat
const metszetFunc = (arr1, arr2) => {
  let metszet = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        metszet.push(arr1[i]);
      }
    }
  }
  return metszet;
};

// 7. feladat
let szamolas = require('./szamolas.js');
szamolas.osszeadas(a, b);

// 8. feladat
let readline = require('readline-sync');
const createArray = () => {
  let n = Number(readline.question('Add meg az n-t:'));
  let m = Number(readline.question('Add meg az m-et'));
  let hatvany = 0;
  let arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = 2;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k <= hatvany; k++) {
        if (i === 0 && j === 0) {
          arr[i][j] = 1;
          hatvany--;
        } else if (i === 0 && j === 1) {
          arr[i][j] = 2;
          hatvany--;
        } else {
          arr[i][j] *= 2;
        }
      }
      hatvany++;
    }
  }
  return arr;
};
console.log(createArray());
