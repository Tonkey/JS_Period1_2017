var names = ['lars', 'jan', 'peter', 'bo', 'frederik'];

//creating functions
/* function myMap(array, callback){
    var newArray = [];
    array.forEach(function(element) {
        newArray.push(callback(element))
    });
    return newArray;
} */

function myMap(array, callback){
    var newArray = [];
    array.forEach((element) => {
        newArray.push(callback(element))
    });
    return newArray;
}

function myFilter(array, callback){
    var newArray = []
    array.forEach(function(element){
        if(callback(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

//calling functions
var upprCaseNames = myMap(names, function(name){
    return name.charAt(0).toUpperCase() + name.substring(1);
})

var shortNames = myFilter(names, function(name){
    return name.length <= 3;
})

//printing function results
console.log(upprCaseNames);

console.log(shortNames);