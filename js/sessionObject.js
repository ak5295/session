"use strict";

// declare an Object Literal
var item = {
    "name": "Milk",
    "Quantity": 1,
    "Comment": "Low fat"
};

console.log(item);
console.log(item['name']);
console.log(item.Quantity);
console.log(item.Comment);

console.log(' ');

item.name = "Eggs";
item.Quantity = 12;

console.log(item);
console.log(item.name);
console.log(item.Quantity);
console.log(item.Comment);

item.comment = '';

console.log(' ');
console.log(item);