const escola = "Cod3r4s"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('4'))

console.log(escola.substring(1))
console.log(escola.substring(0,6))

console.log('escola'.concat(escola).concat('!'))
console.log('escola'+(escola)+('!'))
console.log(escola.replace(/\d/g, 'e'))

console.log('Ana,Maria,Pedro'.split(/,/))