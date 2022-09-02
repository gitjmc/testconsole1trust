  let user1 = getCookie("P1-cookie-cat1");
  console.log(user1);
  if (user1 != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat1", "Langue:fr, Province:QC",15);
  }  