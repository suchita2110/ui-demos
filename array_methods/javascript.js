/* **Write program to delete an employee whose name is "peter" from given array.** */

let myArray =["parker","Emma","Wareen","Shital","Yhi","Peter"]

myArray.pop();

console.log("Array after deleting name Peter :: "+myArray);

/* **** */

/* ** Write program to add "Michel" at the end of the given array. ** */

let myArray1 =["parker","Emma","Wareen","Shital","Yhi","Peter"]

myArray1.push("Michel");

console.log("Array after adding name Michel :: "+myArray1);

/* **** */

/* ** Write program to get list of all negative values from given array. ** */

let myArray2 = [10, 20, 40, 60, 80, 100, 6, 5, 4, 3, 2, 1, -2, -100, -40, -70, 17];

let negNaumArr = myArray2.filter(function(val) {
      return val < 0;
  });

console.log("Negative Numbers from array :: " + negNaumArr);

/* **** */

/* ** Write program to get an array which will be having cub of each number from the given array. ** */

let myArray3 = [2, 3, 4];

let cubesArr = myArray3.map(function(val) {
     return val * val * val;
});

console.log("Cubes of numbers given in array :: " +cubesArr);

/* **** */