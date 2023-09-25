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
        const character = str[i];
        const characterUnicode = str.charCodeAt(i);
        // Add non-alphabetic characters to the decodedStr without further processing
        if (characterUnicode < 65 || characterUnicode > 90) {
            decodedStr += character;
        } else {
            // Subtract 13 from chars to decode and build decodedStr
            let newCharCode = characterUnicode - 13;

            // Characters A-Z have unicodes 65...90
            if (newCharCode < 65) {
                let offScaleAmt = 65 - newCharCode;
                let adjustedCharCode = 91 - offScaleAmt;
                decodedStr += String.fromCharCode(adjustedCharCode);
                console.log("This is a char < A", offScaleAmt, adjustedCharCode, newCharCode % 26, String.fromCharCode(adjustedCharCode));
            } else {
                decodedStr += String.fromCharCode(newCharCode);
            }
            const decodedUnicode = String.fromCharCode(characterUnicode - 13);
            console.log(character, characterUnicode, characterUnicode - 13, decodedUnicode);
        }
    }
    console.log(decodedStr += "*");
    return decodedStr
}

const testData = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ ,", "SERR PBQR PNZC"]
rot13(testData[1][5])