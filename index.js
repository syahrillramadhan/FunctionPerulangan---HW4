// Fungsi untuk membuat array random
const createRandomArray = (length, min, max) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.round(Math.random() * (max - min + 1)) + min);
  }
  return randomArray;
};

// Fungsi untuk memisahkan array genap dan ganjil
const separateEvenOdd = (array) => {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return [evenArray, oddArray];
};

// Fungsi untuk menghitung nilai minimum
const calculateMin = (array) => {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

// Fungsi untuk menghitung nilai maksimum
const calculateMax = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

// Fungsi untuk menghitung total
const calculateTotal = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

// Fungsi untuk menghitung rata-rata
const calculateAverage = (array) => {
  let total = calculateTotal(array);
  return total / array.length;
};

// Fungsi untuk membandingkan dua array
const compareArrays = (array1, array2) => {
  let comparisonResult = {
    min:
      calculateMin(array1) >= calculateMin(array2)
        ? "Min lebih besar array genap"
        : "Min lebih besar array ganjil",
    max:
      calculateMax(array1) >= calculateMax(array2)
        ? "Max lebih besar array genap"
        : "Max lebih besar array ganjil",
    total:
      calculateTotal(array1) === calculateTotal(array2)
        ? "Total memiliki nilai sama antara array genap dan ganjil"
        : "Total tidak memiliki nilai sama antara array genap dan ganjil",
    average:
      calculateAverage(array1) >= calculateAverage(array2)
        ? "Rata-rata lebih besar array genap"
        : "Rata-rata lebih besar array ganjil",
  };
  return comparisonResult;
};

// Membuat array random
let randomArray = createRandomArray(100, 1, 50);

// Memisahkan array genap dan ganjil
let separatedArrays = separateEvenOdd(randomArray);
let evenArray = separatedArrays[0];
let oddArray = separatedArrays[1];

// Menampilkan hasil
console.log("- Array dengan jumlah index 100:", randomArray);
console.log("- Array genap dengan jumlah index 50:", evenArray);
console.log(
  `- Min = ${calculateMin(evenArray)}, Max = ${calculateMax(
    evenArray
  )}, Total = ${calculateTotal(
    evenArray
  )}, Rata rata pada array genap = ${calculateAverage(evenArray)}"
  `
);

console.log("- Array ganjil dengan jumlah index 50:", oddArray);
console.log(
  `- Min : ${calculateMin(oddArray)}, Max: ${calculateMax(
    oddArray
  )}, Total: ${calculateTotal(
    oddArray
  )}, Rata rata pada array ganjil: ${calculateAverage(oddArray)}`
);

// Perbandingan nilai
let comparisonResult = compareArrays(evenArray, oddArray);
console.log(
  "- Perbandingan nilai min, max, total, dan rata-rata:",
  comparisonResult
);
