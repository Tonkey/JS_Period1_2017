var makeCounter = function() {
    var privateCounter = 0
    function changeBy(val) {
        privateCounter += val
    }
    return {
        increment: function() {changeBy(1)},
        decrement: function() {changeBy(-1)},
        value: function() {return privateCounter}
    }
}

var counter1 = makeCounter()
var counter2 = makeCounter()


// Assignment 2
var makePerson = function(newName, newAge) {
    var age = newAge
    var name = newName

    function setName(aName){
        name = aName
    }
    function setAge(anAge){
        age = anAge
    }
    function getInfo(){
        return name + ',' + age
    }

    return {
        setAge: setAge,
        setName: setName,
        getInfo: getInfo
    }
}

var person1 = makePerson('nicklas', 20)
var person2 = makePerson('julie',24)

console.log(person1.getInfo())
console.log(person2.getInfo())
person1.setAge(21)
console.log(person1.getInfo())
