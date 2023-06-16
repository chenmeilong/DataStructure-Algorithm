
function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
      (aString !== null && aString.length === 0)) { // {1}
    return false;
}
    const deque = new (require('./2.双端队列').Deque)(); // {2}
    const lowerString = aString.toLocaleLowerCase().split(' ').join(''); // {3}
    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) { // {4}
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) { // {5}
        firstChar = deque.removeFront(); // {6}
        lastChar = deque.removeBack(); // {7}
        if (firstChar !== lastChar) {
        isEqual = false; // {8}
        }
    }
    return isEqual;
}
console.log('a:', palindromeChecker('a'));
console.log('aa:', palindromeChecker('aa'));
console.log('kayak:', palindromeChecker('kayak'));
console.log('level:', palindromeChecker('level'));
console.log('Was it a car or a cat I saw:', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets:', palindromeChecker('Step on no pets'));