document.getElementById('btn-generate').addEventListener('click', function(){
    let pin = Math.round(Math.random()*10000)+'';
    if(pin.length == 4){
        document.getElementById('generated-pin').value = Number(pin);
    }
    else{
        pin = Math.round(Math.random()*10000);
    }
})

document.getElementById('number').addEventListener('click', function(event){
    let number = event.target.innerText;
    let previousNumber = document.getElementById('typed-pin').value;
    console.log(number);
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
    
})