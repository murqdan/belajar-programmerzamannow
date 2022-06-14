{
  // Object freeze & seal
  const person = {
    firstName: "Muh",
    lastName: "Rafiqul A",
  };

  Object.freeze(person);
  //Object.seal(person)

  person.firstName = "Budi";
  person.middleName = "Kurniawan";
  delete person.lastName;

  console.log(person);
}

{
  // Object assign
  const target = {
    firstName: "Eko",
  };

  const source = {
    lastName: "Khannedy",
  };

  Object.assign(target, source);
  console.log(target);
  console.log(source);
}

{
  // Object property name & value
  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };

  console.log(Object.values(person));
  console.log(Object.getOwnPropertyNames(person));
}
