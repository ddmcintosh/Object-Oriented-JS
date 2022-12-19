"use strtict";

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
  getIntro() {
    let intro = `Hi! I'm ${this.fullName()} and I am a ${this.jobTitle}.`;
    return intro;
  }
}
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
console.log(`Employee ${employee1.fullName()} created`);

employee1.promote("Sr. Graphic Artist", 46.75);

console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

//get intro//

console.log(employee1.getIntro());
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

//new employee//

let employee2 = new Employee(2, "John", "Cena", "Wrestler", 400.5);
console.log(`Employee ${employee2.fullName()} created`);

employee2.promote("Wrestler", 500.75);

console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

//get intro//

console.log(employee2.getIntro());
employee2.promote("Wrestler", 500.75);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
