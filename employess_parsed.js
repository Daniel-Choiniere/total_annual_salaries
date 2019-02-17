// fetches built in Node method 'fs'

let fs = require('fs');

let input = fs.createReadStream('load_employess.txt');

// create the readline interface
let rl = require('readline').createInterface({
   input: input,
   terminal: false
});


// parse through the data line by line getting rid of unnecessary characters
// split the data into a workable array at each comma
// splice off the last blank value in the array
rl.on('line', function(line) {
    line = line.replace(/'|\(|\)/g,'').split(',').splice(0,6);
    
    let id = line[0];
    let fname = line[2];
    let lname = line[3];
    
    let employee = id + fname + lname; 
    
    console.log(employee);

});

