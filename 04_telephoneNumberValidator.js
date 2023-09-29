// Telephone Number Validator
/*
Return true if the passed string looks like a valid US phone 
number.

The user may fill out the form field any way they choose as 
long as it has the format of a valid US number. The following 
are examples of valid formats for US numbers (refer to the 
tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 
800-692-7753 or 8oo-six427676;laskdjf. Your job is 
to validate or reject the US phone number based on any 
combination of the formats provided above. The area code 
is required. If the country code is provided, you must 
confirm that the country code is 1. Return true if the 
string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    // Define regex - 
    // const regex = /\d{10}/;  // matches strings 10 digits in length
    // const regex = /\d{3}(\s|\-)\d{3}\1\d{4}/; // matches strings with 2 groups of 3 digits and a space or hyphen and a final 4 digits
    
    // Combining the above regexes with the or operator gets more matches
    // const regex = /\d{10}|\d{3}(\s|\-)\d{3}\1\d{4}/; 
    
    const regex = /^(1\s)?\d{3}(\s?\-?)\d{3}\2\d{4}/; // match a leading 1 for the country code
    
    console.log(str.match(regex));

    // return test boolean
    return regex.test(str);
}

// telephonCheck("555-555-5555")

const testData = [
    '800-692-7753',
    '555-555-5555',
    '(555)555-5555',
    '(555) 555-5555',
    '555 555 5555',
    '5555555555',
    '1 555 555 5555',
    '8oo-six427676;laskdjf'
];
let matchCount = 0;
for (const item of testData) {
    let returnedBool = telephoneCheck(item)
    console.log(item, returnedBool);
    if (returnedBool) {
        matchCount++;
    }
}
console.log(matchCount, testData.length, matchCount / testData.length * 100);
// console.log(telephoneCheck(testData[1]));