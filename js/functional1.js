function Login(){
    document.getElementById("Saved").innerText = "Your credentials have been saved.";
  }
  
  function Register(){
    document.getElementById("Saved").innerText = "Your credentials have been saved.";
  }
  
  function Erase(){
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('name').value = "";
    document.getElementById('firstname').value = "";
    document.getElementById('addressline').value = "";
    document.getElementById('domicile').value = "";
    document.getElementById("Saved").innerHTML = "";
    document.getElementById('name').focus();
    //Comment
  }