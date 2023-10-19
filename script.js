const form = document.querySelector('form');

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);

    const result = document.getElementById('result');
    const state = document.getElementById('status');

    if(height === "" || height < 0 || isNaN(height)){
        result.textContent="Please enter the correct height"
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.textContent="Please enter the correct weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.textContent= bmi;
        // const status = " ";
        if(bmi<=18.5){
            state.textContent="Underweight"
            state.style.color='red'
        }
        else if(bmi > 18.5 && bmi < 24.9){
            state.textContent="Normal"
            state.style.color="green"
        }
        else if(bmi > 25 && bmi < 29.9){
            state.textContent="Overweight"
            state.style.color="orange"
        }
        else if(bmi>=30){
            state.textContent="Obesity"
            state.style.color="red"
        }   
            
        
        // status.textContent= status;
    }
});