/*
    An array with values to sort.
    An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop must loop through one less value each time it runs.
    An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.
 */

function bubbleSort(arr: number[]): number[] {
  let temp: number;
  for (let i: number = 0; i < arr.length - 1; i++) {
    for (let j: number = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

for (let i: number = 0; i < 10; i++) {
  let arr: number[] = [];
  for (let j: number = 0; j < 100; j++) {
    let x = Math.floor(Math.random() * 101) - 50; // Range [-50, 50]
    arr.push(x);
  }

  console.log(`Test ${i + 1} :`);
  console.log("Array sorted: " + bubbleSort(arr));
}
