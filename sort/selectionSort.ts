/*
An array with values to sort.
An inner loop that goes through the array, finds the lowest value, and moves it to the front of the array. This loop must loop through one less value each time it runs.
An outer loop that controls how many times the inner loop must run. For an array with n
values, this outer loop must run n−1 times.
 */

function selectionSort(arr: number[]): number[] {
  let minIndex: number;
  for (let i: number = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

for (let i: number = 0; i < 10; i++) {
  let arr: number[] = [];
  for (let j: number = 0; j < 100; j++) {
    let x = Math.floor(Math.random() * 101) - 50; 
    arr.push(x);
  }

  console.log(`Test ${i + 1} :`);
  console.log("Array sorted: " + selectionSort(arr));
}
