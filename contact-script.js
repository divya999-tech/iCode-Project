
window.onload=function(){
    let formContact=document.getElementById("myform");
    let yourName=document.getElementById("name");
    let yourEmail=document.getElementById("mail");
    let phoneNumber=document.getElementById("phone");
    let message=document.getElementById("message");
    
    formContact.addEventListener("submit", validateContactForm)
    function validateContactForm(event){
        event.preventDefault();
        if(yourName.value=== ""  || yourEmail.value=== "" || phoneNumber.value=== "" || message.value=== ""){
            console.log("not success")
            
        }else{
            console.log(`Your Name: ${yourName.value} \n Your Email: ${yourEmail.value} \n Your Phone NUmber: ${phoneNumber.value} \n Your Message: ${message.value}`);
        }
    }

    };