const alertMsg = document.getElementById("alert");


/*
* Onload, getCookie is called to check whether there's a prior cookie
*/
window.onload = function () {
    name=getCookie('name');
    username=getCookie('username');
    
    // if returning user, displays message
    if (name != "") {
      document.getElementById('msg').innerHTML = 'Welcome back ' + name + '!';
      document.getElementById('myform').style.display = 'none';
    }
  }

/*
* Below method returns cookie if avaialble
* it does so by checking length of cookie. If it's not -1, then returns cookie substring from start to end
* It canclulates the starting point by using the name to the length of name + 1.
* It calculates end by looking for semicolon, starting at the end of starting point
*/
function getCookie(c_name){
  if (document.cookie.length>0) {
      c_start=document.cookie.indexOf(c_name + "=");
      if (c_start!=-1) { 
        c_start=c_start + c_name.length+1; 
        c_end=document.cookie.indexOf(";",c_start);
      if (c_end==-1) c_end=document.cookie.length;
      return decodeURIComponent(document.cookie.substring(c_start,c_end));
      } 
    }
  return "";
}

/*
* Below method setsCookie by using name and username. It also displays a welcome message
*/
function setCookie(name, username) {
  document.cookie=`name=${name};`
  document.cookie=`username=${username};`
  document.getElementById('msg').innerHTML = 'Welcome, ' + name + '!';
}

// /*
// * When the submit button is clicked, it calls setCookie to set cookies
// */
 document.getElementById("submit").onclick = function () {
  handleSubmit();
}

// /*
// * Below method sets cookies
// */
function handleSubmit() {
  name=document.myform.name.value;
  username=document.myform.username.value;

  alertMsg.textContent = ""
  if(name != "" && name != "") {
    setCookie(name, username)
  } else {
    alertMsg.textContent += "Please enter both user name and name"
    return
  }
  
}


// function handleSubmit() {
//   name=document.myform.name.value;
//   username=document.myform.username.value;

//   setCookie(name, username)
// }
