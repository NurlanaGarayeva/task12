// https://leetcode.com/
// https://www.hackerrank.com/access-account/

// TASK 1:
User 2 eded daxil edir, aradaki mukkemmelleri tap.
// let eded1 = +prompt("Ededi1 daxil edin: ");
// let eded2 = +prompt("Ededi2 daxil edin: ");

// [eded1 : eded2]
// console.log(`${eded1} ve ${eded2} arasindaki mukkemmel ededler: `);

//       [eded1 : eded2]

// for (let i = eded1; i <= eded2; i++) { 
//   let sum = 0;
//   for (let bolen = 1; bolen < i; bolen++) {
//     if (i % bolen === 0) {
//       sum += bolen; // 6 = 0 + 1 + 2 +3
//     }
//   }
//   if (sum === i) {
//     console.log(i);
//   }
// }

// Ededin ozu ile bolenlerinin cemi bir birine beraberdirse
// 6
// 1 2 3

// let sum = 0 // 0 + 1 + 2 + 3; = 6

// sum  === eded(i)

// eded1 = 1
// eded2 = 30
// 6  >> 1 < 6 >> 6 : 4

// TASK 2:
// User 2 eded daxil edir, aradaki sade ededleri tap.
let eded1 = +prompt("Ededi1 daxil edin: ");
let eded2 = +prompt("Ededi2 daxil edin: ");

//    [eded1 : eded2)
for (let j = eded1; j <= eded2; j++) {
  for (let i = 1; i <= j; i++) {
    if (j % i === 0 && i !== 1) {
      if (j > i) {
        break;
      }
      if (j === i) {
        console.log(i);
      }
    }
  }
}

// Array
// let numbers = [1, 2, 3, 4, 5, 6, "salam", true, 90];
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]);
// console.log(numbers[2]);
// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] += 5;
// }
// console.log(numbers);

// let text = "SALAM"
// console.log(text.charAt(2));

// function hesabla(a, b = 2) {
//   //   console.log(a + b);
//   return a + b; // 3
// }

// hesabla = cavab

// console.log(hesabla(1,2));

// Arrow functions
// const hesabla = (a, b) => a + b;
// console.log(hesabla(1,2));
// const hesabla = (a, b) => {
//   let cem = a + b;
//   let k = Math.sqrt(cem);
//   return k;
// };
// console.log(hesabla(12, 4));

// Array methods
// let numbers = [1, 3, 5, 6];
// console.log(numbers);
// const numbers_map = numbers.map((x) => (x ** 2));
// console.log(numbers_map);
// const numbers_filter = numbers.filter((x) => (x % 2 === 0));
// console.log(numbers_filter);
// const numbers_find = numbers.find((x) => x % 2 === 0);
// console.log(numbers_find);
// const numbers_some = numbers.some((x) => x % 2 === 0);
// console.log(numbers_some);
// const numbers_every = numbers.every((x) => x % 2 === 0);
// console.log(numbers_every);

// let data = ["Hello","world","Demo","happy"]
// //                                       D                  D
// const data_filter = data.filter((x) => x.charAt(0) === x.charAt(0).toUpperCase())
// console.log(data_filter);

// let numbers = [11111, 1, 2, 3, 4, 5, "a1"];
// let data = ["A", "C", "B", 1, 2, "1a", 111];
// console.log(numbers);
// console.log(data);
// const numbers_sort = numbers.sort((a, b) => a - b);
// console.log(numbers);
// data.sort();
// console.log(data);
//            index, silme, added
// numbers.splice(4, 0, "salam")
// console.log(numbers);
// numbers.push(10)
// console.log(numbers);
// let removeElement = numbers.pop()
// console.log(numbers);
// console.log(removeElement);
// numbers.shift();
// console.log(numbers);
// numbers.unshift("salam");
// console.log(numbers);
// console.log(numbers.join("-"));
