console.log('OBJECTS');



const wordLength = (word) => {
return word.length;

}

console.log('num of letters', wordLength('cat'));
console.log(wordLength('cat'));


const ageCheck = (age) => {

  if (age >= 21){
  console.log('party');

  } else { 
    console.log('no drinks for you');
}

};

console.log (12);
console.log (24);

const expense = {
  dateCreated: '01/17/2020',
  location: 'baja Burrito',
  cost: '12.57',
  isGood: 'true'
};

 console.log(expense.cost);



 const employee = {
   startDate: '12/21/1986',
   storeNumber: '306',
   wage: '$21',
   hoursWorked: '40',
   firstName: 'don',
   lastName: 'Juan',
 };

 console.log(employee.firstName);



 const statusMaker = (emp) => {

  if (employee.firstName[0] === 'd'){
  emp.status = 'vip';
  } else {
    emp.status = 'peasant';
  }
  return emp;
 };

 console.log(statusMaker(employee));