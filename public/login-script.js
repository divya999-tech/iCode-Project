window.onload = function () {
    let formEle = document.getElementById("myform");
    let name = document.getElementById("username");
    let password = document.getElementById("secret");
    

    formEle.addEventListener("submit", async (e)=>{
      e.preventDefault();
      if (name.value === "" || password.value === "") {
        window.alert("Please fill the fields");
      } else if(name.value.length>30) {
        window.alert("PLease check the length of the characters")

      }else if(password.value.length>30){
        window.alert("Please check the length of the password")

      }
      else {
       // window.alert(`Hi my name is ${name.value} \n Password: ${password.value}`);
       const data1={
        name:name.value ,
       password:password.value ,
           
       };
      
       let options={
         method:'POST',
        headers: { "Content-type": "application/json; charset=UTF-8"  },
         body:JSON.stringify(data1)
       };
    
    const response = await  fetch('/login', options);
   //console.log(response)
       const json= await  response.json();
     // console.log(json);
      if(response.status==200){
       window.location.href="/menu"
      }else{
       console.log("error")
      }

     /* if(response.status==200){
        const json= await  response.json();
        
       let result =document.getElementById("result");
       result.innerHTML=`User:Name: ${name.value} with id: ${json} \n Password: ${password.value} with id: ${json}  `
       
      }else{
        result.innerHTML="There is an error. Please check."
      }*/



      }

      
    });



    
  };