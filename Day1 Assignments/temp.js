function Person(fn,ln,s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
}

const persons = [
    new Person("Kurt", "Wonnegut", "Soccer"),
    new Person("Jan", "Peterson", "Hockey")
]

var string = ""

for(property in persons){
    if (persons.hasOwnProperty(property)) {
        // do stuff
    }
    
    console.log(persons[property])
}

console.log(string)