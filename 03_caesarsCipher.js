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
    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        const characterUnicode = str.charCodeAt(i);
        
        if (characterUnicode < 65 || characterUnicode > 90) {
            // Add non-alphabetic characters to the decodedStr without further processing
            decodedStr += character;            
        } else {
            /* Exploit the power of the remainder operator and the fact
            that the alphabet is 26 characters and unicode values for A-Z 
            are 65 - 90.  Taking the remainder of 65 (A) gives 13 (e.g. 65 - 26 * 2 = 65 - 52 = 13).
            In order to decode messages using this cipher, 13 must be subtracted.
            If we consider that 13 is 26 / 2, taking the remainder 26 of any 
            regular character code effectively shifts the normalized starting
            code of the alphabet to the middle (i.e. character A has value 13 
            and N has value 0.  So simple adding 65 to all of the remainder 26
            values decodes the encrypted message.*/
            let newCharCode = characterUnicode % 26 + 65;
            decodedStr += String.fromCharCode(newCharCode);
        }
    }
    return decodedStr
}

const testData = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ ,", 
    "SERR PBQR PNZC", 
    "SERR CVMMN!", 
    "SERR YBIR?",
    "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."
    ]
console.log(rot13(testData[3]));