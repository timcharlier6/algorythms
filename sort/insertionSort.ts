function insertSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

let inc: number = 10;
for (let i: number = 0; i < 10; i++) {
  let arr: number[] = [];
  // Create an array with random values based on `inc`
  for (let j: number = 0; j < inc; j++) {
    // Generate random numbers between -50 and 50, adjust as needed
    let x = Math.floor(Math.random() * 100) - 50;
    arr.push(x);
  }

  // Increase `inc` for the next test case
  inc += 10;

  // Sort and output results
  console.log(`Test ${i + 1} :`);
  console.log("Original array:", arr);
  console.log("Sorted array:", insertSort(arr));
  console.log("---");
  if (inc === 100) break;
}
