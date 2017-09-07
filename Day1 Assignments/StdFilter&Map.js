var names = ['lars', 'jan', 'peter', 'bo', 'frederik'];

//calling standard filter and map functions.
var shortNames = names.filter(function(name){
    return name.length <= 3;
  });
  
var upprCaseNames = names.map(function(name){
    return name.charAt(0).toUpperCase() + name.substring(1);
})

//names filtered <=3
console.log(shortNames);
//First letter uppercase in each word.
console.log(upprCaseNames);