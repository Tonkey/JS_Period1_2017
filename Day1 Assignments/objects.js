//OBS all console.log() are out commented for easier running of the code, 
//if you want to see the result of a specific assignment, incomment the console.log() for that assignment

//Assignment 1
var aPerson = {name: "testing", age: 20, hobby: "something", email: "test@test.com"}

//for (var element in object) basically works like a foreach, since object by themselves do not support a direct .foreach function.
//the below function also shows the use of hasOwnProperty
for (var data in aPerson) {
    if(!aPerson.hasOwnProperty(data)){
        //checks if the object has a property under the name placed in data.
        continue
    }
    // console.log(data + ' : ' + aPerson[data])
}

//deleting a property and printing again to show that the property is in fact deleted.
delete aPerson.hobby

// console.log(aPerson)

//Assignment 2

function person(first, last, age){
    this.firstName = first
    this.lastName = last
    this.age = age
    this.getFull = function() {
        return this.firstName + " " + this.lastName + ", " + this.age;
    }
}

var myPerson = new person('Nicklas', 'Molving', 20);
// console.log(myPerson.getFull());

//Assignment 3
var client = {clientName: 'NaviWorld', cvrNumber: 12345678, accountBalance: 2000.00, contactInformation: 'Hans Hansen'}

for(data in client){
    // console.log(data + ': ' + client[data])
}
delete client.contactInformation

for(data in client){
    // console.log(data + ': ' + client[data])
}