// Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs.

// The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated.

// For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result, 7, would be the check digit.

function createCheckDigit(membershipId) {
  function sum (number) {
    let result = number.split('').map(x => parseInt(x)).reduce((acc, val) => acc + val).toString()
    
    if (result.length > 1) {
     result = sum(result)
    }
    
    return result
  }
  
  return sum(membershipId)
}

console.log(createCheckDigit("55555"));
