function addCookieTest4(cookieName) {
  let user = getCookie(cookieName);
  console.log(user);
  if (user != "") {
    alert("Le cookie " + cookieName + " existe!");
  } else {
    setCookie(cookieName, "Created by click",15);
  }  
}