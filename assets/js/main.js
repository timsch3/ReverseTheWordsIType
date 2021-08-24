function reverseInputStringWords() {
    document.getElementById('output').innerHTML = document.getElementById('textInput').value.split(' ').map(e => e.split('').reverse().join('')).join(' ')
}