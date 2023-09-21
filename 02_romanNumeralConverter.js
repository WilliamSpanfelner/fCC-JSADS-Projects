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
    // The num passed in will become an equivalent romanNumeral string
    let romanNumeral = ""; 

    // Iterate through the romanNumerals object and print keys to console.
    for (const numeral in romanNumerals) {
        console.log(numeral);
    }

    // get the magnitude of num
    const mag = String(num).length - 1;
    console.log(`Magnitude of ${num} is ${mag}`)

    return num;
}

console.log(convertToRoman(36));