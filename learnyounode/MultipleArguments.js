
var sumOfArgv = 0;

for(var i = 2; i < process.argv.length; i++){
    sumOfArgv += Number(process.argv[i]);
}

console.log(sumOfArgv);