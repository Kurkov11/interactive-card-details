let inputList = document.getElementsByClassName('card-input');

let nameEmpty = false;
let numberEmpty = false;
let monthEmpty = false;
let yearEmpty = false;
let cvcEmpty = false;

let numberWrongFormat = false;

let monthWrongFormat = false;
let yearWrongFormat = false;
let cvcWrongFormat = false;

document.getElementById('html_body').onclick = function(){
    console.log('body clicked');
    let gradientList = document.getElementsByClassName('input-gradient');
    let anyInputActive = false;

    for(let i = 0; i < inputList.length; i++){
        if(document.activeElement == inputList[i]){
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
        document.getElementById('name-input-gradient').style.backgroundImage = 'none';
        document.getElementById('name-input').style.outline = '1px solid hsl(0, 100%, 66%)';
        document.getElementById('name-blank').style.display = 'block';
    }else{
        document.getElementById('name-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
        document.getElementById('name-blank').style.display = 'none';
    }
    if(numberEmpty){
        document.getElementById('number-blank').style.display = 'block';
    }else{
        document.getElementById('number-blank').style.display = 'none';
    }
    if(monthEmpty){
        document.getElementById('month-input-gradient').style.backgroundImage = 'none';
        document.getElementById('month-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('month-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(monthWrongFormat){
        document.getElementById('month-input-gradient').style.backgroundImage = 'none';
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
        document.getElementById('year-input-gradient').style.backgroundImage = 'none';
        document.getElementById('year-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('year-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(yearWrongFormat){
        document.getElementById('year-input-gradient').style.backgroundImage = 'none';
        document.getElementById('year-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('year-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }

    if(cvcEmpty){
        document.getElementById('cvc-input-gradient').style.backgroundImage = 'none';
        document.getElementById('cvc-input').style.outline = '1px solid hsl(0, 100%, 66%)';
        document.getElementById('cvc-blank').style.display = 'block';
    }else{
        document.getElementById('cvc-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
        document.getElementById('cvc-blank').style.display = 'none';
    }
    if(cvcWrongFormat){
        document.getElementById('cvc-input-gradient').style.backgroundImage = 'none';
        document.getElementById('cvc-input').style.outline = '1px solid hsl(0, 100%, 66%)';
    }else{
        document.getElementById('cvc-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
    if(numberWrongFormat){
        document.getElementById('number-wrong-format').style.display = 'block';
    }else{
        document.getElementById('number-wrong-format').style.display = 'none';
    }

    if(numberWrongFormat || numberEmpty){
        document.getElementById('number-input').style.outline = '1px solid hsl(0, 100%, 66%)';
        document.getElementById('number-input-gradient').style.backgroundImage = 'none';
    }else{
        document.getElementById('number-input').style.outline = '1px solid hsla(279, 6%, 55%, 0.3)';
    }
}

document.getElementById('confirm-btn').onclick = function(){
    let errorOcurred = false;
    if(document.getElementById('name-input').value == ''){
        nameEmpty = true;
        errorOcurred = true;
    }else{
        nameEmpty = false;
    }
    if(document.getElementById('number-input').value == ''){
        numberEmpty = true;
        errorOcurred = true;
    }else{
        numberEmpty = false;
    }
    if(document.getElementById('month-input').value == ''){
        monthEmpty = true;
        errorOcurred = true;
    }else{
        monthEmpty = false;
    }
    if(document.getElementById('month-input').value.length != 2){
        monthWrongFormat = true;
        errorOcurred = true;
    }else{
        monthWrongFormat = false;
    }
    if(document.getElementById('year-input').value == ''){
        yearEmpty = true;
        errorOcurred = true;
    }else{
        yearEmpty = false;
    }
    if(document.getElementById('year-input').value.length != 2){
        yearWrongFormat = true;
        errorOcurred = true;
    }else{
        yearWrongFormat = false;
    }
    if(document.getElementById('cvc-input').value == ''){
        cvcEmpty = true;
        errorOcurred = true;
    }else{
        cvcEmpty = false;
    }
    if(document.getElementById('cvc-input').value.length != 3){
        cvcWrongFormat = true;
        errorOcurred = true;
    }else{
        cvcWrongFormat = false;
    }
    if(!isNumber(document.getElementById('number-input').value)){
        numberWrongFormat = true;
        errorOcurred = true;
    }else{
        numberWrongFormat = false;
    }

    if(!errorOcurred){
        let listOfOneMain = document.getElementsByTagName('main');
        listOfOneMain[0].style.display = 'none';
        document.getElementById('complete-state').style.display = 'flex';
    }
}

function isNumber(value){
    return !isNaN(value);
}