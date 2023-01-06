const isLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase();
}// Only works for lowerCase letters.
export const caesarCipher = (str, shift) => {
    // GitHub: copilot is cracked... what is this technology??
    // There are some bugs but it's still pretty cool

    // create a string of all the letters in the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // create an empty string to hold the final result
    let result = "";
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
       
        


        if (!isLetter(str[i])) {
            result += str[i];
        } else {
             let index = alphabet.indexOf(str[i]);
            result += alphabet[(index + shift) % 26];
        }
    }
    return result;
  // return the final string
}