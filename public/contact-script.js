
window.onload=function(){
    let formContact=document.getElementById("myform");
    let yourName=document.getElementById("name");
    let yourEmail=document.getElementById("mail");
    let phoneNumber=document.getElementById("phone");
    let message=document.getElementById("message");
    
    formContact.addEventListener("submit", async (event)=>{
        event.preventDefault();
        if(yourName.value=== ""  || yourEmail.value=== "" || phoneNumber.value=== "" || message.value=== ""){
            console.log("Please fill all the fields")
            
        }else if(yourName.value.length>30) {
            window.alert("PLease check the length of the characters")
    
          }else if(phoneNumber.value.length!==10){
            window.alert("Please check length of the mobile number")
            
    
    
          }else if(isNaN(phoneNumber.value) ){
            window.alert("please check the number. It should be only number")
    
          }else if(message.value.length>200){
              window.alert("Please check the maximum length of characters")

          }
        else{
           window.alert(`Your Name: ${yourName.value} \n Your Email: ${yourEmail.value} \n Your Phone NUmber: ${phoneNumber.value} \n Your Message: ${message.value}`);
        }
        const data2={
          yourName: yourName.value,
          yourEmail:yourEmail.value,
          phoneNumber:phoneNumber.value,
          message:message.value
             
         };
        
         let options={
           method:'POST',
          headers: { "Content-type": "application/json; charset=UTF-8"  },
           body:JSON.stringify(data2)
         };
      
      const response = await  fetch('/contact', options);
      console.log(response)
         const json= await  response.json();
        console.log(json);
        if(response.status==200){
         window.location.href="welcome.pug"
        }else{
         console.log("error")
        }
    });

    };