{
  const firstName = Symbol("firstName");
  const lastName = Symbol("lastName");

  const person = {};
  person[firstName] = "Eko";
  person[lastName] = "Khannedy";

  console.log(person);
}

{
  // symbol for
  console.log(Symbol.for("firstName") === Symbol.for(firstName));

  const person = {};
  person[Symbol.for("firstName")] = "Eko";
  person[Symbol.for("lastName")] = "Khannedy";

  console.log(person);
  console.log(person[Symbol.for("firstName")]);
  console.log(person[Symbol.for("lastName")]);
}
