/**
 * A palindrome is a word or sentance that's spelled the same way both 
 * forward and backward, ignoring punctuation, case and spacing.
 * @param {*} str 
 * @returns true if a given string is a palindrome or false otherwise
 */
function palindrome(str) {
    const cleanString = str
    .split(/\s*/)
    .filter(element => element.match(/[a-z0-9]/i))
    .join('')
    .toLowerCase();

    // testString = "12345"
    function reverseString(n) {
        if (n < 0) {
            return [];
        } else {
            const charArray = reverseString(n - 1);
            charArray.unshift(cleanString[n]);
            return charArray;
        }
    }
    
    const reversedString = reverseString(cleanString.length - 1).join("");
    
    return cleanString == reversedString;
}

const palindromes = [
    "Fred",
    "hello",
    "A man, a plan, a canal. Panama",
    "_eye",
    "E Y  E",
    "eye",
    "EYE",
    "Ada",
    "racecar",
    "RaceCar",
    "race Car",
    "2A3*3a2",
    "2A3 3a2",
    "2_A3*3#A2"
]
// for (let i = 0; i < palindromes.length; i++) {
//     console.log(i, palindromes[i], palindrome(palindromes[i]));
// }
// Another more readable way of writing the above for-loop
for (const word in palindromes) {
    console.log(word, palindromes[word], palindrome(palindromes[word]));
}

// console.log(palindromes[2], palindrome(palindromes[2]));