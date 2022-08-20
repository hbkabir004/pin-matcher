function getPin(){
    let pin = Math.round(Math.random()*10000)+'';
    if(pin.length == 4){
        document.getElementById('generated-pin').value = Number(pin);
    }
    else{
        pin = Math.round(Math.random()*10000);
    }
    return pin;
}



document.getElementById('btn-generate').addEventListener('click', function(){
    getPin();
})

document.getElementById('number').addEventListener('click', function(event){
    let number = event.target.innerText;
    let previousNumber = document.getElementById('typed-pin').value;
    
    let newNumber;
    if(isNaN(number)){
    if(number === 'C'){
        number = '';
        document.getElementById('typed-pin').value = number;
    }
    else if(number === '<'){
       const digits = previousNumber.split('');
       digits.pop();
       const remainedDigits = digits.join('') 
        document.getElementById('typed-pin').value = remainedDigits;
    }
}
    else{
        let newNumber = previousNumber + number;
        document.getElementById('typed-pin').value = newNumber;
    }
    return newNumber;
    
})

document.getElementById('btn-submit').addEventListener('click', function(){
    const generatedPin = document.getElementById('generated-pin').value;
    const typedNumber = document.getElementById('typed-pin').value;
    const match = document.getElementById('match');
    const error = document.getElementById('error');
    if(generatedPin === typedNumber){
        match.style.display = 'block';
        error.style.display = 'none';

    }
    else{
        error.style.display = 'block';
        match.style.display = 'none';
       
    }
})