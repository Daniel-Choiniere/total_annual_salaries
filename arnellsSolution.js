let fs = require('fs');

let employess = fs.readFileSync('load_employess.txt','utf8');
// console.log (employess);

let salary = fs.readFileSync('load_salaries1.txt', 'utf8');
// console.log(salary);

let employeeDept = fs.readFileSync('load_dept_emp.txt', 'utf8');
// console.log(employeeDept);

let departments = fs.readFileSync('load_dept_names.txt', 'utf8');
// console.log(departments);

let empArray = employess.replace(/'|\(|\)/g,'');



console.log(typeof empArray);