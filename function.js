function singara(money) {
    console.log('mama singara dan amake');
    console.log(money);
}
var taka = 700;
singara(taka);

function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum); 
    return sum;
}
var total = add(110,140);
var total = add(110,144);
console.log('total=', total);

var arrayObj = ['jahangir',
{
names: 'hero',
age: '24',
job: 'software'},
'Bangladesh'
];
// var test = arrayObj[1].names;
// var test = arrayObj[1].job;
var test = arrayObj[1].age;
console.log(test);


function result(bangla, english, math) {
    console.log(bangla,english,math);
    var print = result;
    return print;
}
var printResult = result(60,70,50);
console.log(printResult);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singara = bringSingara(100);
console.log(singara);