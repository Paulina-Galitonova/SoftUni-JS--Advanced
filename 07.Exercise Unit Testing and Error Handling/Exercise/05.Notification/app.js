function notify(message) {
  let divElementMessege = document.getElementById("notification");

  divElementMessege.addEventListener("click", hide);

  divElementMessege.textContent = message;
  divElementMessege.style.display = "block";

  function hide() {
    divElementMessege.style.display = "none";
  }
}
