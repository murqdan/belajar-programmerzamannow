class Employee {
  sayHello(name) {
    return `Hello ${name}, my name is employee ${this.name}`;
  }
}

class Manager extends Employee {  // manager diwarisi employee (manager dapat warisan dari employee)
  sayHello(name) {
    return `Hello ${name}, my name is manager ${this.name}`;
  }
}

const budi = new Employee();
budi.name = "Budi";
console.log(budi.sayHello("Joko"));

const eko = new Manager();
eko.name = "Eko";
console.log(eko.sayHello("Joko"));

console.log(budi);
console.log(eko);