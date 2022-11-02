// multiple object

const myComputer = {
    brand : 'lenovo',
    price : '40000',
    color : 'black',
    core : 'i5'
}
const test = myComputer.brand;
// console.log(test);

// var shoppingCard = {
//     books : 3,
//     sunglass : 1,
//     keyboard : 1,
//     mouse : 3,
//     pen : 5
// }
// var result = shoppingCard.value;
// console.log(result);

Object.keys(myComputer).forEach(function (key) {
    console.log(key,": ",myComputer[key]);
    console.log(myComputer[key]);
});