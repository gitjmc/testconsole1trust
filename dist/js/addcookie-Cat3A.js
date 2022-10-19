const cookieName3 = "cookie-cat3-P";
let user3 = getCookie(cookieName3);  
  if (user3 != "") {
    alert("Le cookie " + cookieName3 + " existe");
  } else {
    setCookie(cookieName3, "Created by the page!",15);
    console.log(cookieName3 + " Created by the page!");
	}  
  