class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;

    for (const number of numbers) {
      total += number;
    }

    return total;
  }
}

try {
  console.log(MathUtil.sum());
  console.log("Eko");
} catch (error) {
  console.log(`Terjadi error : ${error.message}`);
} finally {
  console.log("Program selesai");
}

console.log("Khannedy");

class Counter {
  #counter = 1;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
