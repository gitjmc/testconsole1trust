function p1c3cat3() {
  let user = getCookie("P1-cookie-cat3");
  console.log(user);
  if (user != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat3", "Langue:fr, Province:QC",15);
  }  
}