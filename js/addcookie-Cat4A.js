  let user4 = getCookie("P1-cookie-cat4");
  console.log(user4);
  if (user4 != "") {
    alert("Le cookie existe");
  } else {
    setCookie("P1-cookie-cat4", "Langue:fr, Province:QC",15);
	}  