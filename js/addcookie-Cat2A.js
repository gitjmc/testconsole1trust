  let user2 = getCookie("P1-cookie-cat2");
  console.log(user2);
  if (user2 != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat2", "Langue:fr, Province:QC",15);
	}  