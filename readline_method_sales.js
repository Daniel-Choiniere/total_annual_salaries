// import the javascript fs module
let fs = require('fs');

let dept = [];
fs.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    let split = data.split(",");
    
    for (let i=0; i<split.length; i++) {
        console.log(split[i]);
    }
    
});