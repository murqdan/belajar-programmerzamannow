class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const eko = new Person("Eko", "Khannedy");
console.log(eko);
console.log(eko.fullName);

eko.fullName = "Budi Nugraha";
console.log(eko.fullName);
