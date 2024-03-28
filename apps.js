// 1daxil olunan iki eded arasinda sonu 7 ile biten ededi goster


// let num1 = +prompt("Birinci ədədi daxil edin:");
// let num2 = +prompt("İkinci ədədi daxil edin:");


// for(  let a=num1 ; a<=num2 ;  a++){
//     if( a % 10===7){
//         console.log(a )
//     }

// }

// 2daxil olunan iki eded arasinda mukemmel ededleri tap


//  let eded2 = +prompt("Ededi2 daxil edin: ");
//   let eded1 = +prompt("Ededi1 daxil edin: ");


// // console.log(`${eded1} ve ${eded2} arasindaki mukkemmel ededler: `);



// for (let i = eded1; i <= eded2; i++) {
//   let sum = 0;
//   for (let bolen = 1; bolen < i; bolen++) {
//     if (i % bolen === 0) {
//       sum += bolen; 
//     }
//   }
//   if (sum === i) {
//     console.log(i);
//   }
// }



// daxil olunan ededin mukemmel olub olmadigini tapin
let num = +prompt(" ədədi daxil edin:");

for (let i = 1; i <= num; i++) {
  let sum = 0;
  for (let bolen = 1; bolen < i; bolen++) {
    if (i % bolen === 0) {
      sum += bolen;
    }
  }
  if (sum === i) {
    console.log(`daxil olunan eded mukemmeldir`);
  }

  else {
    console.log(`daxil olunan eded mukemmel deyil`);
  }
}






// 4 daxil olunan ededin sade ya murekkeb oldugunu tap

// let num = +prompt(" ədədi daxil edin:");
// let sade = true;
// for (let a = 2; a < num; a++) {
//     if (num % a === 0) {
//         sade = false;
//         console.log(`daxil olunan eded murekkebdir`)
//         break;
//     }
// }

// if(sade) console.log("sadedir");




// 3 daxil olunan iki eded arasinda sade ededleri tap
// let eded1 = +prompt("Ededi1 daxil edin: ");
// let eded2 = +prompt("Ededi2 daxil edin: ");


// for (let j = eded1; j <= eded2; j++) {
//   for (let i = 1; i <= j; i++) {
//     if (j % i === 0 && i !== 1) {
//       if (j > i) {
//         break;
//       }
//       if (j === i) {
//         console.log(i);
//       }
//     }
//   }
// }
