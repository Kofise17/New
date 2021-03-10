var password = document.getElementById("password");
var classListPLength = document.getElementById("psswdLength").classList;
var classListPBreach = document.getElementById("psswdBreach").classList;

// onClick "login"
function Login(){
  var result = false;
  if(controlPassword()){
    window.alert("Works.");
    result = true;
  }
  else{
    window.alert("Doesn't work.");
  }
  return result;
}
  
// onClick "register"
function SignUp(){
  var result = false;
  if(controlPassword()){
    window.alert("Works.");
    result = true;
  }
  else{
    window.alert("Doesn't work.");
  }
  return result;
}

// control validity of password
function controlPassword(){
  var result = false;
  if(controlLengthIsOK()){
  //if(controlLengthIsOK() && !controlPsswdIsBreached()){
    result = true;
  }
  return result;
}

// control if password length is least 8
function controlLengthIsOK(){
  var result = false;
  console.log("controlLengthIsOK reached");
  changeClassLBad()
  if(password.value.length >= 8){
    console.log("inner if reached");
    changeClassLGood();
    result = true;
  }
  return result;
}

// control if password is breached
function controlPsswdIsBreached(){
  var result = false;
  changeClassBGood();
  $.get('HIBP.txt', {cache:false}, function(data) 
  {
    if (data.indexOf(passwordVal)>-1) {
      changeClassBBad();
      window.alert("Password has been breached");
      document.getElementById("psswdBreach").value = "Your password may not be contained in the list of breached passwords";
      result = true;
    }
    else {
      window.alert("Password is safe");
    } 
    //setTimeout(getTextfile, 1000);
  }); 
  return result;
}

// change colours of password rules
function changeClassLGood(){
  classListPLength.remove("badPsswd");
  classListPLength.add("goodPsswd");
}
function changeClassLBad(){
  classListPLength.remove("goodPsswd");
  classListPLength.add("badPsswd");
}
function changeClassBGood(){
  classListPBreach.remove("badPsswd");
  classListPBreach.add("goodPsswd");
}
function changeClassBBad(){
  classListPBreach.remove("goodPsswd");
  classListPBreach.add("badPsswd");
}


// Erase Button
function EraseBase(){    
  document.getElementById('username').value = "";
  passwordVal = "";
}

function Erase(){
  EraseBase();
  document.getElementById('name').value = "";
  document.getElementById('firstname').value = "";
  document.getElementById('addressline').value = "";
  document.getElementById('domicile').value = "";
  document.getElementById("Saved").innerHTML = "";
  if(document.getElementById('name') != null){
    document.getElementById('name').focus();
  }
  else{
    document.getElementById('username').focus();
  }
}