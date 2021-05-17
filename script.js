const items = [
  { name: "bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 }
];

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

items.forEach((item) => {
  console.log(item.name, item.price);
});

const hasInexpensiveItems = items.every((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);
