const numbersList = [1,10,14,2,4,5,43,34];

const sortNumber = [...numbersList];
sortNumber.sort((a, b) => b-a);

console.log(numbersList);
console.log(sortNumber);



// 1-10 = 9
// 1-14 = 13
// 1-2 = 1
// 1-4 = 3
// 1-5 = 4
// 1-43 = 42
// 1-34 = 33