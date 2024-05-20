const cardHolderName = document.getElementById("cardHolderName");
const cardNum = document.getElementById("cardNumber");
const expMM = document.getElementById("exp-mm");
const expYY = document.getElementById("exp-yy");
const cvcNumber = document.getElementById('cvcNumber');

const nameError = document.querySelector('.name-error');
const cardError = document.getElementById("num-error");
const expError = document.getElementById("exp-error");

const cardImgNum = document.querySelector('.card-num');
const cardHolder = document.querySelector('.cardholder');
const cardExpiry = document.querySelector('.card-exp');
const cvcImgNum = document.querySelector('.cvc');

const thankyouDiv = document.getElementById("thankyou");
const continueBtn = document.getElementById("continueBtn");

const confirmBtn = document.getElementById('confirmBtn');
const myForm = document.querySelector('form');

cardNum.addEventListener("input", (e) => {
    const input = e.target;
    // Remove non-numeric and limit to 16 digit
    const value = input.value.replace(/\D/g, '').substring(0, 16);
    // Add a space after 4 digit
    const formattedVal = value.replace(/(\d{4})/g, '$1 ').trim();
    input.value = formattedVal;
});

expMM.addEventListener("input", (e) => {
    const input = e.target;
    const value = input.value.replace(/\D/g, '').substring(0, 2);
    input.value = value;

    if(value > 12){
        expMM.style.borderColor = "hsl(0, 100%, 66%)";
        expError.textContent = "Enter correct month";
        expError.style.display = "block";
    }else{
        expError.style.display = "none";
        expError.textContent = "Can't be blank";
    }
});

expYY.addEventListener("input", (e) => {
    const input = e.target;
    const value = input.value.replace(/\D/g, '').substring(0, 2);
    input.value = value;
});

cvcNumber.addEventListener("input", (e) => {
    const input = e.target;
    const value = input.value.replace(/\D/g, '').substring(0, 3);
    input.value = value;
})

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
    if(cardNum.value.trim() !== "" && expMM.value.trim() !== "" && expYY.value.trim() !== "" && cvcNumber.value.trim() !== ""){
        console.log('all fields are correct');
        const holderName = cardHolderName.value;
        const cardNumber = cardNum.value;
        const cardExp = expMM.value + "/" + expYY.value;
        const cvc = cvcNumber.value;

        cardHolder.textContent = holderName;
        cardImgNum.textContent = cardNumber;
        cardExpiry.textContent = cardExp;
        cvcImgNum.textContent = cvc;

        setTimeout(() => {
            myForm.style.display = "none";
            thankyouDiv.style.display = "block";
        }, 1000);
    }
});

const formValidation = () => {
    const num = cardNum.value.replace(/\s/g, '');
    const numLength = (num.match(/\d/g) || []).length;

    if(cardHolderName.value.trim() == ""){
        cardHolderName.style.borderColor = "hsl(0, 100%, 66%)";
        nameError.style.display = "block";
    }else{
        cardHolderName.style.borderColor = "";
        nameError.style.display = "none";
    }

    if(numLength < 16 && cardNum.value == ""){
        cardError.textContent = "Wrong card number";
        cardNum.style.borderColor = "hsl(0, 100%, 66%)";
        cardError.style.display = "block";
    }else{
        cardNum.style.borderColor = "";
        cardError.style.display = "none";
    }
    if(expMM.value == ""){
        expMM.style.borderColor = "hsl(0, 100%, 66%)";
    }else{
        expMM.style.borderColor = "";
    }
    if(expYY.value == ""){
        expYY.style.borderColor = "hsl(0, 100%, 66%)";
    }else{
        expYY.style.borderColor = "";
    }
    if(cvcNumber.value == ""){
        cvcNumber.style.borderColor = "hsl(0, 100%, 66%)";
    }else{
        cvcNumber.style.borderColor = "";
    }
    if(expMM.value == "" || expYY.value == "" || cvcNumber.value == ""){
        expError.style.display = "block";
    }else{
        expError.style.display = "none";
    }
}

continueBtn.addEventListener("click", () => {
    setTimeout(() => {
        thankyouDiv.style.display = "none";
        window.location.reload();
    }, 1000);
});