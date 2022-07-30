function age(){
    let day1 = document.getElementById("date").value;
    let month1 = document.getElementById("month").value;
    let year1 = document.getElementById("year").value;
    let date = new Date();
    let day2 = date.getDate();
    let month2 = 1 + date.getMonth();
    let year2 = date.getFullYear();
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(day1 > day2){
        day2 = day2 + month(month2 - 1);
        month2 = month2 - 1;
    }
    if(month1 > month2){
        month2 = month2 + 12;
        year2 = year2 - 1;
    }

    let d = day2 - day1;
    let m = month2 - month1;
    let y = year2 - year1;
    document.getElementById("age").innerHTML = "Your age is " + y + " years " + m + " months " + d + " days";

    if(isNaN(day1) || isNaN(month1) || isNaN(year1) || day1 == "" || month1 == "" || year1 == ""){
        document.getElementById("age").innerHTML = "Error en el ingreso de los datos";
    }
}