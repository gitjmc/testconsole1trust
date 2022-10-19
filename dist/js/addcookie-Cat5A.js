const cookieName5 = "cookie-cat5-P";
let user5 = getCookie(cookieName5);  
  if (user5 != "") {
    alert("Le cookie " + cookieName5 + " existe");
  } else {
    setCookie(cookieName5, "Created by the page!",15);
    console.log(cookieName5 + " Created by the page!");
	}  