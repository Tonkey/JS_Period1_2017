var names = [{name:"Lars",phone:"1234567"}, 
{name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},
{name: "Bo", phone: "79345"}];

//Assignment 4.a
let listItems = names.map((name)=>{
    return '<li>'+name.name+'</li>';
})
//The \n in the string below is purely for cosmetic purposes.
var ul = '<ul>\n' + listItems.join('\n') + '\n<ul>';

console.log(ul)

//Assignment 4.b
var tableData = names.map(function(object){
    return `<tr><td>${object.name}</td><td>${object.phone}</td></tr>`
}).join("\n");

let table = "<table><tbody><tr><th>name</th><th>phone</th></tr>" +
tableData +
"</tbody></table>"
console.log(table)

//Assignment 4.c
document.getElementById("divNames").innerHTML = table;

//Assignment 4.d
//This is not the way I'd have done it, if I had more time and care to make this whole file properly.
//The obvious solution in this would be to make a function that given an array creates a table and updates the html page accordingly.
function onClick(){
    var temp = names.filter(function(name){
        return name.name.length <= 3;
    })
    temp = temp.map(function(object){
        return `<tr><td>${object.name}</td><td>${object.phone}</td></tr>`
    }).join("\n");
    
    var table = "<table><tbody><tr><th>name</th><th>phone</th></tr>" +
    temp +
    "</tbody></table>"

    document.getElementById("divNames").innerHTML = table;
}
