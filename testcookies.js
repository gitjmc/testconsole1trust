function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {

  let user = getCookie("username");
  if (user != "") {
     alert("Welcome again " + user);
  } else {
    // user = prompt("Please enter your name:","");
    user = "Chamceddine";
    if (user != "" && user != null) {
      setCookie("username", user, 30);            
      setCookie("DESJ_PREF", "Langue:fr, Province:QC",15);
      setCookie("dropDownSliderAccueil", "OFF",20);
      setCookie("identifiant-anonyme", "26654def-04a3-4507-9a1e-54e73bcfa5cb",20);
      setCookie("fb-pixel", "hjy54ed6-04a3-4507-9a1e-54e73bcfa5cb",150);
      setCookie("nbrOfVisitsHomePage", "0",365);
    }  
  }  

  let npv = getCookie("nbrOfVisitsHomePage");
  if ( npv !="" ){    
    npv++;
    setCookie("nbrOfVisitsHomePage", npv,365);
  }

}      
