for (let index = 0; index < 10; index++) {
    console.log(index);
} 

for (let jahangir = 0; jahangir < 30; jahangir++) {
    console.log(jahangir);
}

var numbers = [10,20,30,40,50,60,70];
for (let index = 0; index < numbers.length; index++) {
    var number = numbers[index];
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