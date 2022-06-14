class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    return `Hello ${name}, my name is employee ${this.firstName}`;
  }
}

class Manager extends Employee {    // manager diwarisi employee (manager dapat warisan dari employee)
  constructor(firstName, lastName) {
    super(firstName);   // wajib mendeklarasikan super constructor meskipun di parent classnya tidak ada constructor
    this.lastName = lastName;
  }

  sayHello(name) {
    return `Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`;
  }
}

const budi = new Employee("Budi");
console.log(budi.sayHello("Joko"));

const eko = new Manager("Eko", "Khannedy");
console.log(eko.sayHello("Joko"));

console.log(budi);
console.log(eko);
