// multiple object

const myComputer = {
    brand : 'lenovo',
    price : '40000',
    color : 'black',
    core : 'i5'
}
const test = myComputer.brand;

Object.keys(myComputer).forEach(function (key) {
    console.log(key," : ",myComputer[key]);
    // console.log(myComputer[key]);
});

var shoppingCard = {
    books : 3,
    sunglass : 1,
    keyboard : 1,
    mouse : 3,
    pen : 5
}
var text = shoppingCard.keyboard;
console.log(text);
// shoppingCard.books = 5;
// // var result = shoppingCard.value;
// shoppingCard.myName = 'jahangir alam';
// // keys and values check 
// var properties = Object.values(shoppingCard);
// // var properties = Object.keys(shoppingCard);
// console.log(properties);

