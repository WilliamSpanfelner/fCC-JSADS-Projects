// Roman Numeral Converter
// Convert the given number into a roman numeral

/**
 * convertToRoman takes an integer and returns a Roman numeral equivalent
 * @param {*} num - only integers
 * @returns a roman numeral equivalent of the num passed to the function
 */
function convertToRoman(num) {
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
        4: 'IV',
        1: 'I'
    };
    // 1. The num passed in will become an equivalent romanNumeral string
    let romanNumeral = ""; 

    // 2. Get the largest factor of 10 for num
    // let exp = String(num).length - 1;
    // console.log(`Magnitude of ${num} is ${exp}`)
    
    // 3. Add balance variable to account for changes
    let balance = num;

    // 8. Repeat procedure until balance is reduced to zero
    while (balance > 0) {
        // 4. Store the largest object property compared to balance
        // let arabicKeys = [];
        // 5. Iterate through the romanNumerals object to find largest keys.
        // for (const arabicNum in romanNumerals) {
        //     if (arabicNum <= balance) {
        //         // console.log("arabicNum = ", arabicNum);
        //         arabicKeys.push(arabicNum);
        //     }
        // }
    
        const arabicKeys = Object.keys(romanNumerals).filter(element => element <= balance);
        // console.log(arabicKeys);

        // 6. Update romanNumeral
        let largestArabicValue = Math.max(...arabicKeys);
        romanNumeral += romanNumerals[largestArabicValue];
        // console.log(largestArabicKeys, largestArabicValue);
    
        // 7. Update balance
        balance -= largestArabicValue;
    }

    return romanNumeral + " " + balance + " " + num;
}

const testData = [2023, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 36, 38, 360, 49];

for (const i in testData) {
    console.log(convertToRoman(testData[i]));
}