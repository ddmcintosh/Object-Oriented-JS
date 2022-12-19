"use strtict";

class Employee {
  constructor(self, id, firstName, lastName, jobTitle, payRate) {
    self.employeeId = id;
    self.firstName = firstName;
    self.lastName = lastName;
    self.jobTitle = jobTitle;
    self.payRate = payRate;
  }

  fullName() {
    return self.firstName + " " + self.lastName;
  }

  promote(newJobTitle, newPayRate) {
    self.jobTitle = newJobTitle;
    self.payRate = newPayRate;
  }
  getIntro() {
    let intro = `Hi! I'm ${self.fullName()} and I am a ${self.jobTitle}.`;
    return intro;
  }
}
let employee1 = new Employee(1, "Ian", "Austin", "Graphic Artist", 42.5);
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

let employee2 = new Employee(2, "Halle", "Bailey", "Singer/Actress", 335.5);
console.log(`Employee ${employee2.fullName()} created`);

employee2.promote("Singer/Actress", 502.75);

console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

//get intro//

console.log(employee2.getIntro());
employee2.promote("Singer/Actress", 502.75);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
