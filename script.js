const form = document.querySelector("form"),
google = document.querySelector(".icons .opacity"),
eInput = document.querySelector("input"),
eSubmit = document.querySelector("button"),
error = document.querySelector(".error_text");

form.onsubmit = (e)=>{
  e.preventDefault();
  if(eInput.value == ""){
    eInput.classList.add("active");
    error.classList.add("active");
    eInput.style.color = "#e74c3c";
  }else{
    check();
  }
  eInput.onkeyup = ()=>{
    check();
  }

  function check() {
    if(eInput.value == ""){
      eInput.classList.add("active");
      error.classList.add("active");
      google.classList.remove("active");
      eInput.style.color = "#e74c3c";
    }else{
      eInput.classList.remove("active");
      error.classList.remove("active");
      google.classList.add("active");
      eInput.style.color = "#6f36ff";
    }
  }
  if(!eInput.classList.contains("active")){
    form.submit();
    console.log("Form Submitted");

    setTimeout(()=>{
      console.clear("Form Submitted")
    }, 4500);
  }
}
