let tipBtns = document.getElementsByClassName("tip-btn");
let selectTip = document.getElementById("selectTip");
let customTip = document.getElementById("customTipInput");
let billInput = document.getElementById("billInput");
let partySize = document.getElementById("partySize");

let testBox = document.getElementById("test-box");

let selectTipAmount;
let customTipAmount;
let billAmount;

function checkTipByClick() {
  selectTip.addEventListener("click", (e) => {
    if (e.target.classList.contains("tip-btn")) {
      selectTipAmount = e.target.value;
      customTip.value = "";
    }
  });
}

function checkTipByCustom() {
  customTip.addEventListener("input", () => {
    testBox.textContent = customTip.value;
    customTipAmount = customTip.value;
    console.log(`The value of customTipAmount is ${customTipAmount}`);
  });
};

function calculateTotalBill() {
    
}

checkTipByClick();
checkTipByCustom();
