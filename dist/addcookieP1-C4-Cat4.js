function p1c4cat4() {
  let user = getCookie("P1-cookie-cat4");
  console.log(user);
  if (user != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat4", "Langue:fr, Province:QC",15);
  }  
}