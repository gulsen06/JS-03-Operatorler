//! ******** Aritmetik Operatörler ******

let nummer1 = 86;
let nummer2 = 39;

console.log("Aritmetic Operators");
// Addition Toplama islemi
console.log("Addition:", nummer1 + nummer2);

// Subration Cikarma islemi
console.log("Subration:", nummer1 - nummer2);

// Multiplication carpma islemi islemi
console.log("Multiplication:", nummer1 * nummer2);

// Division bölme islemi

console.log("Divition:", (nummer1 / nummer2).toFixed(2));

// Power Üst alma
console.log("Power:", nummer1 ** 3);

// Modules Kalani bulma

console.log("Modules:", nummer1 % 2);

// if (nummer1 % 2 === 1) {
//   console.log("Bu bir tek sayidir");
// } else {
//   console.log("Bu bir ciftsayi dir");}

// exemple

// let hours = +prompt("Bu is kac satte tamamlandi:");
// let day = Math.trunc(hours / 24);
// remainder = hours % 24;
// console.log(`Bu is ${day} gün ${remainder} saate tamamlandi.`);
console.clear();

//! ++ Increment degisken degerini bir artiriyor

// num++ önce sayiyi yazar sonra degeri artirir
// ++Num önce artis yapar sonra degeri yazar

//? Incerement Decrement
console.log(nummer1++);
console.log(nummer1);
console.log(++nummer1);

//! -- Decrement degisken degerini bir azaltır

// num-- önce sayiyi yazar sonra degeri azaltir
// --Num önce azalma yapar sonra degeri yazar

//? Incerement Decrement
console.log(nummer1--);
console.log(nummer1);
console.log(--nummer1);

// 3 basamkli bir sayinin sayi degerlerini yazin

const num = 325;

const birler = num % 10;
const onlar = Math.trunc(num / 10) % 10;
const yüzler = Math.trunc(num / 100);

console.log(`sayi degeri ${yüzler} ${onlar} ${birler}`);
