// A:

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpiderMan = superheroes.find(({ name }) => name === "Spiderman");

console.log(findSpiderMan);
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B:

const single = [1, 2, 3];
const double = [];
const singleDouble = single.forEach((item) => {
  return double.push(item * 2);
});

console.log(double);
// result should be [2, 4, 6]

// C:

function containsNumberBiggerThan10(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      return true;
    }
  }
  return false;
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// D:

function isItalyInTheGreat7(array, country) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === country) {
      return country + " is in the Great 7";
    }
  }
  return country + " is NOT in the Great 7";
}
console.log(
  isItalyInTheGreat7(
    [
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ],
    "Italy"
  )
);
console.log(
  isItalyInTheGreat7(
    [
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ],
    "The Netherlands"
  )
);

// result should be true

// E:

const arr = [1, 4, 3, 6, 9, 7, 11];

arr.forEach((value, index) => {
  arr[index] *= 10;
});

console.log(arr);
// result should be [10, 40, 30, 60, 90, 70, 110]

// F:

function isBelow100(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      return true;
    }
  }
  return false;
}

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 100, 11, 77, 84, 98])
);

// function isBelow100(array) {
//   return array.every((number) => {
//     return number < 100;
//   });
// }
// console.log(
//   "Onder de 100?:",
//   isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
// );
// console.log(
//   "Onder de 100, Should be true:",
//   isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
// );

// result should be: false    moest wel de 101 veranderen in 100. Anders is hij niet op te lossen.

// G Bonus:

const reducer = (acummulator, currentValue) => acummulator + currentValue;

function bigSum(array) {
  return array.reduce(reducer);
}

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
