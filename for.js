for (let jahangir = 0; jahangir < 10; jahangir++) {
    console.log(jahangir);
} 

for (let jahangir = 0; jahangir < 30; jahangir++) {
    console.log(jahangir);
}

var numbers = [10,20,30,40,50,60,70];
for (let jahangir = 0; jahangir < numbers.length; jahangir++) {
    var number = numbers[jahangir];
    console.log(number); 
}

var names = ['jahangir','monirul','shofiq','hamid','masud','roky'];
for (let i = 0; i < names.length; i++) {
    const items = names[i];
    console.log(items.length);
}

var num = 23;
var point = 100;
var total = num + point;
console.log(total);

var names = ['jahangir', 'alam','joy'];
for (let i = 0; i < names.length; i++) {
    const print = names[i];
    // while (print == 'alam') {
    //     console.log('hello frineds');
    //     break;
    // }
    if (print == "alam") {
        continue;
    }
    console.log(print);
}

var motherGiven = 1000;
var applePrice = 300;
var orangePrice = 200;
var product = applePrice + orangePrice;
// console.log(product);
var cashReturn =  motherGiven - product;
console.log(cashReturn);

var array = ['apple','orange','banana'];
array.unshift('alam');
console.log(array);
// for add
var result = [50,60,70,80,90];
for (let prapti = 0; prapti < result.length; prapti++) {
    const element = result[prapti];
    console.log(element);
    if (element == 70) {
        break;
    } 
}
var array = ['html','css','bootstrap','tailwind','node js','javascript'];
for (let jahangir = 0; jahangir < array.length; jahangir++) {
    const element = array[jahangir];
    console.log(element);
}