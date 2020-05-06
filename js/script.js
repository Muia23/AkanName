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
