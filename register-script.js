window.onload = function () {
    let formRegister = document.getElementById("myform");
    let emailAddress = document.getElementById("mail");
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let password = document.getElementById("security");
    let confirmPassword = document.getElementById("passwo");
    let mobileNumber = document.getElementById("phone");

    formRegister.addEventListener("submit", validateRegistration);
    function validateRegistration(e) {
      e.preventDefault();
      if (
        emailAddress.value === "" ||
        firstName.value === "" ||
        lastName.value === "" ||
        password.value === "" ||
        confirmPassword.value === "" ||
        mobileNumber.value === ""
      ) {
        console.log("not success");
      } else {
        console.log(
          `emailaddress:  ${emailAddress.value} \n firstname: ${firstName.value} \n lastname: ${lastName.value} \n password: ${password.value} \n confirmpassword: ${confirmPassword.value} and mobilenumber: ${mobileNumber.value}`
        );
      }
    }
  };