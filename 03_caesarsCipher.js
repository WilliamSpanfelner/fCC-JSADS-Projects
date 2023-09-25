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
    // Print letters to console
    for (const letter in str) {
        let char = str[letter];
        console.log(char, char.charCodeAt[letter]);
    }
    // Iterate through the string and log the Unicode for chars to console
    for (i = 0; i < str.length; i++) {
        console.log(str[i], str.charCodeAt(i));
    }
    

    return str
}

const testData = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "SERR PBQR PNZC"]
rot13(testData[0])