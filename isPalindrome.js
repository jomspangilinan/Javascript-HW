function isPalindrome(string)
{
    var isEqual = string.split('').reverse().join('') === string;
    return isEqual;
}

console.log(isPalindrome('uwu'))