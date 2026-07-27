//Merging Array 3 Ways
let Array1 = [1, 2, 3, 4];
let Array2 = [5, 6, 7, 8];
console.log(Array1);
console.log(Array2);

//1st --> Not Recommended
Array1.push(Array2);
console.log(Array1);

//2nd -->
let Array3 = [1, 2, 3, 4];
let Array4 = [5, 6, 7, 8];
let NewArray = Array3.concat(Array4);
console.log(NewArray);

//3 --> Spread Operator
let NewArray1 = [...Array3, ...Array4];
console.log(NewArray1);
//Benifits Of Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [100, ...arr1, 200, ...arr2];
console.log(newArr);
