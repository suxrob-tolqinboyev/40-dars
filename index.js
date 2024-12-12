//  1

// function calc(a, b, c) {
//   if (c == "+") {
//     return a + b;
//   }
//   if (c == "-") {
//     return a - b;
//   }
//   if (c == "*") {
//     return a * b;
//   }
//   if (c == "%") {
//     return a / b;
//   }
// }

// const res = calc(10 , 5 , "*");
// console.log(res);

// 2
// let num = parseInt(prompt("Son kiriting:"));

// function son(num) {
//   if (num <= 0) {
//     console.log("Xato");
//     return;
//   }

//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }
// son(num);

// masala 1
// function salomlash(n) {
//       console.log("salom" , n);
// };
// salomlash("Suxrob")

// masala 2
// const maosh = function (oylik) {
//     let foiz = (oylik * 12) / 100;
//     let qoldiq = oylik - foiz;
//     console.log("12% ustma: " + foiz);
//     console.log("Qolgan oylik: " + qoldiq);
//   };
//   maosh(90000);

// masala 3
// function kopaytirish(x, y) {
//     return x * y;
//   }

//   let son1 = +prompt("Birinchi raqamni kiriting: ");
//   let son2 = +prompt("Ikkinchi raqamni kiriting: ");

//   let natija = kopaytirish(son1, son2);
//   console.log("Natija: ", natija);

// masala 4
// const somga = (dollor, kurs = 12800) => dollor * kurs;

// let javob = somga(9500);
// console.log("Javob: " +javob);

// somga();

// masala 5
// const dollorga = (som, kurs = 12800) => som / kurs;

// let javob = dollorga(1100000);
// console.log("Javob: " + javob, "$ bo'ladi");

// masala 7
// function uzunlik(matn) {
//     return matn.length;
//   }
//   let javob = uzunlik("Salom dunyo");
//   console.log("Matn uzunligi: ", javob);

// masala 8
// function fibonacci(n) {
//     let fib = [0, 1]; // Boshlang'ich sonlar
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib;
// }

// // 10 ta Fibonacci sonini chiqarish
// console.log(fibonacci(10));

// masala 10
// function yoshnihisobla(tugilganyil, hozirgiyil) {
//     return tugilganyil - hozirgiyil;
//   }

//   let yil1 = +prompt("Tugilgan yilingizni kiriting: ");
//   let yil2 = +prompt("Hozirgi yilni kiriting: ");

//   let yosh = yoshnihisobla(yil1, yil2);
//   console.log("Sizning yshingiz: ", yosh);

// masala 11

// const harfSoni = (satr, harf) => {
//     let soni = 0;

//     for (let i = 0; i < satr.length; i++) {
//       if (satr[i].toUpperCase() === harf.toUpperCase()) {
//         soni++;
//       }
//     }

//     return soni;
//   };

//   console.log(harfSoni("Abdujabbor", "b"));

// masala 12

// function factorial(n) {
//     kopayuvchi = 1;
//     for (let i = 1; i <= n; i++) {
//       kopayuvchi *= i;
//     }
//     return kopayuvchi;
//   }
//   factorial(5);
//   console.log(kopayuvchi);

// masala 13

// const teskariRaqam = function (son) {
//   let s = 0;

//   while (son > 0) {
//     s = s * 10 + (son % 10);
//     son = Math.floor(son / 10);
//   }
//   return s;
// };
// console.log(teskariRaqam(12345));

// masala14

// function toqRaqam(n) {
//   while (n > 0) {
//     let s = n % 10;

//     if (s % 2 !== 0) {
//       return true;
//     }

//     n = Math.floor(n / 10);
//   }

//   return false;
// }

// console.log(toqRaqam(2842));

// console.log(toqRaqam(1397));

// masala15

// function RaqamYegSon(n) {
//   let yegindi = 0;

//   let soni = 0;

//   while (n > 0) {
//     let s = n % 10;

//     yegindi += s;

//     soni++;

//     n = Math.floor(n / 10);
//   }

//   return { yegindi, soni };
// }

// let javob = RaqamYegSon(12345);

// console.log("Raqamlar yegindisi: ", +javob.yegindi);

// console.log("Raqamlar yegindisi: ", +javob.soni);

// masala16

// function Uchdarajasimi(n) {
//   let d = 1;

//   while (d <= n) {
//     console.log("Daraja = ", d);
//     if (d == n) {
//       return true;
//     }
//     d = d * 3;
//   }
//   return false;
// }
// if (Uchdarajasimi(9)) {
//   console.log("3 ni darajasi");
// } else {
//   console.log("3 ni darajasi emas");
// }

// masala17

// function KvadratYeg(a, b) {
//   let sum = 0;

//   for (let i = a; i <= b; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// let yegindisi = KvadratYeg(4, 9);

// console.log("Kvadratlar yegindisi: ", +yegindisi);

// masala18

// function yigindi(n) {
//   let s = 0;

//   for (let i = n; i <= 2 * n; i++) {
//     s += i ** 2;
//   }

//   return s;
// }

// let n = 2;

// let natija = yigindi(n);

// console.log("Yig'indi: " + natija);

// masala19

// function tubmi(n) {
//   if (n <= 1) return false;
//   let i = 2;
//   while (i <= Math.sqrt(n)) {
//     if (n % 1 == 0) {
//       return false;
//     }
//     i++;
//   }

//   return true;
// }

// let n = 7;

// if (tubmi(n)) {
//   console.log(n + "soni tub son");
// } else {
//   console.log(n + "soni tub son emas");
// }

//masala20
// function narxhisobla(konfetnarxi) {
//   for (let i = 12; i <= 20; i += 2) {
//     let kg = i / 10;

//     let narx = kg * konfetnarxi;

//     let yaxnarx = Math.floor(narx);

//     console.log(kg + "kg konfet narxi:" + yaxnarx + " so'm");
//   }
// }
// narxhisobla(10000);
