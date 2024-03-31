/**JavaScript Array length */
let city = ["Islamabad", "Attock", "Karachi", "Lahore"];
let len = city.length;
console.log(len);

/**JavaScript Array reverse() */
let myNumbers = [1, 2, 3, 4, 5];
let reversedArray = myNumbers.reverse();
console.log(reversedArray);

/**JavaScript Array sort() */
let Planets = ["Mercury", "Venus", "Earth", "Mars"];
let sortedArray = Planets.sort();
console.log(sortedArray);

/**JavaScript Array fill() */
let fruits = ['Apple', 'Banana', 'Grape'];
fruits.fill("Cherry");
console.log(fruits);

/**Javascript Array join() */
let sentence = ["I'm", "Rafia", "Batool."];
let joinedSentence = sentence.join(" ");
console.log(joinedSentence);

/**Javascript Array toString() */
let items = ["I'm", 56, "BSE", 21];
let itemsString = items.toString();
console.log(itemsString);

/**JavaScript Array pop() */
let Mood = ["Happy", "Sad", "Angry"];
let removedMood = Mood.pop();
console.log(Mood)         
console.log(removedMood);   

/**JavaScript Array shift() */
let languages = ["English", "Java", "Python", "JavaScript"];
let first = languages.shift();
console.log(first);
console.log(languages);

/**JavaScript Array push() */
let moods = ["Happy", "Sad", "Angry"];
moods.push("Mad");
console.log(moods);

/**Javascript Array reduce() */
const message = ["JavaScript ", "is ", "fun."];
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}
let joinedString = message.reduce(joinStrings);
console.log(joinedString);

/**Javascript Array filter() */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) 
{
  if (number % 2 == 0)
    return true;
  else
    return false;
}
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);

/**JavaScript Array map() */
let integers = [2, 4, 6, 8, 10];
function square(integers) 
 {
  return integers * integers;
 }
let square_numbers = integers.map(square);
console.log(square_numbers);

/**Javascript Array some() */
function isEven(element) 
 {
    return element % 2 === 0;
 }
  let num = [1, 3, 2, 5, 4];
  console.log(num.some(isEven));

/**JavaScript Array flat() */
let number = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flattenArray = number.flat(2);
console.log(flattenArray);

/**Javascript Array.from() */
let newArray = Array.from("abc");
console.log(newArray);