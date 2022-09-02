function p1c1cat1() {
  let user = getCookie("P1-cookie-cat1");
  console.log(user);
  if (user != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat1", "Langue:fr, Province:QC",15);
  }  
}