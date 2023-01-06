// a function that takes an array of numbers and returns an object with the following properties:

// average: the average of all the numbers in the array
// min: the smallest number in the array
// max: the largest number in the array
// length: the number of items in the array
export const analyzeArray = (arr) => {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {
        average: sum / arr.length,
        min: min,
        max: max,
        length: arr.length,
    };
};
