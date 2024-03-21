interface formData {
    email: string
    confirmEmail: string
    password: string
    confirmPassword: string
}

const validation = (form:formData) => {
    const formErrors = {
        email:'',
        confirmEmail:'',
        password:'',
        confirmPassword:''
    };

    //Email
    if(!/\S+@\S+\.\S+/.test(form.email)){
        formErrors.confirmEmail = 'Formato de email invalido'}

    if(form.email !== form.confirmEmail){
         formErrors.confirmEmail='Los email no coinciden'}
       

         
    if(form.password !== form.confirmPassword){
         formErrors.confirmPassword='Las contraseñas no coinciden'}
      
    if(!/\d/.test(form.password)){
        formErrors.password = "La contraseña debe contener almenos un numero"
    }
    if(form.password.length < 6 ){
        formErrors.password = "La contraseña debe contener almenos 6 caracteres"
    }
    if(form.password.length > 12){
        formErrors.password = "La contraseña no puede exceder los 12 caracteres"
    }

    return formErrors;
}

export default validation