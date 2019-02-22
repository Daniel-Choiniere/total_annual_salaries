const fs = require('fs');

// Step 1: Create all single and multi dimnensional arrays as empty arrays (intially)
//     -push single string data/elements into an array as a single element
//     -push array data into an array to form multi dimensional arrays
    
// single dimensional arrays
var departmentID = [];
var departments = [];

// multi dimensional arrays
var employeeID = [];
var employeeName = [];
var salaries = [];

// Process 'load_dept_names.txt' file

fs.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    var deptDataClean= data.replace(/INSERT INTO `departments` VALUES\n/g, "");
    
    let deptDataArray = deptDataClean.split('\n');
    
    for (var i=0; i<deptDataArray.length; i++) {
        departmentID.push(deptDataArray[i].slice(2, 6));
        // departments.push(deptDataArray[i].slice(9).replace(/'|\(|\)|\;/g,''));
        departments.push(deptDataArray[i].slice(9, -3));
        
        // populate multi dimensional arrays with empty sub arrays (NO DATA!)
        employeeID.push([]);
        employeeName.push([]);
        salaries.push([]);
    }
    // console.log(departments);
    // console.log(departments);
    console.log(employeeID);
    console.log(employeeName);
    console.log(salaries);
});

    