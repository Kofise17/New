var passwordVal = document.getElementById('password').value;
var classListPLength = document.getElementById(psswdLength).classList;
var classListPBreach = document.getElementById(psswdBreach).classList;

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

function controlPassword(){
  var result = false;
  if(controlLengthIsOK() && !controlPsswdIsBreached()){
    result = true;
  }
  return result;
}

function controlLengthIsOK(){
  var result = false;
  changeClassLBad()
  if(passwordVal.length >= 8){
    changeClassLGood();
    result = true;
  }
  return result;
}

function controlPsswdIsBreached(){
  var result = false;
  $.get('HIBP.txt', {cache:false}, function(data) 
  {
    if (data.indexOf(passwordVal)>-1) {
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