var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment(){
    if (currentNumber <=9){
        currentNumber++
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        currentNumber = 10
    }

    if(currentNumber <1){
        currentNumberWrapper.style.color = 'red'
    }
    else{
        currentNumberWrapper.style.color = 'black'
    }
}

function decrement(){

    if(currentNumber <1){
        currentNumberWrapper.style.color = 'red'
        currentNumber--
        currentNumberWrapper.innerHTML = currentNumber;
    }

    else{
        currentNumberWrapper.style.color = 'black'
        currentNumber--
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
}