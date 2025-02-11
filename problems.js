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


var numbers = [1,2,3,3,4,4,5,6,7,8,9,10];
// oporer arry theke duplicat number gula bad diye uqinue number gula ber koro
// oporer arry theke sob theke boro number konta ber koro
var numbers = [1,2,3,3,4,4,5,6,7,8,9,10];

let bigNumbers = numbers[0];
for (let i =0; i < numbers.length; i++){
    const element = numbers[i];
    if(element.length < bigNumbers.length){
        bigNumbers = element;
    }

}
console.log(bigNumbers)