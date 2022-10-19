const cookieName4 = "cookie-cat4-P";
let user4 = getCookie(cookieName4);  
  if (user4 != "") {
    alert("Le cookie " + cookieName4 + " existe");
  } else {
    setCookie(cookieName4, "Created by the page!",15);
    console.log(cookieName4 + " Created by the page!");
	}  