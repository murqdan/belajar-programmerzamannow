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

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.log(result);

const result2 = MathUtil.sum();
console.log(result);
