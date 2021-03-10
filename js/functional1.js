function Login(){
    document.getElementById("Saved").innerText = "Your credentials have been saved.";
  }
  
  function Register(){
    document.getElementById("Saved").innerText = "Your credentials have been saved.";
  }
  
  function EraseBase(){    
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
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