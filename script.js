function passwordi(){
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;



  if(login == password){
    alert("Помилка!");
    document.body.style.backgroundColor = "#ffbfbf";
    document.getElementById("formLeft").style.backgroundColor = '#a34848';
    document.getElementById("formRight").style.backgroundColor = '#c97575';
    document.getElementById("caption").style.color = '#591111';
    document.getElementById("image").style.border = '3px solid #9e2626';
    document.getElementById("image").style.boxShadow = '0px 0px 100px 10px #de2626';
    document.getElementById("image").src="img/wrongcat.gif";
    document.getElementById("caption").innerHTML="Помилка: логін повинен відрізнятися від пароля";
  }
  else{
    alert("Все добре, продовжіть реєстрацію!");
    document.body.style.backgroundColor = "#b0ffd9";
    document.getElementById("formLeft").style.backgroundColor = '#1a7a4b';
    document.getElementById("formRight").style.backgroundColor = '#79c7a1';
    document.getElementById("caption").style.color = '#153622';
    document.getElementById("image").style.border = '3px solid #038545';
    document.getElementById("image").style.boxShadow = '0px 0px 100px 10px #04c969';
    document.getElementById("image").src="img/rightcat.gif";
    document.getElementById("caption").innerHTML="Все добре! Продовжіть реєстрацію";
  }
}
