const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

function getEmployeeDetails(item,index){
    return `<p>${index+1}: ${item.name} - ${item.department} -$${item.salary}</p>`;
}
function totalSalary(item,index){
    return item.salary;
}
function findHR(item,index){
    return item.department === 'HR';
}
function findByID(item,value){
    return item.id === value;
}
function displayEmployees() {
    document.getElementById('employeesDetails').innerHTML = employees.map(getEmployeeDetails).join('');
}
function calculateTotalSalaries(){
    document.getElementById('employeesDetails').innerHTML=employees.map(totalSalary).reduce((a,b)=>a+b);
}
function displayHR(){
    document.getElementById('employeesDetails').innerHTML=employees.filter(findHR).map(getEmployeeDetails).join('');
}
function displayHREmployees(){
    document.getElementById('employeesDetails').innerHTML=employees.filter(findHR).map(getEmployeeDetails).join('');
}
function findEmployeeById(id){
    document.getElementById('employeesDetails').innerHTML=employees.filter(x => findByID(x,id)).map(getEmployeeDetails).join('');
}