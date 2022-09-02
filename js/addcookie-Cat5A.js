  let user5 = getCookie("P1-cookie-cat5");
  console.log(user5);
  if (user5 != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat5", "Langue:fr, Province:QC",15);
	}  