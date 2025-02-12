// 1 -5 moddhay 3 and 5 bivhajjo songkha ber koro



// let temp = []
// for(let i =1; i < 51;i++){
//     if(i % 3==0 || i % 5==0){
//         temp.push(i)
//     }
// }
// console.log(temp)

let temp = []
for(let i =1; i < 51;i++){
    if(i % 3==0 && i % 5==0){
        temp.push(i)
    }
}
// console.log(temp)
var friends = ["rahim","karim","abdul","sadad","heroAlom"];
// oporer kon naam ta sob theke boro ber koro.

let bigFriends = friends[0];
for (let i =0;i <friends.length; i++){
    const element = friends[i];
    if(element.length > bigFriends.length){
        bigFriends = element;
    }
}
// console.log(bigFriends)


// oporer arry theke duplicat number gula bad diye uqinue number gula ber koro
// oporer arry theke sob theke boro number konta ber koro



let numbers = [10, 3, 6, 8, 15, 20];

let max = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[0]) {
        max = numbers[i]
    }
}
console.log(max)

