window.onload = function () {
  let formRegister = document.getElementById("myform");
  

  formRegister.addEventListener("submit", async (e)=> {
    e.preventDefault();
    let emailAddress = document.getElementById("mail");
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let password = document.getElementById("security");
  let confirmPassword = document.getElementById("passwo");
  let mobileNumber = document.getElementById("phone");
  //let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //let template =`emailaddress:  ${emailAddress.value} \n firstname: ${firstName.value} \n lastname: ${lastName.value} \n password: ${password.value} \n confirmpassword: ${confirmPassword.value} and mobilenumber: ${mobileNumber.value}`
  if ( emailAddress.value === "" ||
  firstName.value === "" ||
  lastName.value === "" ||
  password.value === "" ||
  confirmPassword.value === "" ||
  mobileNumber.value===""
   
  ) 
  {
    window.alert("All fields are required");
  } else if (password.value!==confirmPassword.value){
    
    window.alert("Password doesnot match. Please check")
    
  }else if(mobileNumber.value.length!==10){
    window.alert("Please check length of the mobile number")
    


  }else if(isNaN(mobileNumber.value)) {
    window.alert("Please check")

  }else if(firstName.value.length>30){
    window.alert("Please check the length of the first name characters ")

  } else if (lastName.value.length>30){
    window.alert("Please check the length of the last name characters ")

  }else if(password.value.length>30){
    window.alert("Please check the length of the password ")

  }
  
  else{
    //window.alert(template)
    const data={
      emailaddress:emailAddress.value ,
    firstName:firstName.value ,
    lastName:lastName.value ,
    password:password.value,
    confirmPassword:confirmPassword.value ,
    mobile:mobileNumber.value
    
    };
    let options={
      method:'POST',
     headers: { "Content-type": "application/json; charset=UTF-8"  },
      body:JSON.stringify(data)
    };
    const response = await fetch('/register', options);
 /*console.log(response)
   const json= await response.json();
   console.log(json);
   if(response.status==200){
    window.location.href="/login"
    
   }else{
    console.log("error")
   }*/

   const json= await  response.json();

   if(response.status==200){
    
   console.log(json)
   let result =document.getElementById("prayer");
   result.innerHTML=`User:Email: ${emailAddress.value}  \n Firstname: ${firstName.value}  \n Lastname: ${lastName.value}  \n Password: ${password.value}  \n Confirm Password: ${confirmPassword.value} \n Mobile: ${mobileNumber.value} `
  }else{
    result.innerHTML="There is an error. Please check."
  }

    };
    
    
    

 
  
   
 // }
    
    
  });
  
  
}