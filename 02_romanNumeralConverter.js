// Roman Numeral Converter
// Convert the given number into a roman numeral

const romanNumerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    1: 'I'
};

/**
 * convertToRoman takes an integer and returns a Roman numeral equivalent
 * @param {*} num - only integers
 * @returns a roman numeral equivalent of the num passed to the function
 */
function convertToRoman(num) {
    // 1. The num passed in will become an equivalent romanNumeral string
    let romanNumeral = ""; 

    // 2. Get the largest factor of 10 for num
    let exp = String(num).length - 1;
    console.log(`Magnitude of ${num} is ${exp}`)
    
    // 3. Add balance variable to account for changes
    let balance = num;

    // 4. Store the largest object property compared to balance
    let largestArabicKeys = [];
    // 5. Iterate through the romanNumerals object to find largest keys.
    for (const arabicNum in romanNumerals) {
        if (balance >= arabicNum) {
            largestArabicKeys.push(arabicNum);
        }
    }
    
    console.log(largestArabicKeys, Math.max(...largestArabicKeys));

    return romanNumeral + " " + num;
}

const testData = [3000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 36, 38, 360, 39];
console.log(convertToRoman(testData[0]));