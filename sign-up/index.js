var pwd = document.getElementById('pwd');
var cpwd =document.getElementById('cpwd');



function validate(){


if(pwd.value != cpwd.value){
	//e.preventDefault();
	cpwd.setCustomValidity('pwd dont match');
	
}

else{
	cpwd.setCustomValidity('');
}

}

pwd.onchange = validate();
cpwd.onkeyup =validate(); 
