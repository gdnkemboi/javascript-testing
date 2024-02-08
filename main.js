function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

class Calculator {
    add(num1, num2) {
        return num1 + num2
    }

    subtract(num1, num2) {
        return num1 - num2
    }

    divide(num1, num2) {
        return num1 / num2
    }

    multiply(num1, num2) {
        return num1 * num2
    }
}

function analyzeArray(arr) {
    let average = arr.reduce((a, b) => a + b) / arr.length
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let length = arr.length

    return {average, min, max, length}
}

module.exports = { capitalize, reverseString, Calculator, analyzeArray };
