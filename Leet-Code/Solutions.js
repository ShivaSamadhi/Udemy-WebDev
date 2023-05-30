/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
 */
const romanToInt = (str) => {
    let integer = 0
    for (let i = 0; i < str.length; i++){
        switch (str[i]) {
            case `I`:
                if(str[i+1] === `V`)
                    integer += 4
                else if(str[i+1] === `X`)
                    integer += 9
                else
                    integer += 1
                break;

            case `V`:
                if(str[i-1] === `I`)
                    integer +=0
                else
                    integer += 5
                break;

            case `X`:
                if(str[i-1] === `I`)
                    integer +=0
                else if(str[i+1] === `L`)
                    integer += 40
                else if(str[i+1] === `C`)
                    integer += 90
                else
                    integer += 10
                break;

            case `L`:
                if(str[i-1] === `X`)
                    integer +=0
                else
                    integer += 50
                break;

            case `C`:
                if(str[i-1] === `X`)
                    integer +=0
                else if(str[i+1] === `D`)
                    integer += 400
                else if(str[i+1] === `M`)
                    integer += 900
                else
                    integer += 100
                break;

            case `D`:
                if(str[i-1] === `C`)
                    integer += 0
                else
                    integer += 500
                break;

            case `M`:
                if(str[i-1] === `C`)
                    integer += 0
                else
                    integer += 1000
                break;
        }
    }
    console.log(integer)
    return integer
}
romanToInt("MCMXCIV")

/*2626. Array Reduce Transformation
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return init.*/

const reduce = (nums, fn, init) => {
    let val
    if(nums.length === 0)
        return init

    nums.forEach( num =>
        nums.indexOf(num) === 0 ?
            (val = fn(init, num)) :
            (val = fn(val, num))
    )


    return val
};

/*2629. Function Composition
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

*/
const compose = (functions) => {
    return x => {
        let val

        if(functions.length === 0)
            return x

        for(let i = functions.length-1; i >= 0; i--)
            (i === functions.length-1) ?
                val = functions[i](x) :
                val = functions[i](val)

        return val
    }
};

/*2634. Filter Elements from Array
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.*/
const filter = (arr, fn) => {
    let returnedArr = []
    arr.forEach(num => {
        if(fn(num, arr.indexOf(num)))
            returnedArr.push(num)
    })
    return returnedArr
};

/*2666. Allow One Function Call
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/
const once = function(fn) {
    let count = 0
    return (...args) => {

        if(count === 0){
            count++
            return fn(...args)
        }

        return undefined
    }
};

