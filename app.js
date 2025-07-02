let tipBtns = document.getElementsByClassName("tip-btn");
let selectTip = document.getElementById("selectTip");
let customTip = document.getElementById("customTipInput");
let billInput = document.getElementById("billInput");
let displayTotal = document.getElementById("displayTotal");

let selectTipAmount;
let customTipAmount;
let billAmount;

function checkTipByClick() {
  selectTip.addEventListener("click", (e) => {
    if (e.target.classList.contains("tip-btn")) {
      selectTipAmount = e.target.value;
      customTip.value = "";
    };
  });
}

function checkTipByCustom() {
  customTip.addEventListener("input", () => {
    displayTotal.textContent = customTip.value.toFixed;
    customTipAmount = customTip.value;
    console.log(`The value of customTipAmount is ${customTipAmount}`);
  });
};

function calculateTotalBill() {

}

checkTipByClick();
checkTipByCustom();
