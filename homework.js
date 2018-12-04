// 1. Set the variable `name` to the string "Addison".
let givenName = "Addison";
// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.
let candies = 20, people = 6, leftover = 20 % 6;
// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.
let greeting = function(name) {
  return "Hello, " + name + "!";
}
// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not. An odd number is a
// number which, when divided by 2, has a remainder of 1 or -1.
let isOdd = function (num) {
  return Math.abs(num) % 2 == 1;
}
// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not. An even number is a
// number which, when divided by 2, has a remainder of 0.
let isEven = function (num) {
  return Math.abs(num) % 2 == 0;
}

// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.

let fahrenheitToCelsius = function(fahrenheit) {
  return 5 * (fahrenheit - 32)/9;
}

// 6. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.
let celsiusToFahrenheit = function(celsius) {
  return 1.8 * celsius + 32;
}

// 7. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.

let fahrenheitToKelvin = function(fahrenheit) {
  return fahrenheitToCelsius(fahrenheit) + 273.15;
}

// 8. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.

let lesser = function(v1, v2) {
  if (v1 < v2) {
    return v1;
  } else {
    return v2;
  }
}

// 9. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.

let multigreeting = function(name, language) {
  let greetings = {
    en: "Hello",
    es: "¡Hola",
    fr: "Bonjour",
    eo: "Saluton"
  };
  if(language in greetings) {
    return `${greetings[language]}, ${name}!`;
  }
}
// 10. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

let sum = function(nums) {
  let s = 0;
  nums.forEach(function(element) {
    s = s + element;
  });
  return s;
};
// 11. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
let average = function(nums) {
  if (nums.length == 0) {
    return;
  }
  return sum(nums)/nums.length;
};

// 12. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

let minimum = function(nums) {
  let s = undefined;
  nums.forEach(function(element) {
    if (s === undefined) {
      s = element;
    } else if (s > element) {
      s = element;
    }
  });
  return s;
};

// 13. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.
let findIndex = function(num, numbers) {
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] === num) {
      return i;
    }
  }
  return -1;
}

let selectionSort1 = function(nums) {
  let arrayCopy = nums.slice(0);
  let ret = [];
  while(arrayCopy.length != 0) {
    let min = minimum(arrayCopy);
    ret.push(min);
    delete arrayCopy[findIndex(min, arrayCopy)];
  }
  return ret;
};

let findMinIndex = function(numbers, start) {
  let min = numbers[start];
  let minIndex = start;

  for(var i = start; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
      minIndex = i;
    }
  }
  return minIndex;
}

let selectionSortIterative = function(nums) {
  let ret = nums.slice(0);

  for(let i = 0; i < ret.length; i ++) {
    let minIndex = findMinIndex(ret, i);
    //swap
    let tmp = ret[i];
    ret[i] = ret[minIndex];
    ret[minIndex] = tmp;
  }

  return ret;
}

let selectionRecursive = function(nums, currentIndex = 0) {
  if (currentIndex == nums.length) {
    return nums;
  }

  let minIndex = findMinIndex(nums, currentIndex);
  let tmp = nums[currentIndex];
  nums[currentIndex] = nums[minIndex];
  nums[minIndex] = tmp;

  return selectionRecursive(nums, currentIndex + 1);
}

let selectionSort = function(nums) {
  return selectionRecursive(nums, 0);
}
