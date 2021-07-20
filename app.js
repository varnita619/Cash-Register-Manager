const billAmount = document.querySelector('#billAmount');
const nextBtn = document.querySelector('#nextBtn');
const section3 = document.querySelector('.section3');
const cashAmount = document.querySelector('#cashAmount');
const checkBtn = document.querySelector('#checkBtn');
const section4 = document.querySelector('.section4')
const errorMsg = document.querySelector('.errorMsg');
const output = document.querySelector('#output');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const arrayOfNotes = [2000, 500, 100, 20, 10, 5, 1];

//When bill amount is filled displays cash input field
nextBtn.addEventListener('click', ()=>{
    hideError();
    var Amount = Number(billAmount.value);
    if(Amount>0){
        nextBtn.style.display = "none";
        section3.style.display = "block";
    }
    else{
        displayError("Enter valid bill amount")

    }
    // console.log(Amount);
})

// When cash input field is filled displays amount to be returned
checkBtn.addEventListener('click', ()=>{
    clearNoOfNotes();
    hideError();
    var cashGiven = Number(cashAmount.value);
    var Amount = Number(billAmount.value);
    if(cashGiven > Amount && cashGiven > 0){
        // checkBtn.style.display = "none";
        calculateReturnChange(Amount, cashGiven);
    }

    
    else{
        displayError("Given Cash is less than bill amount")
    }
})

//Calculates number of notes to be returned
function calculateReturnChange(bill, cash){
   
 var returnAmount = cash-bill;

 if(returnAmount < 1){
     displayError("No amount should be returned");
     return;
 }

 section4.style.display = "block";

 for(let i=0; i < arrayOfNotes.length; i++){
     returnAmount = notesUsed(returnAmount, arrayOfNotes[i], i)
 }
}
// checks minimum no of notes to be used after comparing with currency
function notesUsed(remainder, noteAmt, index){

    if(remainder >= noteAmt){
        let notes = Math.floor(remainder/noteAmt);
        remainder = remainder - notes*noteAmt;
        noOfNotes[index].innerText = `${notes}`;
    }
    return remainder
}

//clears the no. of notes if check button is clicked without refreshing the page
function clearNoOfNotes(){
    for(let notes of noOfNotes){
        notes.innerText = "";
    }
}

// displays error if any field is wrongly filled
function displayError(text){
    errorMsg.style.display = "block";
    errorMsg.innerText= text;
    section4.style.display = "none";
}

// hides error div if all info is correctly filled
function hideError(){
    errorMsg.style.display = "none";
}



