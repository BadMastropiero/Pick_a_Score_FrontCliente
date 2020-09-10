export function minLengthValidation(inputData:any, minLength:number){
    const {value} = inputData;
    removeClassErrorSuccess(inputData);
    if(value.length >= minLength){
        inputData.classList.add('success');
        return true;
    }else{
        inputData.classList.add("error");
        return false;
    }
}

export function emailValidation(inputData:any){
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const { value } = inputData;
    removeClassErrorSuccess(inputData);
    const resultValidation = emailValid.test(value);
    if(resultValidation){
        inputData.classList.add("success");
        return true;
    }else {
        inputData.classList.add('error');
        return false;
    }
}

function removeClassErrorSuccess(inputData:any){
    inputData.classList.remove("success");
    inputData.classList.remove("error");
}