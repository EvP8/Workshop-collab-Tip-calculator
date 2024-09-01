const word = document.querySelector("input");
const button = document.querySelector(".btn");
const resultTip = document.querySelector(".tip");
const resultTotal = document.querySelector(".tipTotal");
const tipValue = document.querySelector("#tipAmount");

button.addEventListener("click", calculateTip);

word.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9.]/g, '');
});

function calculateTip() {
    const tip = tipValue.value;
    const bill = word.value;
    resultTip.innerHTML = "Tip: €" + " " + (bill * (tip / 100)).toFixed(2);
    resultTotal.innerHTML = "Total Amount: €" + " " + (bill * (tip / 100) + parseInt(bill)).toFixed(2);
}
