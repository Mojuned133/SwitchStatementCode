var x = 5 // assigning the number 5 to x.
x == 5 // true: 5 is equal to 5.
x == '5' // true: "5" is equal to 5 in value, but not in type ("5" is a string, not a number).
x === 5 // true.
x === '5' // false: "5" is not equal in both type and value to 5.
x != 6 // true: 6 is not equal to 5.
x !== 6 // true: 6 is not equal to 5.
x != '5' // false: "5" is equal in value, but not type, to 5.
x !== '5' // true: "5" is not equal in value and type to 5.
x < 6 // true: 5 is less than 6.
x > 4 // true: 5 is greater than 4.
x <= 4 // true: 5 is less than or equal to 5
x >= 4 // false: 4 is neither greater than nor equal to 5.

