  let user3 = getCookie("P1-cookie-cat3");
  console.log(user3);
  if (user3 != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat3", "Langue:fr, Province:QC",15);
	}  