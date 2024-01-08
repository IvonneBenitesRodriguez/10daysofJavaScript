function reverseString(s) {
    typeof s !== 'string'
    ? console.log('s.split is not a function')
    : (s = s.split('').reverse().join(''));
    console.log(s);
}
/* methods used:
typeof = The typeof operator in JavaScript<br/>
is used to determine the type of a variable or an expression. It returns a string representing
the data type of the operand.<br/> */

/* split = this method of String values takes a pattern and divides this string into an<br/>
 ordered list of substrings by searching for the pattern,<br/>
 puts these substrings into an array and returns the array.<br/>
 */

 /*Note:
 reverse method always goes together with join method.
 Ex:
 s = s.split('').reverse().join('');
 */

 