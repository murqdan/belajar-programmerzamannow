class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithName(name) {
    console.log(`Hello ${name}`);
  }

  #sayWithoutName() {
    console.log(`Hello`);
  }
}

const eko = new Person();

eko.say("joko");
eko.say();

// eko.#sayWithoutName();
