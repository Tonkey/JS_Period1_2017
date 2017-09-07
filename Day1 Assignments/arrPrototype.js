var names = ['lars', 'jan', 'peter', 'bo', 'frederik'];

//Adding functions to Array Prototype.
Array.prototype.myFilter = 
function(callback){
    var newArray = []
    this.forEach(function(element){
        if(callback(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

Array.prototype.myMap = 
function(callback){
    var newArray = [];
    this.forEach(function(element) {
        newArray.push(callback(element))
    });
    return newArray;
}

//Calling new functions on Array Prototype
var shortNames = names.myFilter(function(name){
    return name.length <= 3;
  });

var upprCaseNames = names.myMap(function(name){
    return name.charAt(0).toUpperCase() + name.substring(1);
})

//printing functions results
console.log(shortNames)
console.log(upprCaseNames)