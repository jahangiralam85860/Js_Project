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