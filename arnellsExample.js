const fs = require('fs');

let departments = [];

fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err;
    
    let newData= data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
    // console.log(typeof loadDeptArray);
    
    let loadDeptArray = newData.split('\n');
    
    for (let i=0; i<loadDeptArray.length; i++) {
        if (loadDeptArray[i].slice(28, 32) === "9999") {
            // departments += loadDeptArray
            // console.log(loadDeptArray[i]);
        }
    }
    console.log(loadDeptArray[0]);
});


// var business = "Dept Co.";
// var departmentId = ["d001", "d002", "d003", "d004" ]; 
// var departments = ["management", "development", "sales", "marketing" ];
// var employeeId = [ [100, 102, 103, 104, 105], [200, 201, 202, 203, 204, 205], [300, 301, 302, 303], [400, 401, 402] ];
// var salaries = [ [85000, 85000, 95000, 105000, 150000], [65000, 65000, 75000, 75000, 85000, 95000], [55000, 65000, 75000, 95000], [55000, 65000, 75000] ];
// var employeeName = [ ["Ruth", "Sofía", "Elias", "Mathias", "Arnell"], ["Kai", "Isaiah", "Amare", "Nadia", "Nolan", "Jason"], ["Alejandro", "Steven", "Brodi", "Mary"], ["Jose", "Nia", "Lee"] ];



// let totalSalary = 0;


// console.log(business);


// for (var i = 0; i < departmentId.length; i++) {
//     console.log(`Department ${departmentId[i]} - ${departments[i]}:`);
    
//   let eachDept = 0;
    
//     for (var j=0; j < salaries[i].length; j++) {
        
//         console.log(` ${j+1}: Employee ID: ${employeeId[i][j]}, Name: ${employeeName[i][j]}, Salary: ${salaries[i][j]}` );
    
//         eachDept += salaries[i][j];
//         totalSalary += salaries[i][j];
    
//     }
//     console.log(`The total salary for ${departments[i]} is: ${eachDept}`);
// }
// console.log('\n')
// console.log("Total salary " + totalSalary);