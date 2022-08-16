function setCookie(cname, cvalue, exdays) {
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
  let user = getCookie("DESJ_PREF");
  if (user != "") {
     alert("Welcome again " + user);
  } else {
    if (user != "" && user != null) {
      setCookie("DESJ_PREF", "Langue:fr, Province:QC",15);
    }  
  }  

  let npv = getCookie("nbrOfVisitsPage1");
  if ( npv !="" ){    
    npv++;
    setCookie("nbrOfVisitsPage1", npv,365);
  }
}      
