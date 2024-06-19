// 1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n

function calculateFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  console.log(calculateFactorial(5))

//   2.  Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise

function isPrime(num){
    if(num<2)
        return num+ ' is not a prime number'

    for (let i=2;i<num;i++){
        if(num%2===0){
            return num + 'is not a prime number'
        }
    }
    return num +' is a prime number'
}
console.log(isPrime(5));

// 3.Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.

function sumEvenNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
console.log(sumEvenNumbers(2,10))

// 4.Write a JavaScript program to remove items(clicking on a button) from a drop-down list.
// Sample HTML file :
// <select id="colorSelect">
// <option>red</option>
// <option>green</option>
// <option>white</option>
// <option>black</option>
// </select>

function removeSelectedItem() {
    const selectElement = document.getElementById('colorSelect');
    const selectedIndex = selectElement.selectedIndex;

    if (selectedIndex !== -1) {
        selectElement.remove(selectedIndex);
    }
}


// 5.Write a JavaScript program to change the  color given text in p tag  
// Eg : if you select green then the color of the text should be green 

// Sample HTML file :
// <select id="colorSelect">
// <option>red</option>
// <option>green</option>
// <option>white</option>
// <option>black</option>
// </select>
// <button>change Color </button>
// <p>”sample test….” </p>

function changeTextColor() {
    const selectElement = document.getElementById('colorSelect');
    const color = selectElement.value;
    const sampleText = document.getElementById('sampleText');
    sampleText.style.color = color;
}



