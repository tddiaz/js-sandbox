
// odd or even
let isOddOrEven = function(num) {
    return num % 2 == 0 ? 'even' : 'odd';
}

// find least
let findLeastAndGreatest = function(nums) {
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
let isPalindrome = function(word) {
    if (word === null || word === undefined || word.length == 0) {
        return false;
    }

    let reversedWordArray = new Array();

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWordArray.push(word.charAt(i));
    }
    
    let reversedWordString = reversedWordArray.join("");
    
    return {reversedWord: reversedWordString, palindrome: word === reversedWordString};
    // return word === word.split("").reverse().join("");
}


// basic sort given array of nums and sort direction
let doBasicSort = function(nums, asc) {

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




