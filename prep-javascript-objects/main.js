var person = {
  firstName: 'Nolan',
  lastName: 'Reda',
  hobby: 'Counter-Stike: Global Offensive'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);

person.job = 'student';

var job = person.job;

console.log("The person's current job is:", job);

person.previousJob = 'Mortgage sales';

var previousJob = person.previousJob;
console.log("The person's previous jobis:", previousJob);

console.log(person);
