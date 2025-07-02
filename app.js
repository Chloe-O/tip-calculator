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
  return billTotal;
}

function checkTipByClick() {
  selectTip.addEventListener("click", (e) => {
    if (e.target.classList.contains("tip-btn")) {
      selectTipAmount = Number(e.target.value);
      customTip.value = "";
      customTipAmount = "";

      calculateTotalBill(selectTipAmount);
      displayTotal.innerText = billTotal;
    }
  });
}

function checkTipByCustom() {
  customTip.addEventListener("input", () => {
    customTipAmount = Number(customTip.value);
    selectTipAmount = "";

    calculateTotalBill(customTipAmount);
    console.log(billTotal);
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

getBillInput();
