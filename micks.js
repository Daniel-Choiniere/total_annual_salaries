var fs = require('fs');

// Create all single D and multi D arrays as empty arrays (initially)
//push single string datat/elements into arrays as a single element
//push array data into an array to form multi dimensional arrays

// single D  arrays
var departmentId = []; //done
var departments = []; //done

//multi D arrays
var employeeId = [];
var employeeName = [];
var salaries = [];

// Process 'load_dept_names.txt' file
fs.readFile('load_dept_names.txt', 'utf8', function(err, data) {
   if (err) throw err;


   var deptDataClean = data.replace(/INSERT INTO `departments` VALUES/g, "");
   var deptDataArray = deptDataClean.split('\n');

   for (var i = 0; i < deptDataArray.length; i++) {

       //populate single D arrays (With Data)
       departmentId.push(deptDataArray[i].slice(2, 6));
       departments.push(deptDataArray[i].slice(9, -3));

       //populate multi D arrays with empty sub arrays ( NO DATA!!)
       employeeId.push([]);
       employeeName.push([]);
       salaries.push([]);

   }




    // console.log(departmentId);
    // console.log(departments);
    // console.log(employeeId);
    // console.log(employeeName);
    // console.log(salaries);

});

// Process 'load_dept_names.txt' file
fs.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
  if (err) throw err;


  var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES /g, "");
  var employeeDataArray = employeeDataClean.split('\n');

  // console.log(employeeDataArray);


  for (var i = 0; i < employeeDataArray.length; i++) {

      // console.log(employeeDataArray[i].slice(28, 32));

      if (employeeDataArray[i].slice(28, 32) == '9999') {


          // console.log(employeeDataArray[i].slice(8, 12));
          // console.log(employeeDataArray[i].slice(1, 6));

            employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));


            // console.log(departmentId.indexOf(employeeDataArray[i].slice(8, 12)));

          //  .push(employeeDataArray[i].slice(1, 6));

      }
  }
  console.log(employeeId);

});