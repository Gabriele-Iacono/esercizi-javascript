const counter = document.getElementById("counter")
let count = 0
function updateCounterValue() {
    counter.innerText = count;
}
const increaseBtn = document.getElementById("increaseBtn");
increaseBtn.addEventListener("click", function(){
    count++;
    updateCounterValue();
});

const decreaseBtn = document.getElementById("decreaseBtn");
decreaseBtn.addEventListener("click", function(){
    count--;
    updateCounterValue();
})

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
  count = 0
    updateCounterValue();
})











const btnPiu = document.getElementById("piu")
const btnNumero = document.getElementById("numero")
const btnReset = document.getElementById("reset")


