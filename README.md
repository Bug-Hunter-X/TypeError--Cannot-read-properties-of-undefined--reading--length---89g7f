# JavaScript Bug: TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of undefined (reading 'length')`.  The error occurs when attempting to access the `length` property of a variable that is `undefined`. 

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js` (Make sure you have Node.js installed).
3. Observe the TypeError.

## Solution

The solution involves adding a check to ensure the variable is defined before accessing its properties.  See `bugSolution.js` for the corrected code.