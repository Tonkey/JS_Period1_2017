//Arrow functions are, in the below example, shorthand callbacks.
let evens = [2,4,6,8,10,12,14,16,18,20]

// odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)

odds = evens.map(v => {
    return v+1
})

odds.forEach(function(element) {
    console.log(element)
}, this);
// ES5
// odds  = evens.map(function (v) { return v + 1; });
// pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
// nums  = evens.map(function (v, i) { return v + i; });