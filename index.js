document.getElementById('html_body').onclick = function(){
    console.log('body clicked');
    let inputList = document.getElementsByClassName('card-input');
    let anyInputActive = false;

    for(let i = 0; i < inputList.length; i++){
        if(document.activeElement == inputList[i]){
            inputList[i].style.border = '1px solid black';
            for(let j = 0; j < inputList.length; j++){
                if(j != i){
                    inputList[j].style.border = '1px solid hsla(279, 6%, 55%, 0.3)';
                }
            }
            anyInputActive = true;
        }
    }

    if(!anyInputActive){
        for(let j = 0; j < inputList.length; j++){
            inputList[j].style.border = '1px solid hsla(279, 6%, 55%, 0.3)';
        }
    }
}