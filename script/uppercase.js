// Change every other letter to Upper Case
// let inputInfo = document.getElementById("para");
// let cartItem = 0;
// let resultBtn = document.querySelector(".result-btn");

// resultBtn.addEventListener("click", () => {
//  const dynamicValue = inputInfo.value;
//  document.querySelector(".result").textContent += " " + dynamicValue;
//  cartItem++;
//  document.querySelector(".cart").textContent += " " + cartItem;
// });

// let age = (string) => {
//  let newAge = "";
//  for (let i = 0; i < string.length; i++) {
//   if (i % 2 === 0) {
//    newAge += string[i].toUpperCase();
//   } else {
//    newAge += string[i].toLowerCase();
//   }
//  }
//  return newAge;
// };
let buttonGet = document.querySelector(".result-btn");

buttonGet.addEventListener("click", () => {
 let inputValue = document.getElementById("para").value;
 let newValue = "";

 for (let i = 0; i < inputValue.length; i++) {
  if (i % 2 === 0) {
   newValue += inputValue[i].toUpperCase();
  } else {
   newValue += inputValue[i].toLowerCase();
  }
 }

 document.querySelector(".result").textContent += " " + newValue;
});
