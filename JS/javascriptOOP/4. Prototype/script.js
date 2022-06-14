function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function () {
    return `Hai, nama saya ${firstName} ${lastName} !`;
  };
}

// menambahkan method ke prototype
Person.prototype.sayBye = function () {
  return `Good Bye!`;
};
Person.prototype.run = function () {
  return `${this.firstName} is running`;
};

const adnan = new Person("Muhammad", "Adnan");
const joko = new Person("Jokowi", "Widodo");

console.log(adnan);
console.log(joko);

console.log(adnan.sayBye());
console.log(adnan.run());
