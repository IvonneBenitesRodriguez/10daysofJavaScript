function reverseString(s) {
    try {
 s = s.split('').reverse().join('');
       } catch(e) {
           console.log('s.split is not a function');
       }
       console.log(s);
}

/*Note:
catch(e) --> here the e specifies the error object.<br/>
The error object typically contains properties like message (describing the error)<br/>
 and stack (providing a stack trace).<br/>
 */

 /*Syntax of try, catch and finally 
 try {
    //code that might throw an exception 
 } catch (error) {
    //code to handle the exception
 } finally {
    // code that will be executed regardless of whether there was an error or not.
 }
 */
