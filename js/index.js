var DD =parseInt(prompt("Enter your day of birth:"));
var MM =parseInt(prompt("Enter your month of birth"));
var year =prompt("Enter you year of birth");
var gender = prompt("M or F");
var CC = parseInt(year.slice(0,2));
var YY = parseInt(year.slice(2,5));
var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
var akanday= d.toFixed();
alert(akanday);
if (gender == "M"){
	if(akanday == 0){
	alert("Kwasi");
	} else if((akanday == 1 ) || (akanday == -1 )) {
	alert("Kwando")
	} else if((akanday == 2 ) || (akanday == -2 )){
	alert("Kwabena")
	} else if((akanday == 3 ) || (akanday == -3 )){
	alert("Kwaku")
	} else if((akanday == 4 ) || (akanday == -4 )){
	alert("Yaw")
	} else if((akanday == 5 ) || (akanday == -5 )){
	alert("Kofi")
	} else if((akanday == 6 ) || (akanday == -6 )){
	alert("Kwame")
	}
} else if (gender == "F"){
	if(akanday == 0){
	alert("Akosua");
	} else if((akanday == 1 ) || (akanday == -1 )) {
	alert("Adwoa")
	} else if((akanday == 2 ) || (akanday == -2 )){
	alert("Abenaa")
	} else if((akanday == 3 ) || (akanday == -3 )){
	alert("Akua")
	} else if((akanday == 4 ) || (akanday == -4 )){
	alert("Yaa")
	} else if((akanday == 5 ) || (akanday == -5 )){
	alert("Afua")
	} else if((akanday == 6 ) || (akanday == -6 )){
	alert("Ama")
	}
}
