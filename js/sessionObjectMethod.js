"Use strict";

// declare an Object Literal
var item = {
    "name": "Milk",
    "quantity": 1,
    "Comment": "Low Fat",
    "print":function(){
        return this.name + ". Qty. " + this.quantity + ". " + this.Comment;
    },
};

console.log(item.print());

var newItem = {
    "name": "Eggs",
    "quantity": 12,
    "Comment": "",
    "print":function(){
        return this.name + ". Qty. " + this.quantity + ". " + this.Comment;
    },
};

console.log(newItem.print());