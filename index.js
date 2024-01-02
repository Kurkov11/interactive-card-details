document.getElementById('html_body').onclick = function(){
    console.log('body clicked');
    let inputList = document.getElementsByClassName('card-input');
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
}