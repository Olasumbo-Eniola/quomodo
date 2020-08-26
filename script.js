function Toggle() { 
    var temp = document.getElementById("pswd"); 
    if (temp.type === "password") { 
        temp.type = "text"; 
    } 
    else { 
        temp.type = "password"; 
    } 
} 