function reverseInputString() {
    let string = document.getElementById('textInput').value
    document.getElementById('output').innerHTML = string.includes(' ') ? string.split(' ').map(elt => elt.split('').reverse().join('')).join(' ') : string.split('').reverse().join('')
}