let inputList = document.getElementsByClassName('card-input');

let nameOutlineRed = false;
let numberOutlineRed = false;
let monthOutlineRed = false;
let yearOutlineRed = false;
let cvcOutlineRed = false;

document.getElementById('html_body').onclick = function(){
    console.log('body clicked');
    let gradientList = document.getElementsByClassName('input-gradient');
    let anyInputActive = false;

    for(let i = 0; i < inputList.length; i++){
        if(document.activeElement == inputList[i]){
            inputList[i].style.outline = '0';
            gradientList[i].style.backgroundImage = 'linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))';
            for(let j = 0; j < inputList.length; j++){
                if(j != i){
                    inputList[j].style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
                    gradientList[j].style.backgroundImage = 'none';
                }
            }
            anyInputActive = true;
        }
    }

    if(!anyInputActive){
        for(let i = 0; i < inputList.length; i++){
            inputList[i].style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
            gradientList[i].style.backgroundImage = 'none';
        }
    }

    if(nameOutlineRed){
        document.getElementById('name-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('name-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(numberOutlineRed){
        document.getElementById('number-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('number-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(monthOutlineRed){
        document.getElementById('month-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('month-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(yearOutlineRed){
        document.getElementById('year-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('year-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(cvcOutlineRed){
        document.getElementById('cvc-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('cvc-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
}

document.getElementById('confirm-btn').onclick = function(){
    if(document.getElementById('name-input').value == ''){
        nameOutlineRed = true;
    }else{
        nameOutlineRed = false;
    }
    if(document.getElementById('number-input').value == ''){
        numberOutlineRed = true;
    }else{
        numberOutlineRed = false;
    }
    if(document.getElementById('month-input').value == ''){
        monthOutlineRed = true;
    }else{
        monthOutlineRed = false;
    }
    if(document.getElementById('year-input').value == ''){
        yearOutlineRed = true;
    }else{
        yearOutlineRed = false;
    }
    if(document.getElementById('cvc-input').value == ''){
        cvcOutlineRed = true;
    }else{
        cvcOutlineRed = false;
    }
}