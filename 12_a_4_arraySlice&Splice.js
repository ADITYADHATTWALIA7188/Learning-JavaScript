
let arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8);
console.log(arr);

console.log("Slice (x,y)=> inlcude x and exclude y");


let newArr1 = arr.slice(0, 5); //here 0th index is included and 5th index is excluded
console.log(newArr1);

console.log("Splice (x,y)");


let newArr2 = arr.splice(0, 3);
console.log(newArr2);
console.log(arr);
