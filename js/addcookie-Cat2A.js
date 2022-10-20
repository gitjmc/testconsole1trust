const cookieName2 = "cookie-cat2-P";
let user2 = getCookie(cookieName2);  
  if (user2 != "") {
    alert("Le cookie " + cookieName2 + " existe");
  } else {
    setCookie(cookieName2, "Created by the page!",15);
    console.log(cookieName2 + " Created by the page!");
	}  