// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//create a function
//returns first 10 nums of fibo sequence in an array
const fiboSeq = () => {
  var fibArr = [1,1]
  var len = 2
  while (len < 10){
    fibArr.push(fibArr[len - 1] + fibArr[len - 2]);
    len += 1;
  }
  return fibArr
}

console.log('fib array: ' + fiboSeq())


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function takes in an array
//returns a new array of only odd & sorted from least to greatest

const sortedOdd = (array) => {
  return array.filter(value => Math.abs(value) % 2 > 0 && typeof(value) == 'number' ).sort((a,b) => a - b)
}
console.log(sortedOdd(fullArr1));
console.log(sortedOdd(fullArr2));


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//create a function takes in a string of a single word
//reutrns the middle letter
//if even # of letters two middle letters returns
//else one mid letter

const midChar2 = (str) => {
  if(str.length % 2 === 0) {
    var firstIndex =  (str.length/2) - 1
    var secondIndex = Math.floor(str.length / 2)
    return str[firstIndex] + str[secondIndex]
  }
  else {
    return str[Math.floor(str.length/2)]
  }
}
// // console.log(middleLetters1.split(''))
console.log(midChar2(middleLetters1));
console.log(midChar2(middleLetters2));



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class SphereArea {
  constructor(radius) {
    this.radius = radius
  }
  area() {
    var areaFormula= Math.PI * 4 * Math.pow(this.radius, 2)
    return `Area of Sphere: ${areaFormula} cm^2`
  }
}

var sphere1 = new SphereArea (3)
var sphere2 = new SphereArea (9)
var sphere3 = new SphereArea (100)

console.log(sphere1.area());
console.log(sphere2.area());
console.log(sphere3.area());


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const accumSum = (array) => {
  return array.map((value, index) => {
    if (index == 0){
      return value
    }
    else{
      return value + array[index-1]
    }
  })
}
console.log(accumSum(numbersToAdd1));
console.log(accumSum(numbersToAdd2));
console.log(accumSum(numbersToAdd3));
