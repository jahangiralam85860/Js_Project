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
var test = arrayObj[1].names;
var test = arrayObj[1].job;
var test = arrayObj[1].age;
console.log(test);

for (let i = 0; i < 29; i++) {
    console.log(i);
}