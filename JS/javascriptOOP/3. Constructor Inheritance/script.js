function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    return `Hello ${name}, My name is ${firstName}`;
  };
}

function Manager(firstName, lastName) {
  Employee.call(this, firstName);
  this.lastName = lastName;
}

const adnan = new Manager("Adnan", "Rafiqul");
console.log(adnan.sayHello("Joko"));
