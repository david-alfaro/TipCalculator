//DOM ELEMENTS
//INPUTS
const billAmountInput = document.getElementById("inputAmount");
const numberPeopleInput = document.getElementById("numberOfpeople");
//DIV RESULTS
const totalPerPersonDIV = document.getElementById("totalPerPerson");
const tipPerPersonDIV = document.getElementById("tipPerPerson");
//BUTTONS
const button5 = document.getElementById("tip5");
const button10 = document.getElementById("tip10");
const button15 = document.getElementById("tip15");
const button25 = document.getElementById("tip25");
const button50 = document.getElementById("tip50");
const custom = document.getElementById("customTip");
const resetBtn = document.getElementById("resetBtn");

//others
const errorLabel = document.getElementById("numberPeopleError");

//button functions
button5.addEventListener('click',function(e){
    e.preventDefault();
    calcTipPercentage(0.05)
});

button10.addEventListener('click',function(e){
    e.preventDefault();
    calcTipPercentage(0.1)
});

button15.addEventListener('click',function(e){
    e.preventDefault();
    calcTipPercentage(0.15)
});

button25.addEventListener('click',function(e){
    e.preventDefault();
    calcTipPercentage(0.25)
});

button50.addEventListener('click',function(e){
    e.preventDefault();
    calcTipPercentage(0.50)
});

custom.addEventListener("input",function(){
    const customTipValue = custom.value;
    const customTipPercentage = customTipValue/100;
    calcTipPercentage(customTipPercentage);
})

//calculate the tip percentage per person, and the grand total
function calcTipPercentage(percentage){
    const billAmount = billAmountInput.value;
    const numberPeople = numberPeopleInput.value;
    if(billAmount && numberPeople){
        const tipAmountPerPerson = Math.round((billAmount*percentage)/numberPeople);
        const totalPerPerson = Math.round(billAmount/numberPeople);
        const grandTotal = Math.round(tipAmountPerPerson+totalPerPerson);
        tipPerPersonDIV.textContent="$ "+tipAmountPerPerson;
        totalPerPersonDIV.textContent="$ "+grandTotal;
        errorLabel.classList.add("hidden");
        numberPeopleInput.classList.remove("error");
    }
    if(!numberPeople){
        errorLabel.classList.remove("hidden");
        numberPeopleInput.classList.remove("noerror");
        numberPeopleInput.classList.add("error");
    }
};

//function of the reset button
resetBtn.addEventListener('click',function(e){
    e.preventDefault();
    billAmountInput.value = null;
    numberPeopleInput.value = null;
    tipPerPersonDIV.textContent = "$0.00";
    totalPerPersonDIV.textContent = '$0.00';
    errorLabel.classList.add("hidden");
    numberPeopleInput.classList.remove("error");
    custom.value = null;
});