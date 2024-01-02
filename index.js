let inputList = document.getElementsByClassName('card-input');

let nameEmpty = false;
let numberEmpty = false;
let monthEmpty = false;
let yearEmpty = false;
let cvcEmpty = false;

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

    if(nameEmpty){
        document.getElementById('name-input').style.outline = '1px solid hsl(0, 100%, 66%)';
        document.getElementById('name-blank').style.display = 'block';
    }else{
        document.getElementById('name-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
        document.getElementById('name-blank').style.display = 'none';
    }
    if(numberEmpty){
        document.getElementById('number-input').style.outline = '1px solid hsl(0, 100%, 66%)';
        document.getElementById('number-blank').style.display = 'block';
    }else{
        document.getElementById('number-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
        document.getElementById('number-blank').style.display = 'none';
    }
    if(monthEmpty){
        document.getElementById('month-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('month-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }

    if(monthEmpty || yearEmpty){
        document.getElementById('date-blank').style.display = 'block';
    }else{
        document.getElementById('date-blank').style.display = 'none';
    }

    if(yearEmpty){
        document.getElementById('year-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('year-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(cvcEmpty){
        document.getElementById('cvc-input').style.outline = '1px solid hsl(0, 100%, 66%)';
        document.getElementById('cvc-blank').style.display = 'block';
    }else{
        document.getElementById('cvc-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
        document.getElementById('cvc-blank').style.display = 'none';
    }
}

document.getElementById('confirm-btn').onclick = function(){
    if(document.getElementById('name-input').value == ''){
        nameEmpty = true;
    }else{
        nameEmpty = false;
    }
    if(document.getElementById('number-input').value == ''){
        numberEmpty = true;
    }else{
        numberEmpty = false;
    }
    if(document.getElementById('month-input').value == ''){
        monthEmpty = true;
    }else{
        monthEmpty = false;
    }
    if(document.getElementById('year-input').value == ''){
        yearEmpty = true;
    }else{
        yearEmpty = false;
    }
    if(document.getElementById('cvc-input').value == ''){
        cvcEmpty = true;
    }else{
        cvcEmpty = false;
    }
}