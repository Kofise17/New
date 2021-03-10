  var password = document.getElementById("password");
if(document.getElementById("psswdLength").classList !== undefined){
  var classListPLength = document.getElementById("psswdLength").classList;
  var classListPBreach = document.getElementById("psswdBreach").classList;
}


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
  if(passwordIsOK()){
    window.alert("Works.");
    result = true;
  }
  else{
    window.alert("Doesn't work.");
  }
  return result;
}

// control validity of password
function passwordIsOK(){
  var result = false;
  //if(controlLengthIsOK()){
  if(lengthIsOK()){
    console.log("Length is okay (" + password.value.length + ")");
    if(!psswdIsBreached()){
      console.log("Password has not been breached (" + password.value + ")")
      result = true;
    }
  }
  return result;
}

// control if password length is least 8
function lengthIsOK(){
  var result = false;
  changeClassLBad()
  if(password.value.length >= 8){
    changeClassLGood();
    result = true;
  }
  return result;
}

// control if password is breached
function psswdIsBreached(){
  var result = false;
  $.get('src/HIBP.txt', {cache:false}, function(data)
  {
    if (data.indexOf(password.value)>-1) {
      console.log("Password has been breached");
      document.getElementById("psswdBreach").innerHTML = "Your password may not be contained in the list of breached passwords";
      result = true;
    }
    else {
      window.alert("Password is safe");
    }
    return result;
    //setTimeout(getTextfile, 1000);
  });
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