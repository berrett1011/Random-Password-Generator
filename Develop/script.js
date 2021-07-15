

var btn = document.getElementById("btn");{

  var generatePassword = "";
  var password = document.getElementById("password");
  var characters =
    "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";
  for (var i = 0; i < 12; i++) {
    generatePassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    
  }
  password.innerHTML = generatePassword;

}

 