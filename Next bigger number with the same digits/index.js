// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits
// If the digits can't be rearranged to form a bigger number, return -1



function nextBigger(num) {
    const digits = num.toString().split('');
    let i = digits.length - 2;

    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i === -1) {
        return -1;
    }

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];

    const result = parseInt([...digits.slice(0, i + 1), ...digits.slice(i + 1).reverse()].join(''));

    return result;
}


console.log(nextBigger("4389756")); // "9876543"