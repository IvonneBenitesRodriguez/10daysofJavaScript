function vowelsAndConsonants(s) {
    let len = s.length;
    let vowels = [];
    let consonants = [];
    
    for (let i=0; i < len; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        }
    }
    let concatArr = [...vowels, ...consonants];
    for (let i of concatArr) {
        console.log(i);
    }
}
vowelsAndConsonants('javascriptloops');