function vowelsAndConsonants(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let char of s) {
        if (vowels.has(char)) {
            console.log(char);
        }
    }

    for (let char of s) {
        if (!vowels.has(char)) {
            console.log(char);
        }
    }
}

vowelsAndConsonants('javascriptloops');