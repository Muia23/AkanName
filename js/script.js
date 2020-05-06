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
