# STN-7 Problem Solving Assessment

This repository contains solutions to all 20 assigned problems implemented in JavaScript (Node.js).

## File Structure

```text
STN-7-Assessment/
├── solution.js    # Single file containing all 20 problem solutions
├── README.md      # Documentation of problems, approaches, and test cases
```

---

## Problems & Solutions Overview

| # | Problem Name | Function Signature | Time Complexity | Space Complexity |
|---|---|---|---|---|
| 1 | Staircase | `staircase(n)` | O(n²) | O(n) |
| 2 | Grading Students | `gradingStudents(grades)` | O(n) | O(n) |
| 3 | Time Conversion | `timeConversion(s)` | O(1) | O(1) |
| 4 | String Repeat | `repeatStr(n, s)` | O(n * len(s)) | O(n * len(s)) |
| 5 | Reversed Strings | `solution(str)` | O(n) | O(n) |
| 6 | Sum of Positive | `positiveSum(arr)` | O(n) | O(1) |
| 7 | Grasshopper — Summation | `summation(num)` | O(1) | O(1) |
| 8 | Convert a Boolean to a String | `booleanToString(b)` | O(1) | O(1) |
| 9 | Fizz Buzz | `fizzBuzz(n)` | O(n) | O(n) |
| 10 | Running Sum of 1D Array | `runningSum(nums)` | O(n) | O(n) |
| 11 | Richest Customer Wealth | `maximumWealth(accounts)` | O(m * n) | O(1) |
| 12 | Remove Duplicates from Sorted Array | `removeDuplicates(nums)` | O(n) | O(1) [In-place] |
| 13 | Contains Duplicate | `containsDuplicate(nums)` | O(n) | O(n) |
| 14 | Move Zeroes | `moveZeroes(nums)` | O(n) | O(1) [In-place] |
| 15 | Merge Sorted Array | `merge(nums1, m, nums2, n)` | O(m + n) | O(1) [In-place] |
| 16 | 3Sum | `threeSum(nums)` | O(n²) | O(1) (excluding output) |
| 17 | Plus One | `plusOne(digits)` | O(n) | O(1) |
| 18 | Reverse String | `reverseString(s)` | O(n) | O(1) [In-place] |
| 19 | Length of Last Word | `lengthOfLastWord(s)` | O(n) | O(1) |
| 20 | Longest Common Prefix | `longestCommonPrefix(strs)` | O(S) | O(1) |

---

## Detailed Approaches for Problems 12 – 20

### Problem 12: Remove Duplicates from Sorted Array
- **Approach**: Two-pointer technique. Since the array is sorted in non-decreasing order, duplicates are adjacent. We maintain a slow pointer `k` for the placement of the next unique element. When `nums[i] !== nums[k - 1]`, we place `nums[i]` at `nums[k]` and increment `k`.
- **Complexity**: Time: $O(n)$, Space: $O(1)$ in-place.

### Problem 13: Contains Duplicate
- **Approach**: We iterate through the array maintaining a hash set `seen`. For each number, if it is already in `seen`, we immediately return `true`. If the loop finishes without finding duplicates, return `false`.
- **Complexity**: Time: $O(n)$, Space: $O(n)$.

### Problem 14: Move Zeroes
- **Approach**: Two-pointer approach. We maintain an `insertPos` pointer. First pass traverses the array and places every non-zero element at `insertPos`. The second pass fills the remainder of the array from `insertPos` to the end with zeros.
- **Complexity**: Time: $O(n)$, Space: $O(1)$ in-place.

### Problem 15: Merge Sorted Array
- **Approach**: Three-pointer approach starting from the back. Pointer `p1` tracks valid elements in `nums1`, `p2` tracks valid elements in `nums2`, and `p` tracks the insertion position from the end `m + n - 1`. Comparing from the largest values avoids overwriting elements in `nums1`.
- **Complexity**: Time: $O(m + n)$, Space: $O(1)$ in-place.

### Problem 16: 3Sum
- **Approach**: First sort the array in ascending order. Iterate with index `i` from `0` to `n - 3`. For each `i`, skip duplicates and use two pointers (`left` and `right`) to find pairs such that `nums[i] + nums[left] + nums[right] === 0`. Skip duplicates on both pointers after recording a triplet to ensure uniqueness.
- **Complexity**: Time: $O(n^2)$, Space: $O(1)$ auxiliary.

### Problem 17: Plus One
- **Approach**: Iterate from the least significant digit (rightmost). If the digit is less than 9, increment and return. If it is 9, set it to 0 and continue. If the loop ends (all digits were 9), prepend `1` to the array using `unshift`.
- **Complexity**: Time: $O(n)$, Space: $O(1)$ auxiliary.

### Problem 18: Reverse String
- **Approach**: Two-pointer technique swapping characters at `left` and `right` indices while moving `left` forward and `right` backward until they meet.
- **Complexity**: Time: $O(n)$, Space: $O(1)$ in-place.

### Problem 19: Length of Last Word
- **Approach**: Traverse backwards starting from the end of the string. First skip all trailing spaces, then count characters until the next space or the start of the string.
- **Complexity**: Time: $O(n)$, Space: $O(1)$.

### Problem 20: Longest Common Prefix
- **Approach**: Horizontal scanning. Initialize the prefix with the first string. For each subsequent string, shrink the prefix by removing the last character until the string starts with the prefix. If the prefix becomes empty, return `""`.
- **Complexity**: Time: $O(S)$ where $S$ is the sum of characters across all strings, Space: $O(1)$.

---

## How to Run

To run and verify the solutions using Node.js:

```bash
node solution.js
```
