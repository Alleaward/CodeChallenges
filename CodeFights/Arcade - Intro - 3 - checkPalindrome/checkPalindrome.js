function checkPalindrome(inputString) {
    //Normalise String
    var startingString = inputString.toLowerCase();
    //Split, Reverse and rejoin the string to compare against original
    var reversedString = startingString.split("").reverse().join("");
    //Compare startingString with reversedString
    if (startingString === reversedString) {
        return true;
    }
    return false;
}