
function addUser() {

  user_name = document.getElementById("user_name").value;
  if (user_name !="jsurya") {
    document.getElementById("label1").innerHTML="Incorrect username";
}
   else {
    localStorage.setItem("user_name", user_name);
  
window.location = "indexB.html";
  }
}
