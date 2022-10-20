const cookieName1 = "cookie-cat1-P";
let user1 = getCookie(cookieName1);  
  if (user1 != "") {
    alert("Le cookie " + cookieName1 + " existe");
  } else {
    setCookie(cookieName1, "Created by the page!",15);
    console.log(cookieName1 + " Created by the page!");
	}  