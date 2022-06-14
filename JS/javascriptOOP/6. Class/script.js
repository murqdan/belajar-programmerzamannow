class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    return `Hello ${name}, my name is ${this.name}`;
  }
}

const eko = new Person("Eko");
console.log(eko);
console.log(eko.sayHello("Joko"));

const budi = new Person("Budi");
console.log(budi);
console.log(budi.sayHello("Joko"));
