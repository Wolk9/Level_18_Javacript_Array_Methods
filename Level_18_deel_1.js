// A:

const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B:

let amountOfElementsInArray = ["appels", "peren", "citroenen"];

let number = amountOfElementsInArray.length;

console.log(number);

// 3

// C:

let Benelux = ["Belgie", "Nederland", "Luxemburg"];

selectBelgiumFromBenelux = () => {
  let first = Benelux[0];
  return first;
};

console.log(selectBelgiumFromBenelux());

// resultaat: "Belgie"

// D:

let dieren = ["Haas", "Cavia", "Kip", "Schildpad"];

let selectSchildpadFromDieren = () => {
  let last = dieren.length - 1;
  return dieren[last];
};

console.log(selectSchildpadFromDieren());

// resultaat: "Schildpad"

// E:

const presidents = ["Biden", "Trump", "Obama", "Bush", "Clinton"];

const impeachBiddenSlice = () => {
  presidents.splice(0, 1);
  return presidents;
};

const impeachBiddenSplice = () => {
  presidents.slice(0, 1);
  return presidents;
};

console.log(impeachBiddenSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachBiddenSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F:
let strings = ["Winc", "Academy", "is", "leuk", ";-}"];
const stringsTogether = () => {
  let wholeSentence = strings.join(" ");
  return wholeSentence;
};

console.log(stringsTogether());

//resultaat: "Winc Academy is leuk ;-}"

// G:

let firstList = [1, 2, 3];
let secondList = [4, 5, 6];

let result = firstList.concat(secondList);

console.log(result);

// resultaat: [1,2,3,4,5,6]
