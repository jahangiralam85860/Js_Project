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

// for loop break tag use 
for(var i = 1; i <= 20; i++){
    // console.log(i); akhon hole 6 pojonto print hobe.
    if (i > 5) {
        break;
    }
    console.log(i); //log break ar pore korle max 5 pojonto print hobe.
}

var friends = ['jahangir','monirul','shofiq','hamid','masud','roky'];
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend == 'shofiq') {
        break;
    }
    console.log(friend);
}