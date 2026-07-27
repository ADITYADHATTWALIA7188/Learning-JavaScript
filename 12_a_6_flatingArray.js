
    let arr = [ 1,2,3, [4,5], 6, [7,8,[9]]];
    let arr1 = arr.flat(0);
    console.log(arr1); //Range = 1
    let arr2 = arr.flat(2);
    console.log(arr2); //Range = 2
    let arr3 = arr.flat(3);
    console.log(arr3); //Range = 3
    let arr4 = arr.flat(Infinity);
    console.log(arr4);
    
    //String TO Array
    console.log(Array.from("Aditya")); //Main
    Array1 = Array.from("Dhattwalia");
    console.log(Array1);