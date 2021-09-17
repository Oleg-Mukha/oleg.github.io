function passwordi(){
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  if(login == password){
    alert("Помилка!");
    document.body.style.backgroundColor = "#ffabba";
    document.getElementById("image").src="img/wrongcat.gif";
    document.getElementById("caption").innerHTML="Помилка: Логін повинен відрізнятися від пароля";
  }
  else{
    alert("Все добре, продовжіть реєстрацію!");
    document.body.style.backgroundColor = "#9dfad3";
    document.getElementById("image").src="img/rightcat.gif";
    document.getElementById("caption").innerHTML="Продовжіть реєстрацію";
  }
}
