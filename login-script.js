window.onload = function () {
    let formEle = document.getElementById("myform");
    let name = document.getElementById("username");
    let password = document.getElementById("secret");

    formEle.addEventListener("submit", validateForm);
    function validateForm(e) {
      e.preventDefault();
      if (name.value === "" || password.value === "") {
        console.log("success");
      } else {
        console.log(`Hi my name is ${name.value} \n Password: ${password.value}`);
      }
    }
  };