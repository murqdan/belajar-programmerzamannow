class Configuration {
  static name = "Belajar Javascript OOP";
  static version = 1.0;
  static author = "Eko";
}

const config = new Configuration();
console.log(config);    // Configuration {}

Configuration.author = "Eko Kurniawan";

console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);
