function p1c5cat5() {
  let user = getCookie("P1-cookie-cat5");
  console.log(user);
  if (user != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat5", "Langue:fr, Province:QC",15);
  }  
}