// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];
  let continueAdding = true;
  while (continueAdding) {  
    const firstName = prompt(`Enter the employee's first name: `);

    // I searched online how to do this:
    if(firstName === null || firstName === ''){
      alert("You must enter a valid entry.");
    } else {
      const lastName = prompt(`Please enter the employee's last name: `);
      const salary = parseInt(prompt(`Please enter the employee's salary: `));
      var number = parseFloat(salary);

      if (!isNaN(number)) {
        console.log("The number you entered is: " + number);
      } else {
        alert("Your input was not a number.");
        continue;
      }

      const employees = {
        firstName,
        lastName,
        salary
      };
      employeesArray.push(employees);
      const addAnother = confirm('Would you like to add another employee?');
      continueAdding = addAnother;
    }
  }
  return employeesArray;
};

// Create new Employee object
function employee(firstName, lastName, salary){
 this.firstName = firstName;  
 this.lastName = lastName;    
 this.salary = salary;            
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  console.log('The total number of employees is ' + employeesArray.length);
  let sumOfAllSalaries =  0;
  for (let i=0; i < employeesArray.length; i++) {
    sumOfAllSalaries += parseInt(employeesArray[i].salary);
  }
  const averageSalary = sumOfAllSalaries / employeesArray.length;
  console.log('The average salary is $' + averageSalary.toFixed(2));
};

const getRandomEmployee = function(employeesArray) {

  // TODO: Select and display a random employee 
  const index = Math.floor(Math.random() * employeesArray.length);
  console.log('A randomly selected employee to buy the doughnuts for today is: ' + employeesArray[index].firstName +  ' '  + employeesArray[index].lastName);

};


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.innerHTML = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
