function validate() {
  const form = document.getElementById("form")
  const email = document.getElementById("email").value
  const text = document.getElementById("text")

  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (email.match(pattern)) {
    form.classList.add("valid")
    form.classList.remove("invalid")
    text.innerHTML = "Your Email Address is Valid."
    text.style.color = "#4caf50"
  } else {
    form.classList.remove("valid")
    form.classList.add("invalid")
    text.innerHTML = "Please Enter Valid Email Address"
    text.style.color = "#f44336"
  }

  if (email == "") {
    form.classList.remove("invalid")
    text.innerHTML = ""
  }
}
