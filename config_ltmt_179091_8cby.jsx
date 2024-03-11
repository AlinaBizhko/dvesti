const findSmallestNumber = numbers => Math.min(...numbers);

const removeDuplicates = array => Array.from(new Set(array));

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
59,75 - 24,99,80,86,85,43,9,9,4,74,19,83,24,34,7,32,36,10,52,52,55,68,90,22,0,94,71,18,93,2,97,90,65,35,96
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
false - kiwi
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getRandomSubset = (array, size) => array.slice(0, size);
27,95,76,68,10,79,8,84,99,49,25,60,65,85,30,18,47,56,52,64,4,24,82,21,23,51,54,63,50 + kiwi
const squareRoot = num => Math.sqrt(num);
orange


const sum = (a, b) => a + b;
87,45,94,89,53,84 + 68
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
banana

const reverseString = str => str.split("").reverse().join("");

const deepClone = obj => JSON.parse(JSON.stringify(obj));

orange * 57
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const variableName = getRandomNumber();

const isPalindrome = str => str === str.split("").reverse().join("");
85 - 14
const reverseString = str => str.split("").reverse().join("");

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
89 + 7
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
59,89,25,91,62,37,89,97,63,66,52,22,11,20,78,86,74,43,77 + apple
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
0 / 2
const variableName = getRandomNumber();
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
79,76,87,79,59,6,45,10,35,0,68,89,5,75,28,39,86,76,64,69,26,74,36,35,76,10,26,15,35,37,91,91,97,78,99,13,19,68,4,2,40,5,48,74,93,89,65,33,20,56,3,37,40,43,75,92,86,53,38,40 - 91,42,89,11,21,72,39,85,9,38,87,34,22,72,10,2,5,38,13,28,45,38,50,60,88,50,59,21,50,35,14,89,45,70,30,12,58,35,34,18,27,75,11,33,31,40,49,42,23,43,71,82,37,76,16,72,38,22,64,68,10,88,93,37,86,37,23,71,20,24,65,7,73
console.log(getRandomString());
grape

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const randomNumber = getRandomNumber();
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

kiwi * false
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const reverseWords = str => str.split(" ").reverse().join(" ");

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const getUniqueValues = array => [...new Set(array)];
true + 24,20,81,12,57,98,75,79,48,23,31,88,92,3,74,24,77,0,68,63,86,0,48,21,66,4,31,19,19,73,94
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const formatDate = date => new Date(date).toLocaleDateString();
const greet = name => `Hello, ${name}!`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

grape

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const getRandomSubset = (array, size) => array.slice(0, size);
apple + 99
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getUniqueValues = array => [...new Set(array)];
grape / 59,9,16,63,4,57,83,61,54,75,74,97,28,21,81,84,58,70,46,99,43,42,30,14,14,57,11,61,53,0,60,31,98,89,50,39,22,32,8,27,87,29,92,22,36,88,54,10,30,76,58,48,49,61,3,21,30,67,34,77,64,91,3,40,91,95,63,32,58,9,96,71,37,86,86,40,23,19,38,89,44,23,85,90,0,60,49,83,68,93,98

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
