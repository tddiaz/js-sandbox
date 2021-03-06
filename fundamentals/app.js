
// odd or even
function isOddOrEven(num) {
    return num % 2 == 0 ? 'even' : 'odd';
}

// find least
function findSmallerAndLarger(nums) {
    if (nums === undefined || nums.length == 0) {
        return 'argument is required';
    }

    if (nums.length == 1) {
        return `the least num is ${nums[0]} and the greatest num is ${nums[0]}`
    }

    let least;
    let greatest;

    if (nums[0] > nums[1]) {
        greatest = nums[0]
        least = nums[1];
    } else {
        greatest = nums[1]
        least = nums[0];
    }
   
    for (let i = 2; i < nums.length; i++) {
        let current = nums[i];
        if (current < least) {
            least = current;
        } else if (current > greatest) {
            greatest = current;
        }
    }

    return `the least num is ${least} and the greatest num is ${greatest}`;
}

// palindrome
function isPalindrome(word) {
    if (word === null || word === undefined || word.length == 0) {
        return false;
    }

    let reversedWordString = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWordString+=word[i];
    }
    
    return {reversedWord: reversedWordString, palindrome: word === reversedWordString};
    // return word === word.split("").reverse().join("");
}


// basic sort given array of nums and sort direction
function doBasicSort(nums, asc) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (asc ? nums[i] > nums[j] : nums[i] < nums[j]) {
                let right = nums[j];
                nums[j] = nums[i];
                nums[i] = right; 
            }
        }
    }

    return nums;
}

// power of 2
function powerOfTwo(n) {
    // if (n == 0) 
    //     return false; 
          
    // while (n != 1) { 
    //     if (n % 2 != 0) 
    //         return false; 
    //     n = n / 2; 
    // } 
    // return true; 
    let log = Math.log2(n);
    return Math.ceil(log) === Math.floor(log);
}


