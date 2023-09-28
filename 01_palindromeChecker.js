
/**
 * A palindrome is a word or sentance that's spelled the same way both 
 * forward and backward, ignoring punctuation, case and spacing.
 * @param {*} str 
 * @returns true if a given string is a palindrome or false otherwise
 */
function palindrome(str) {
    // save original str
    const refString = str;    
    // change case to lower
    const stringInLowerCase = refString.toLowerCase();
    // remove white space
    const stringWithNoWhiteSpace = stringInLowerCase.split(/\s/).join('');
    // remove punctuation
    const alphanumerics = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
                            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
                            'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', 
                            '4', '5', '6', '7', '8', '9']

    let cleanString = '';
    for (const letter of stringWithNoWhiteSpace) {
        if (alphanumerics.includes(letter)) {
            cleanString += letter;
        }
    }
    
    // Another way of writing the conditional to acheive same result
    // for (const letter of stringWithNoWhiteSpace) {
    //     if (alphanumerics.indexOf(letter) > -1) {
    //         cleanString += letter;
    //     }
    // }

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

    // reverse cleanString
    // reversedString = reverseString(testString.length - 1).join("");
    const reversedString = reverseString(cleanString.length - 1).join("");
    // console.log(reverseString(testString.length - 1).join(""));

    // compare with reference string
    // console.log(refString, stringInLowerCase, stringWithNoWhiteSpace, cleanString, reversedString);
    return cleanString == reversedString;
}

const palindromes = [
    "Fred",
    "hello",
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
