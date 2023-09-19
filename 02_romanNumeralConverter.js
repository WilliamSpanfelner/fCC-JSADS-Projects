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

function convertToRoman(num) {
    // Iterate through the romanNumerals object and print keys to console.
    for (const numeral in romanNumerals) {
        console.log(numeral);
    }

    return num;
}

console.log(convertToRoman(36));