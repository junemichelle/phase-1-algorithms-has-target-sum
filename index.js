function hasTargetSum(array, target) {
  // Write your algorithm here
  const OldNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (OldNumbers.has(complement)) {
      return true;
    }
    OldNumbers.add(array[i]);
  }
  return false;
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));

/* 
  Write the Big O time complexity of your function here

  We iterate through the array once, performing constant-time operations in each iteration.
  The time complexity of this function is O(n), where n is the length of the array.

*/

/* 
  Add your pseudocode here

  1. Create an empty set called seenNumbers.
  2. Iterate through the array:
     - For each element in the array:
       - Calculate the complement by subtracting the element from the target.
       - Check if the complement exists in the seenNumbers set.
       - If it exists, return true, as we found a pair.
       - Otherwise, add the current element to the seenNumbers set.
  3. If the loop completes without finding a pair, return false.

*/

/*
  Add written explanation of your solution here

  - For each element in the array, we calculate its complement (the number needed to reach the target).
  - If the complement exists in the set, we return true because we found a pair.
  - If we iterate through the entire array without finding a pair, we return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
