
export function validatePersonalInfo(data){
    let allInputsFilled = false;
    let emailIsCorrect = false;
      
    const dataEntry = Object.entries(data);


    dataEntry.forEach(el => {
        // STATE 1
        if(el[1] === '') return allInputsFilled = false;
        allInputsFilled = true;

        // STATE 2
        if(el[0] === 'email'){
            const arr = el[1].toLocaleLowerCase().split('');
            emailIsCorrect = arr.some(el => el === '@') && arr.some(el => el === '.');
        }
    
       
    });
    

    if(allInputsFilled && emailIsCorrect){
        return true;
    } else {    
        return false;
    }
}

 export function validateEmail(data){
    let emailIsCorrect = false;
    const arr = data.toLocaleLowerCase().split('');
    emailIsCorrect = arr.some(el => el === '@') && arr.some(el => el === '.');
    return emailIsCorrect;
}