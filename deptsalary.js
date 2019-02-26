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
    var deptDataArray = deptDataClean.split('\n');
    
    for (var i=0; i<deptDataArray.length; i++) {
        departmentID.push(deptDataArray[i].slice(2, 6));
        // departments.push(deptDataArray[i].slice(9).replace(/'|\(|\)|\;/g,''));
        departments.push(deptDataArray[i].slice(9, -3));
        
        // populate multi dimensional arrays with empty sub arrays (NO DATA!)
        employeeID.push([]);
        employeeName.push([]);
        salaries.push([]);
    }

    // console.log(departmentID);
    // console.log(departments);
    // console.log(employeeID);
    // console.log(employeeName);
    // console.log(salaries);

});

fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    var empDataClean= data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
    var empDataArray = empDataClean.split('\n');
    
        for (let i=0; i<empDataArray.length; i++) {
            // if these four characters at this position match 9999 then...
            if (empDataArray[i].slice(28, 32) === "9999") {
                
                // Finds the index of the current iterated department ID at the sliced position in the empDataArray data array equal to the ID in the already generated departmentID array. Returns this index as a parameter for the position to push the current iterated employee ID into the respective department array in the employeeID multidimensional array.  
                employeeID[departmentID.indexOf(empDataArray[i].slice(8,12))].push(empDataArray[i].slice(1, 6));
            }
        }
    // console.log(employeeID);
});


fs.readFile('load_salaries1.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    var salaryDataClean= data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
    var salaryDataArray = salaryDataClean.split('\n');
        
        // iterating through the newly created salaryDataArray of all salary data
        for (let i=0; i<salaryDataArray.length; i++) {
            // if these four charatcers at this position in a line of salaryArrayData match 9999 then...
            if (salaryDataArray[i].slice(27, 31) === "9999") {
                // console.log("salary empID: " + salaryDataArray[i].slice(1, 6));
                
                // iterate through employeeID array, puts us on first element of array
                for (let j=0; j<employeeID.length; j++) {
                    // iterate through the inner EmployeeID array
                    for (let k=0; k<employeeID[j].length; k++) {
                
                        if (salaryDataArray[i].slice(1,6) == employeeID[j][k]) {
                            // console.log("!!!!! MATCH !!!!!");
                            
                            salaries[j].push(salaryDataArray[i].slice(7, 12));
                 
                        }
                    }
                }
                
        }
    }
    console.log(salaries);
});


// fs.readFile('load_employess.txt', 'utf8', function(err, data) {
//     if (err) throw err;
    
//     var employeeDataClean= data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
//     var employeeDataArray = employeeDataClean.split('\n');

    
//         for (let i=0; i<employeeDataArray.length; i++) {
  
//             var empID = employeeDataArray[i].slice(1, 6);
//             var escapedName = employeeDataArray[i].slice(20,-18).replace(/\(|\)|\'/g,'');
//             var superEscaped = escapedName.replace(/\,/g, ' ');
            
//             // console.log(superEscaped);
//             // employeeName.push(superEscaped);
                
//                 employeeName[departmentID.indexOf(employeeDataArray[i].slice(1, 6))].push();
                
//             // console.log(escapedName);
//             // console.log(empID);
//             // console.log(employeeDataArray[i].slice(20,-18));
//             // console.log(employeeDataArray[i].slice(1, 6));
                
//     }
//          console.log(employeeName);

// });
