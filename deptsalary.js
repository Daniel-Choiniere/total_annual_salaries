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
            employeeID[departmentID.indexOf(empDataArray[i].slice(8,12))]
            .push(empDataArray[i].slice(1, 6));
            
            // console.log(empDataArray[i].slice(8,12));
            // console.log(empDataArray[i].slice(1, 6));
        }
    }
    console.log(employeeID);
});


// // fs.readFile('load_employess.txt', 'utf8', function(err, data) {
// //     if (err) throw err;
    
// //     var employeeDataClean= data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
// //     var employeeDataArray = employeeDataClean.split('\n');

    
// //         for (let i=0; i<employeeDataArray.length; i++) {
   
// //         let escapedName = employeeDataArray[i].slice(20,-18).replace(/,|\(|\)|\'/g,'');
// //         let empID = employeeDataArray[i].slice(1, 6);
        
// //         employeeName[departmentID.indexOf(escapedName)].push(empID);
            
// //             // employeeName[departmentID.indexOf(employeeDataArray[i].slice(20,-18))].push(employeeDataArray[i].slice(1, 6));
            
       
        
// //         // console.log(escapedName);
// //         // console.log(empID);
// //         // console.log(employeeDataArray[i].slice(20,-18));
// //         // console.log(employeeDataArray[i].slice(1, 6));
            
            
// //     }
// //         //  console.log(employeeName);

// // });

fs.readFile('load_salaries1.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    var salaryDataClean= data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
    var salaryDataArray = salaryDataClean.split('\n');
    
        for (let i=0; i<salaryDataArray.length; i++) {
            // if these four charatcers at this position match 9999 then...
            if (salaryDataArray[i].slice(28, 32) === "9999") {
            // salaries[departmentID.indexOf(salaryDataArray[i].slice(8,12))].push(salaryDataArray[i].slice(1, 6));
            
            
            //salaryDataArray[i].slice(1,6));
            // console.log(salaryDataArray[i].slice(7, 12));
            }
    }
    console.log(salaries);
});
