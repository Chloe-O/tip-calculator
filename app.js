let tipBtns = document.getElementsByClassName("tip-btn");
let selectTip = document.getElementById("selectTip");
let customTip = document.getElementById("customTipInput");

let testBox = document.getElementById("test-box");

let tipAmount;
let customTipAmount;

function checkTipByClick() {
  selectTip.addEventListener("click", (e) => {
    if (e.target.classList.contains("tip-btn")) {
      tipAmount = e.target.value;
      customTip.value = "";
    }
  });
}

function checkTipByCustom() {
    customTip.addEventListener('input', () => {
       testBox.textContent = customTip.value;
       customTipAmount = customTip.value;
       console.log(`The value of customTipAmount is ${customTipAmount}`);
    })
}

checkTipByClick();
checkTipByCustom();


// store value of tip btn clicked on OR IF there is a valid number in the custom tip input box, use that as the tip...must be more than 0 and field not blank
