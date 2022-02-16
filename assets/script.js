// HINT: You can delete this console.log after you no longer need it!
let yourName = "Joshua Johnson";

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let gbQty = document.querySelector("#qty-gb");
let cc = 0; // Chocolate Chip
let ccQty = document.querySelector("#qty-cc");
let sugar = 0;
let sugarQty = document.querySelector("#qty-sugar");
let totalQty = document.querySelector("#qty-total");

// selecting the element with an id of credit
const credit = document.querySelector("#credit");

const gbPlusBtn = document.querySelector("#add-gb");
const gbMinusBtn = document.querySelector("#minus-gb");

const ccPlusBtn = document.querySelector("#add-cc");
const ccMinusBtn = document.querySelector("#minus-cc");

const sugarPlusBtn = document.querySelector("#add-sugar");
const sugarMinusBtn = document.querySelector("#minus-sugar");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb = gb + 1;
  gbQty.textContent = gb;
  totalQty.textContent = gb + cc + sugar;
});

gbMinusBtn.addEventListener("click", function () {
  gb = gb - 1;
  gbQty.textContent = gb;
  totalQty.textContent = gb + cc + sugar;
});

ccPlusBtn.addEventListener("click", function () {
  cc = cc + 1;
  ccQty.textContent = cc;
  totalQty.textContent = gb + cc + sugar;
});

ccMinusBtn.addEventListener("click", function () {
  cc = cc - 1;
  ccQty.textContent = cc;
  totalQty.textContent = gb + cc + sugar;
});

sugarPlusBtn.addEventListener("click", function () {
  sugar = sugar + 1;
  sugarQty.textContent = sugar;
  totalQty.textContent = gb + cc + sugar;
});

sugarMinusBtn.addEventListener("click", function () {
  sugar = sugar - 1;
  sugarQty.textContent = sugar;
  totalQty.textContent = gb + cc + sugar;
});
// TODO: Hook up event listeners for the rest of the buttons
//console.log("Gingerbread + button was clicked!");

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
