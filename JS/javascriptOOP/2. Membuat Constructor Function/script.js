function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function () {
    return `Hai, nama saya ${firstName} ${lastName} !`;
  };
}

const adnan = new Person("Muhammad", "Adnan");
const joko = new Person("Joko", "Widodo");

console.log(adnan.sayHello());
console.log(joko.sayHello());
