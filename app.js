let a = 1

let b = 2

const c = 'String'

const d = true

console.log('if (typeof(a) == typeof(b))')
if (typeof(a) == typeof(b)) {
    console.log('they match')
} else {
    console.log('no luck')
}

console.log('typeof(a) == typeof(c)')
if (typeof(a) == typeof(c)) {
    console.log('they match')
} else {
    console.log('no luck')
}

console.log('loop over the elements of the string c')
for (i = 0; i < c.length; i++) {
    console.log(c[i])
}