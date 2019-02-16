// fetches built in Node method 'fs'
let fs = require('fs');

let input = fs.createReadStream('load_salaries1.txt');

// create the readline interface
let rl = require('readline').createInterface({
   input: input,
   terminal: false
});




// parse through; the data line by line getting rid of unnecessary characters
// split the data into a workable array at each comma
// splice off the last blank value in the array
rl.on('line', function(line) {
    line = line.replace(/'|\(|\)/g,'').split(',').splice(0,4);
    
    let id = line[0];
    let salary = line[1];
    
    let employeeSalary = {id:id, salary:salary}; 
    
    console.log(employeeSalary);

});

