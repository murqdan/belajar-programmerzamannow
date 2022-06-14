// contoh yang salah
function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; // kesalahan, seakan-akan direplace
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  return `Hello ${name}, my name is Manager ${this.name}`;
};

Employee.prototype.sayHello = function (name) {
  return `Hello ${name}, my name is Employee ${this.name}`;
};

const employee = new Employee("Budi");
console.log(employee.sayHello("Joko"));

const manager = new Manager("Eko");
console.log(manager.sayHello("Joko"));
