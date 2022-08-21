function checkCookie() {
  let user = getCookie("DESJ_PREF");
  console.log(user);
  if (user != "") {
     alert("Welcome again " + user);
  } else {
    //if (user != "" && user != null) {
      setCookie("DESJ_PREF", "Langue:fr, Province:QC",15);
    //}  
  }  

  let npv = getCookie("nbrOfVisitsPage1");
  if ( npv !="" ){    
    npv++;
    setCookie("nbrOfVisitsPage1", npv,365);
  }
}      