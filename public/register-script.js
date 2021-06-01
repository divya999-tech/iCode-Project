window.onload =  ()=> {
  let formRegister = document.getElementById("myform");
  

  formRegister.addEventListener("submit", async (e)=> {
    e.preventDefault();
    let emailAddress = document.getElementById("mail");
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let password = document.getElementById("security");
  let confirmPassword = document.getElementById("passwo");
  let mobileNumber = document.getElementById("phone");
  let template =`emailaddress:  ${emailAddress.value} \n firstname: ${firstName.value} \n lastname: ${lastName.value} \n password: ${password.value} \n confirmpassword: ${confirmPassword.value} and mobilenumber: ${mobileNumber.value}`
  if ( emailAddress.value === "" ||
  firstName.value === "" ||
  lastName.value === "" ||
  password.value === "" ||
  confirmPassword.value === "" ||
  mobileNumber.value===""
   
  ) {
    window.alert("All fields are required");
  } else if (password.value!==confirmPassword.value){
    
    window.alert("Password doesnot match. Please check")
    
  }else if(mobileNumber.value.length!==10){
    window.alert("Please check length of the mobile number")
    


  }else if(isNaN(mobileNumber.value) ){
    window.alert("please check the number. It should be only number")

  }else if(firstName.value.length>30){
    window.alert("Please check the length of the first name characters ")

  } else if (lastName.value.length>30){
    window.alert("Please check the length of the last name characters ")

  }else if(password.value.length>30){
    window.alert("Please check the length of the password ")

  }
  
  else{
    window.alert(template)
    }
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
 console.log(response)
    const json= await response.json();
   console.log(json);
   if(response.status==200){
    window.location.href="login.html"
   }else{
    console.log("error")
   }
  
   
    
    
    
  });
  
  
}

//window.location.href="login.html";

 //const url="http://localhost:5000/register"
/*fetch('/public/register.html', options).then(response =>{
      console.log(response)

    });*/
//const response=
  /*if (response.ok){
      window.location.pathname="login.html";
   }else{
     console.log("error")
   }*/



   //, "charset=UTF-8"
   