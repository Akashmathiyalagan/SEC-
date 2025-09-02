// Reverse Word in a Sentence
console.log("Reverse Word in a Sentence");
let sentence="Hello World from JavaScript";
let words = sentence.split(" ").reverse().join(" ");
console.log(words);

//Remove Duplicates from an Array
const arr=[1,1,2,3,4,2,5];
const removed_duplicates=[...new Set(arr)];
console.log(removed_duplicates);

//Count Vowels in a string
const str="java script";
const count_vowels=str.match(/[aeiou]/gi).length;
console.log(count_vowels);