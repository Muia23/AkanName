//Input function
var day, month, years, century, year, d;
function getInput() {
  day = document.getElementById("day").value;
  month =  document.getElementById("month").value;
  years =  document.getElementById("year").value;
  century = parseInt(years.slice(0, 2));
  year = parseInt(years.slice(2, 5));
  console.log("Input functioning");

  if(day == ""){
    alert("Input the correct date");
    return false;
  } else if(month == ""){
    alert("Input the correct month");
    return false;
  }else if(years == ""){
    alert("Input correct year");
    return false;
  }
}
//Day calculation
function calculateDay() {
    getInput();
    d = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
    return (Math.floor(d));
    if (d < 0) {
      d = d* -1;
    }
    else if (d > 0){
      return d;
    }
}
//arrays
const akanMale = ['Kwasi', 'Kwando', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
const akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log("Arrays are in place");
//Main-function
function checkDay() {
  akanDay= calculateDay();
    checkgender();
    //console.log("checkDay is functioning");
}
//Gender function
function checkgender(){
  const gender = document.getElementsByName("gender");
  if(gender[0].checked == true){
     var akangender = "M";
  } else if (gender[1].checked == true){
    var akangender = "F";
  } else {
    console.log("Entered")
  }
    switch(akangender){
          case akangender = "M" :
              switch(akanDay){
                    case (0 || -0):
                      document.getElementById("output").innerHTML = "Born on a Sunday." + " Your akan name is " + akanMale[0];
                    break;
                    case (1 || -1):
                      document.getElementById("output").innerHTML = "Born on a Monday." + " Your akan name is " + akanMale[1];
                    break;
                    case (2 || -2):
                      document.getElementById("output").innerHTML = "Born on a Tuesday." + " Your akan name is " + akanMale[2];
                    break;
                    case (3 || -3):
                      document.getElementById("output").innerHTML = "Born on a Wednesday." + " Your akan name is "+ akanMale[3];
                    break;
                    case (4 || -4):
                      document.getElementById("output").innerHTML = "Born on a Thursday." + " Your akan name is " + akanMale[4];
                    break;
                    case (5 || -5):
                      document.getElementById("output").innerHTML = "Born on a Friday." + " Your akan name is " + akanMale[5];
                    break;
                    case (6 || -6):
                      document.getElementById("output").innerHTML = "Born on a Saturday." + " Your akan name is " + akanMale[6];
                    break;
                    default:
                    console.console.log("Male");
                  }
            break;
            case akangender = "F":
                    switch(akanDay){
                      case 0 || -0:
                        document.getElementById("output").innerHTML = "Born on a Sunday." + "Your akan name is " + akanFemale[0];
                      break;
                      case 1 || -1:
                        document.getElementById("output").innerHTML = "Born on a Monday." + "Your akan name is " + akanFemale[1];
                      break;
                      case 2 || -2:
                        document.getElementById("output").innerHTML = "Born on a Tuesday." + "Your akan name is " + akanFemale[2];
                      break;
                      case 3 || -3:
                        document.getElementById("output").innerHTML = "Born on a Wednesday." + "Your akan name is " + akanFemale[3];
                      break;
                      case 4 || -4:
                        document.getElementById("output").innerHTML = "Born on a Thursday." + "Your akan name is " + akanFemale[4];
                      break;
                      case 5 || -5:
                        document.getElementById("output").innerHTML = "Born on a Friday." + "Your akan name is " + akanFemale[5];
                      break;
                      case 6 || -6:
                        document.getElementById("output").innerHTML = "Born on a Saturday."  + "Your akan name is " + akanFemale[6];
                      break;

                  }
            break
            default:
            console.log("Female");
  }
}
