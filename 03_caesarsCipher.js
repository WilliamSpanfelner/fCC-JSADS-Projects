// Caesars Cipher
/*
One of the simplest and most widely known ciphers is a 
Caesar cipher, also known as a shift cipher. In a shift cipher 
the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the 
values of the letters are shifted by 13 places. Thus A ↔ N, 
B ↔ O and so on.

Write a function which takes a ROT13 encoded string as 
input and returns a decoded string.

All letters will be uppercase. Do not transform any non-
alphabetic character (i.e. spaces, punctuation), but do pass 
them on.
*/

function rot13(str) {
    // Empty string to build decoded string
    let decodedStr = "";
    // Iterate through the string and log the Unicode for chars to console
    for (i = 0; i < str.length; i++) {
        const letter = str[i];
        const letterUnicode = str.charCodeAt(i);
        // Add non-alphabetic characters to the decodedStr without further processing
        if (letterUnicode < 65 || letterUnicode > 90) {
            decodedStr += letter;
        } else {
            // Subtract 13 from chars to decode and build decodedStr
            let newCharCode = letterUnicode - 13;
            if (newCharCode < 65) {
                console.log("This is a char < A");
            }
            const decodedUnicode = String.fromCharCode(letterUnicode - 13);
            console.log(letter, letterUnicode, letterUnicode - 13, decodedUnicode);
        }
    }
    console.log(decodedStr + "*");
    return decodedStr
}

const testData = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ ,", "SERR PBQR PNZC"]
rot13(testData[0][27])