var empID = [ [], [], [], [], [], [], [], [], [] ];

var dept = [ "d001", "d002", "d003", "d004", "d005", "d006", "d007", "d008", "d009" ];

// dept.indexOf('d005'); === 4

empID[dept.indexOf("d005")].push("10006");

console.log(empID);