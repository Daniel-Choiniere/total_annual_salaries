// fetches built in Node method 'fs'
var fs = require('fs');

var input = fs.createReadStream('load_salaries1.txt');

// create the readline interface
var rl = require('readline').createInterface({
   input: input,
   terminal: false
});

// parse through the data line by line getting rid of unnecessary characters
// split the data into a workable array at each comma
// splice off the last blank value in the array
rl.on('line', function(line) {
    line = line.replace(/'|\(|\)/g,'').split(',').splice(0,4);
    console.log(line);
});