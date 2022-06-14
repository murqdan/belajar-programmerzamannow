const person = {
  firstName: "Muh",
  middleName: "Rafiqul",
  lastName: "A",
  address: {
    country: "Indonesia",
    city: "Yogyakarta",
  },
  hobbies: ["Cycling", "Coding", "Swimming"],
};

const json = JSON.stringify(person);
console.log(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject);
