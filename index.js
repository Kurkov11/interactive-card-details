document.getElementById('html_body').onclick = function(){
    console.log('body clicked');
    let inputList = document.getElementsByClassName('card-input');
    for(let i = 0; i < inputList.length; i++){
        if(document.activeElement == inputList[i]){
            inputList[i].style.border = '1px solid black';
        }
    }
}