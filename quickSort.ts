    let i = 0;

function quickSort(arr: number[]): number[] {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Choose the pivot element from the array
    const pivot = arr[Math.floor(arr.length / 2)];

    // Partition the array into three parts:
    // - less: elements less than the pivot
    // - equal: elements equal to the pivot
    // - greater: elements greater than the pivot
    const less = arr.filter(el => el < pivot);
    const equal = arr.filter(el => el === pivot);
    const greater = arr.filter(el => el > pivot);

    // Recursively sort the 'less' and 'greater' arrays,
    // then concatenate them with the 'equal' array
    const sorting = [...quickSort(less), ...equal, ...quickSort(greater)];
    i++;
    console.log(i + "\n" + sorting)
    return sorting;
}

// Example usage
const array = [6, 8, 3, 2, 4, 1, 9, 7];
console.log(0 + "\n" + array)
const sortedArray = quickSort(array);

