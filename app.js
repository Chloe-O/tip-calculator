let tipBtns = document.getElementsByClassName("tip-btn");
let selectTip = document.getElementById("selectTip");
let customTip = document.getElementById("customTipInput");
let billInput = document.getElementById("billInput");
let displayTotal = document.getElementById("displayTotal");

let selectTipAmount;
let customTipAmount;
let billAmount = 0;
let billTotal;

/*NEXT -> hook up calc bill to customer tip box, then display the bill on the right hand side */

function calculateTotalBill(tip) {
  billTotal = (tip * billAmount + billAmount).toFixed(2);
  console.log(billTotal);
}

function checkTipByClick() {
  selectTip.addEventListener("click", (e) => {
    if (e.target.classList.contains("tip-btn")) {
      selectTipAmount = Number(e.target.value);
      customTip.value = "";
      customTipAmount = "";

      console.log(selectTipAmount);
      calculateTotalBill(selectTipAmount);
    }
  });
}

function checkTipByCustom() {
  customTip.addEventListener("input", () => {
    displayTotal.textContent = customTip.value;
    customTipAmount = customTip.value / 100;
    selectTipAmount = "";

    // calculateTotalBill(customTip, billAmount);
  });
}

checkTipByClick();
checkTipByCustom();

function getBillInput() {
  billInput.addEventListener("input", () => {
    billAmount = Number(billInput.value);
    return billAmount;
  });
}

function displayTotalBill() {}

getBillInput();
displayTotalBill();
