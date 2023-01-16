"use strict"

/*
Given the existing code below, can you write some code so that their values are switched around?

var a = "3";
var b = "8";

So that the variable a holds the value "8".
And the variable b holds the value "3".
When the code is run, it should output:

a is 8
b is 3

Do NOT change any of the existing code.
You are NOT allowed to type any numbers.
You should NOT redeclare the variables a and b.

Hint: Use this code playground to run your code and see if it matches your expectations.
Hint: The solution is just 3 lines of code.
*/

const test = () => {
    let a = "3";
    let b = "8";

    [a, b] = [b, a]

    //console.log(`a is ${a}`);
    //console.log(`b is ${b}`);
}
 test()

/*
Destructuring assignment (a feature of ES2015) lets you extract items of an array into variables. For example, the following code destructures an array:

let a;
let b;
[a, b] = [1, 2, 3];

a; // => 1
b; // => 2

[a, b] = [1, 2, 3] is a destructuring assignment that destructures [1, 2, 3] array. a variable is assigned with the first item 1 of [1, 2, 3], correspondingly b is assigned with the second item 2.

Knowing how to destructure an array, it's easy to use it for swapping variables. Let's swap the variables a and b using destructuring assignment:

let a = 1;
let b = 2;
[a, b] = [b, a];

a; // => 2
b; // => 1

[a, b] = [b, a] is the destructuring assignment that swaps the variables a and b.

At the first step, on the right side of the destructuring, a temporary array [b, a] (which evaluates to [2, 1]) is created.

Then the destructuring of the temporary array occurs: [a, b] = [2, 1]. The variable a is assigned with 2, and b with 1. The swapping of a and b has been performed.

I like the destructuring approach because it's short and expressive: swapping is performed in just one statement. It works with any data type: numbers, strings, booleans, objects.

I recommend swapping variables using a destructuring assignment for most of the cases.
 */

/*Strings, String Length*/
const tweet = "hjsbdkjhsbefjhvshbfvjhsbefvbsjfhb vjadfvjhbaefjhbvaj jhdfbvjjfkhbvxjhdfvjhsdbfvhjfhbjhsdbfjhbsrghaisbdkjahkjfhrgliaherlughakjbergherjvlsj we sdjuyfgvsjhfvjhgzdfjhvskjhfkhvs";

const remainingChars = (tweet) =>{
    const totalLength = 140;
    const tweetCount = tweet.length;

    const charsLeft = totalLength - tweetCount;

    // if(tweetCount > totalLength){
    //     const finalTweet = tweet.slice(0,140);
    //     //console.log(finalTweet)
    // }

    const ternary = tweetCount > totalLength ? tweet.slice(0,140) : tweet
    //console.log(ternary)

    //console.log(`You've used ${tweetCount} characters, you have ${charsLeft} characters remaining!`);
};
remainingChars(tweet);

/*
1. Create const named tweet that stores a string
2. Create an arrow function named remainingChars that takes in tweet as a parameter. This function will be used to count the number of characters in the string and calculate how many characters are left for the tweet
3.Create const called totalLength that sores the number 140 (the amount of chars allowed for a tweet, then create a const called tweet length that stores the value of tweet.length
    -the .length method parses the string and counts the number of chars in the string and returns a number
4. Create a const named charLeft which subtracts the tweet length from the total length and stores the value
5. Console log the results in a template literal

Slice
-When using .slice(x,y), you can quickly determine the range by "y-x" where x is the start of the slice and y is the exclusive upper-bound

Ternary
-The only JavaScript operator that takes three operands:

    1. A conditional statement followed by a question mark (?)
    2. An expression to execute if the condition is truthy followed by a colon (:)
    3. The expression to execute if the condition is falsy.

This operator is frequently used as an alternative to an if-else statement.*/



const changeCase = (name) => {
    name = "ramaj"
    const firstChar = name.slice(0,1);
    const remainingChar = name.slice(1, name.length);
    // if(firstChar === firstChar.toLowerCase()){
    //     //let newName = `${firstChar.toUpperCase()}${remainingChar}`;
    //     //console.log(newName);
    // }
    // else
    // //console.log(name)

    const finalName =
        (firstChar !== firstChar.toUpperCase() || remainingChar !== remainingChar.toLowerCase())
        ? `${firstChar.toUpperCase()}${remainingChar.toLowerCase()}`
        : name

    console.log(finalName)
}
changeCase();

/*Functions*/
const milkPrice = 5.76;
const money = 40;

const getMilk = (money, milkPrice) => {
    console.log(quantityPurchased(money, milkPrice));
    console.log(exactChange(money, milkPrice));
}

const quantityPurchased = (money, milkPrice) => Math.floor(money/milkPrice);

const exactChange = (money, milkPrice) => (money - (milkPrice * quantityPurchased(money, milkPrice)))
    .toFixed(2);

getMilk(money, milkPrice);

/*In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.
Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input
e.g. If you are 56 years old:
lifeInWeeks(56)
Example Output
You have 12410 days, 1768 weeks, and 408 months left.

Hint
Try using this Repl.it playground to test your code and see if the output is what you expect it to be.
Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, commas and full stops.*/


const lifeInWeeks = (age) => {

    let yearConversionRates = [365, 52, 12]

    const yearConversion = (years, conversionRate) => years * conversionRate
    const remainingLifespan = (totalLifespan, age) => totalLifespan - age;

    const days = yearConversion(remainingLifespan(90,age), yearConversionRates[0])
    const weeks = yearConversion(remainingLifespan(90,age), yearConversionRates[1])
    const months = yearConversion(remainingLifespan(90,age), yearConversionRates[2])

    let timeLeftInLifespans =
        `You have ${days} days, ${weeks} weeks, and ${months} months left`

    console.log(timeLeftInLifespans)
}
lifeInWeeks(4)