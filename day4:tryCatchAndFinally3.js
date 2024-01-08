function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (e) {
        console.log('An error ocurred: ', e.message);
    } finally {
        if (!e) {
            console.log(s);
        }
    }
}

/*note:
the reversedString is --> s = s.split('').reverse().join('');
<br/>
*/

