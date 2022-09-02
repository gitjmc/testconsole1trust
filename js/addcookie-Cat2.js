function p1c2cat2() {
  let user = getCookie("P1-cookie-cat2");
  console.log(user);
  if (user != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat2", "Langue:fr, Province:QC",15);
  }  
}