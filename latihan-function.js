console.log("Latihan Function 1");
function fizzBuzz(angka) {
    if (angka % 15 === 0) {
        return "FizzBuzz";
    } else if (angka % 3 === 0) {
        return "Fizz";
    } else if (angka % 5 === 0) {
        return "Buzz";
    } else {
        return angka;
    }
}
for (let i = 1; i <= 30; i++) {
    console.log(fizzBuzz(i));
}
console.log("Latihan Function 2");
function cekAngka(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}
console.log(cekAngka(8));
console.log(cekAngka(7));
console.log("Latihan Function 3");
function balikString(teks) {
    return teks.split("").reverse().join("");
}

console.log(balikString("Rafli"));
console.log(balikString("JavaScript"));