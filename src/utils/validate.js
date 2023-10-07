 export const checkValidData=(email,password)=>{
const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPassWorValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)




if(!isEmailvalid) return "Email Is not valid "
if(!isPassWorValid) return "Password is not valid"
return null; 

}

