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
    // const regex = /\d{10}/;  // matches a group of 10 digits in a string
    // const regex = /\d{3}(\s|\-)\d{3}\1\d{4}/; // matches strings with 2 groups of 3 digits and a space or hyphen and a final 4 digits
    // const regex = /\d{10}|\d{3}(\s|\-)\d{3}\1\d{4}/;
    // const regex = /^(1\s)?\d{3}(\s?\-?)\d{3}\2\d{4}/; // match a leading 1 for the country code
    // const regex = /^\(\d{3}\)\s?\d{3}\-\d{4}/; // match parentheses around leading 3 digits
    // const regex = /^\(\d{3}\)\s?\d{3}\-\d{4}|^(1\s)?\d{3}(\s?\-?)\d{3}\2\d{4}$/; // match only 10-digits strings when there is a leading 1 

    const regex = /^1(\s)\d{3}\1\d{3}\1\d{4}$/g;  // match leading 1 with spaces delimiting

    // Combining the above regexes with the or operator gets more matches
    // const regex = /^\(\d{3}\)\s?\d{3}\-\d{4}|^(1\s)?\d{3}(\s?\-?)\d{3}\2\d{4}$/;
    
    console.log(str.match(regex));

    // return test boolean
    return regex.test(str);
}

// telephonCheck("555-555-5555")

const testData = [    
    '1 555 555 5555',
    '1 (555) 555-5555',
    '1(555)555-5555',
    '800-692-7753',
    '555-555-5555',
    '(555)555-5555',
    '(555) 555-5555',
    '555 555 5555',
    '5555555555',
    "27576227382",
    '8oo-six427676;laskdjf'
];
let matchCount = 0;
for (const item of testData) {
    let returnedBool = telephoneCheck(item)
    if (returnedBool) {
        console.log(item, returnedBool);
    }
    
    if (returnedBool) {
        matchCount++;
    }
}
console.log(matchCount, testData.length, matchCount / testData.length * 100);
// console.log(telephoneCheck(testData[1]));