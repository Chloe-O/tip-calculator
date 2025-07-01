let tipBtns = document.getElementsByClassName("tip-btn");
let selectTip = document.getElementById("selectTip");

let tipAmount;

selectTip.addEventListener('click', (e) => {
    // console.log(e.target.value);
    tipAmount = e.target.value;
    console.log(tipAmount);
});


// store value of tip btn clicked on OR IF there is a valid number in the custom tip input box, use that as the tip...must be more than 0 and field not blank