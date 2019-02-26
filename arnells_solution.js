// You will find my code listed below minus the final report section.

var fs = require('fs');

// Step 1. Create all single-d and multi-d arrays AS empty arrays (initially)
// push single string data/elements into an array as a single element
// push array data into an array to form multi-d arrays

// single-d arrays -- valid
var departmentId = []; // done
var departments = []; // done

//create empty multi-d arrays -- currently invalid. Must push sub arrays 
var employeeId = [];
var employeeName = [];
var salaries = [];

// Process 'load_dept_name.txt' file
fs.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
    var deptDataArray = deptDataClean.split('\n');


    for (var i = 0; i < deptDataArray.length; i++) {
        // populate single-d arrays with DATA
        departmentId.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));

        // populate multi-d arrays with empty sub-arrays [] (NO DATA!!!)

        employeeId.push([]);
        employeeName.push([]);
        salaries.push([]);
    }
});

// Dept-Emp arrays
var employeeDataClean;
var employeeDataArray;

// Process 'load_dept_emp.txt' file
fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;

    employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
    employeeDataArray = employeeDataClean.split('\n');

    for (var i = 0; i < employeeDataArray.length; i++) {
        if (employeeDataArray[i].slice(28, 32) == '9999') {

            // employeeId[4].push(10001);
            employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
        }
    }
    // console.log("EmployeeId Array:");
    // console.log(employeeId);

});


fs.readFile('load_salaries.txt', 'utf8', function(err, data) {
    if (err) throw err;

    // Salary arrays
    var salaryDataClean;
    var salaryDataArray;

    salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g, "");
    salaryDataArray = salaryDataClean.split('\n');

    for (var i = 0; i < salaryDataArray.length; i++) {

        // if (salaryDataArray[16].slice(9999) == '9999') {
        if (salaryDataArray[i].slice(27, 31) == '9999') {

            // console.log("Current Salary, EmployeeId:");
            // console.log(salaryDataArray[i].slice(1, 6));

            for (var j = 0; j < employeeId.length; j++) { // loops through the 20 employee id's in the employeeId array

                for (var k = 0; k < employeeId[j].length; k++) {

                    if (employeeId[j][k] == salaryDataArray[i].slice(1, 6)) {

                        salaries[j].push(salaryDataArray[i].slice(7, 12));
                    }
                }
            }
        }
    }


});


fs.readFile('load_employee.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var nameSplit, nameSplitId, joinedNames;

    var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
    var nameDataArray = nameDataClean.split('\n');

    for (var i = 0; i < nameDataArray.length; i++) {

        nameSplit = nameDataArray[i].split(',');
        nameSplitId = nameSplit[0].replace(/\(/g, "");

        // console.log("nameSplit");
        // console.log(nameSplit);

        // console.log("nameSplitId");
        // console.log(nameSplitId);

        // console.log("nameSplit[2]");
        // console.log(nameSplit[2]);

        for (var j = 0; j < employeeId.length; j++) {

            for (var k = 0; k < employeeId[j].length; k++) {

                if (employeeId[j][k] == nameSplitId) {
                    //["a", "b", "c", "d"].slice(1,3).join("-") //b-c 
                    // employeeName[j].push(nameSplit.slice(2,4).join(" ")

                    // console.log(nameSplit[2].replace(/'/g, ""), nameSplit[3].replace(/'/g, ""));

                    joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, "");
                    employeeName[j].push(joinedNames);

                }
            }
        }
    }


    // console.log("employeeName");
    // console.log(employeeName);

    // console.log(employeeName[0][0]);




});














// fs.readFile('load_employee.txt', 'utf8', function(err, data) {
// if (err) throw err;

// var nameSplit;
// var currentNameSplitLine;

// var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
// var nameDataArray = nameDataClean.split('\n');

// for (var i = 0; i < nameDataArray.length; i++) {
// nameSplit = nameDataArray[i].split(',');
// currentNameSplitLine = nameSplit[i].replace(/\(/g,"");
// data.replace(/INSERT INTO `dept_emp` VALUES /g, "");

// console.log(currentNameSplitLine);
// console.log("currentNameSplitLine");

// for (var j = 0; j < employeeId.length; j++) {

// for (var k = 0; k < employeeId[j].length; k++) {

// console.log("employeeId[j][k]");
// console.log(employeeId[j][k]);


// // if (employeeId[j][k] == nameSplit[0].replace(/\(/g,"")) {
// // employeeName[j][k].push(nameSplit[2]+" "+nameSplit[3]);

// // }

// }
// }
// }


// console.log("employeeName");
// console.log(employeeName);
// // console.log();
// // console.log(nameSplit[2]);
// // console.log(nameSplit[3]);


// });










// // Process 'load_salaries.txt' file
// fs.readFile('load_salaries.txt', 'utf8', function(err, data) {
// if (err) throw err;

// salaryDataClean = data.replace(/INSERT INTO `salaries` VALUES /g, "");
// salaryDataArray = salaryDataClean.split('\n');

// // salaries [ [], [], [], [], [], [], [], [] ]

// for (var i = 0; i < salaryDataArray.length; i++) {

// if (salaryDataArray[i].slice(27, 31) == '9999') {
// for (var j = 0; j < employeeId.length; j++) {
// for (var k = 0; k < employeeId[j].length; k++) {
// if (employeeId[j][k] == salaryDataArray[i].slice(1, 6)) {

// salaries[j].push(salaryDataArray[i].slice(7, 12));

// }

// }

// }

// }

// }

// console.log(salaries);

// });