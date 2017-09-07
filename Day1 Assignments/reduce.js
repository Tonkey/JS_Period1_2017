//Assignment a
var all = ["Lars","Peter","Jan","Bo"]
console.log(all.join(","))
console.log(all.join(" "))
console.log(all.join("#"))

//Assignment b
var initVal = 0;
var numbers = [2,3,67,33];

var reducer = function(accumulator, element){
    return accumulator + element;
};
console.log(numbers.reduce(reducer, initVal));

//Assignment c OBS! I'm re-using the initVal from Assignment b
var members = [
    {name : "Peter", age : 18},
    {name: "Jan", age : 35},
    {name : "Janne", age : 25},
    {name : "Marting", age : 22},
];

var reducer2 = function(accumulator, element, index, arr){
    var temp = accumulator + element.age;

    if(index === arr.length-1){
        return temp / arr.length;
    };
    return temp;
};

var res = members.reduce(reducer2, initVal);

console.log(res);

//Assignment d
var votes = ['Clinton','Trump','Clinton','Clinton','Trump','Trump','Trump','None'];

var countedVotes = votes.reduce(function (allVotes, vote){
    if(vote in allVotes){
        allVotes[vote]++;
    } else {
        allVotes[vote] = 1;
    }
    return allVotes
},{}) // {} is the initial value, we expect an array so the initial value is an empty array

console.log(countedVotes);

votes.reduce()