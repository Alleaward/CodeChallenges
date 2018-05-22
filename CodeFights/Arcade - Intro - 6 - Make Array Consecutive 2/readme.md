# Challenge Specification
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.

# Solution
```javascript
function makeArrayConsecutive2(statues) {
   var max = Math.max.apply(null,statues); 
   var min = Math.min.apply(null,statues);
   console.log(statues.length + 1);
   
   //max value - min value - count of values + 1
   console.log(max, "-", min, "-", statues.length, "+", 1);
   console.log(max, "-", min, "=", max-min);
   console.log(max-min, "-", statues.length, "=", max-min - statues.length);
   console.log(max-min - statues.length, "+", 1, "=", max-min - statues.length + 1);

   return max - min - statues.length + 1;
}

```