const dateOfBirth = document.querySelector("#date-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const message = document.querySelector(".message-field");
const error = document.querySelector(".error");
const output = document.querySelector(".output-msg");

checkNumber.addEventListener('click',() => {
    console.log(dateOfBirth.value,luckyNumber.value);
    birthdayIsLucky();
});


function calculateSum(dateBirth){
    var str = dateBirth.split(""),sum = 0;

    for(i = 0 ; i < str.length ; i++){
        if(!isNaN(str[i])){
            sum += parseInt(str[i]);
        }
    }
    console.log(sum);
    return sum;
};

function birthdayIsLucky(){
    
    const luckyNo = luckyNumber.value;
    const dateBirth = dateOfBirth.value;

    if(luckyNo && dateBirth ){
        if(Number(luckyNo.value) >= 0){
            error.style.display = "flex";
            message.innerText = "Please provide valid number!";
        } else {
            const sum = calculateSum(dateBirth);

            if(sum%luckyNo === 0){
                output.style.display = "flex";
                output.innerText = "Yayy! Your birthday is lucky!";
            } else {
                output.style.display = "flex";
                output.innerText = "Oops! Your birthday is not lucky :(";
            }
        
        }
        //console.log("Invalid");
    } else {
        error.style.display = "flex";
        message.innerText = "Please provide both values!";
        message.style = "color: red";
    }
   
    
    //
};

luckyNumber.addEventListener('click', ()=>{
    message.innerText = "";
    output.innerText = "";
    output.style.display = "none";
});

dateOfBirth.addEventListener('click',()=>{

    message.innerText = "";
    output.innerText = "";
    output.style.display = "none";
});
