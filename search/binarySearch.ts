/*
1: Start with the array and two indices: left and right.  
2: While the left index is less than or equal to the right index:  
3: Find the middle index between the left and right indices.  
4: If the value at the middle index is equal to the target value:  
5: Return the middle index.  
6: If the value at the middle index is greater than the target value:  
7: Search in the left half of the array.  
8: Otherwise, search in the right half of the array.  
9: End the procedure.
*/

function func(arr: number[], x: number): number {
  let l: number = 0;
  let r: number = arr.length - 1;
  let m: number;
  let counter: number = 0;
  do {
    counter++;
    m = Math.floor((r + l) / 2);
    if (arr[m] === x) {
      console.log(`Number of searches: ${counter}`);
      return arr[m];
    } else if (arr[m] > x) {
      r = m;
    } else {
      l = m;
    }
  } while (l <= r);
  return arr[m];
}

let arr: number[] = [];
let x: number;
for (let i: number = -50; i < 50; i++) {
  arr[i] = i;
}

for (let i: number = 0; i < 10; i++) {
  x = Math.floor(Math.random() * 100) - 50;

  console.log(`Test ${i + 1} with number to find = ${x} :`);
  console.log("Found " + func(arr, x));
}
