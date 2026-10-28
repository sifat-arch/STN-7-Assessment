// Problem 1: Staircase
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  let rows = [];

  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return rows.join("\n");
};

// Problem 2: Grading Students
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  let studentGrads = [];

  for (let i = 0; i <= grades.length - 1; i++) {
    if (grades[i] < 38) {
      studentGrads.push(grades[i]);
    } else {
      const nextMultiple = Math.ceil(grades[i] / 5) * 5;
      if (nextMultiple - grades[i] < 3) {
        studentGrads.push(nextMultiple);
      } else {
        studentGrads.push(grades[i]);
      }
    }
  }

  return studentGrads;
};

// Problem 3: Time Conversion
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  let time = "";
  const hour = s.slice(0, 2);
  const rest = s.slice(2, 8);
  const period = s.slice(8, 10);

  if (period === "AM") {
    if (hour === "12") {
      time = "00" + rest;
    } else {
      time = hour + rest;
    }
  } else {
    if (hour < "12") {
      time = `${Number(hour) + 12}${rest}`;
    } else {
      time = `${hour}${rest}`;
    }
  }

  return time;
};

// Problem 4: String Repeat
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  return s.repeat(n);
};

// Problem 5: Reversed Strings
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  return str.split("").reverse().join("");
};

// Problem 6: Sum of Positive
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  let finalNumber = 0;

  arr.forEach((element) => {
    if (element < 0) {
      finalNumber = finalNumber + 0;
    } else {
      finalNumber = finalNumber + element;
    }
  });

  return finalNumber;
};

// Problem 7: Grasshopper — Summation
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  return (num * (num + 1)) / 2;
};

// Problem 8: Convert a Boolean to a String
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return b.toString();
};

// Problem 9: Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let finalArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      finalArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      finalArr.push("Fizz");
    } else if (i % 5 === 0) {
      finalArr.push("Buzz");
    } else {
      finalArr.push(String(i));
    }
  }

  return finalArr;
};

// Problem 10: Running Sum of 1D Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sumArr = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    sum += value;
    sumArr.push(sum);
  }

  return sumArr;
};

// Problem 11: Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  for (const customer of accounts) {
    let sum = 0;

    for (const amount of customer) {
      sum += amount;
    }

    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }

  return maxWealth;
};

// Problem 12: Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// Problem 13: Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }

  return false;
};

// Problem 14: Move Zeroes
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
};

// Problem 15: Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
};

// Problem 16: 3Sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  if (!nums || nums.length < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Problem 17: Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};

// Problem 18: Reverse String
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};

// Problem 19: Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let end = s.length - 1;

  while (end >= 0 && s[end] === " ") {
    end--;
  }

  let length = 0;
  while (end >= 0 && s[end] !== " ") {
    length++;
    end--;
  }

  return length;
};

// Problem 20: Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
