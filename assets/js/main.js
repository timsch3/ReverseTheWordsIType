function reverseWordsInString(string) {
    if (string.includes(' ')) {
        let words = string.split(' ')
        return words.map(elt => reverseWord(elt)).join(' ')
    }
    else {
        return reverseWord(string)
    }
}
function reverseWord(word) {
    let letters = word.split('').reverse()
    return letters.join('')
}

function reverseInputString() {
    document.getElementById('output').innerHTML = reverseWordsInString(document.getElementById('textInput').value)
}