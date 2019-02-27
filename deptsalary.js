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
                
                // Finds the index of the current iterated department ID (empDataArray[i]) equal to the ID in the already generated departmentID array. Returns this index as a parameter for the position to push the current iterated employee ID into the respective department array in the employeeID multidimensional array.  
                employeeID[departmentID.indexOf(empDataArray[i].slice(8,12))]
                .push(empDataArray[i].slice(1, 6));
            }
        }
    // console.log(employeeID);
});


fs.readFile('load_employess.txt', 'utf8', function(err, data) {
    if (err) throw err;

    var nameSplit, nameSplitId, joinedNames;

    var nameDataClean = data.replace(/INSERT INTO `employees` VALUES /g, "");
    var nameDataArray = nameDataClean.split('\n');

    for (var i = 0; i < nameDataArray.length; i++) {

        nameSplit = nameDataArray[i].split(',');
        nameSplitId = nameSplit[0].replace(/\(/g, "");

        for (var j = 0; j < employeeID.length; j++) {

            for (var k = 0; k < employeeID[j].length; k++) {

                if (employeeID[j][k] == nameSplitId) {
                    //["a", "b", "c", "d"].slice(1,3).join("-") //b-c 
                    // employeeName[j].push(nameSplit.slice(2,4).join(" ")

                    // console.log(nameSplit[2].replace(/'/g, ""), nameSplit[3].replace(/'/g, ""));

                    joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, "");
                    employeeName[j].push(joinedNames);

                }
            }
        }
    }
    
    console.log(employeeName);
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
                            
                            
                            // salaries[employeeID[j][k].indexOf(salaryDataArray[i].slice(1,6))]
                            // .push(salaryDataArray[i].slice(7,12));
                 
                        }
                    }
                }
                
        }
    }
    // console.log(salaries);
});

