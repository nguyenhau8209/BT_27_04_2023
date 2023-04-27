let arr = [
  { userId: 1, name: "John", age: 20 },
  { userId: 2, name: "Mary", age: 25 },
  { userId: 3, name: "Bob", age: 20 },
];

//FILTER

// const newUser = arr.filter((value, index) => {
//     return value.age === 20;
// });
// console.log(newUser);

Array.prototype.filter2 = function (callback) {
  let arrayFilter = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arrayFilter.push(this[i]);
    }
  }
  return arrayFilter;
};

function logFilter(value, index) {
  // console.log(value);
  return value.age === 20;
}

let myFilter = arr.filter2(logFilter);

// console.log(myFilter);

//EVERY

// const newUser = arr.every((value, index) => {
//   return value.age > 20;
// });
// console.log(newUser);

Array.prototype.every2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

function logEvery(value, index) {
  console.log(value.age);
  return value.age > 10;
}

// const myEvery = arr.every2(logEvery);
// console.log(myEvery);

//SOME

// const newUser = arr.some((value, index) => {
//   return value.age === 19;
// });
// console.log(newUser);

Array.prototype.some2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

function logSome(value, index) {
  console.log(value);
  return value.age === 20;
}

// const mySome = arr.some2(logSome);
// console.log(mySome);

//FIND

// const newUser = arr.find((value, index) => {
//   return value.age === 20;
// });
// console.log(newUser);

Array.prototype.find2 = function (callback) {
  let arrayFind = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arrayFind.push(this[i]);
      return arrayFind;
    }
  }
  return false;
};

function logFind(value, index) {
  return value.age === 21;
}

// const myFind = arr.find2(logFind);
// console.log(myFind);

//FIMD INDEX

const indexExits = arr.findIndex((value, index) => {
  return value.age === 20;
});

console.log(indexExits);

Array.prototype.find3 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

function logFindIndex(value, index) {
  return value.age === 22;
}

// const myFindIndex = arr.find3(logFindIndex);
// console.log(myFindIndex);
