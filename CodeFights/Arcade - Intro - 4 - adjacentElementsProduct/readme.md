# Challenge Specification
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.

# Solution
```javascript
function adjacentElementsProduct(inputArray) {
    var largest = inputArray[0] * inputArray[1];

    for (i = 0, a = 1, n = inputArray.length; i < n; i++, a++) {
        if (inputArray[i] * inputArray[a] > largest) {
            largest = inputArray[i] * inputArray[a];
        }
        console.log(largest, inputArray[i], inputArray[a]);
    }
    return (largest);
}

```