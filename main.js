// DOM selector

const toggle = document.querySelector("#toggle-btn");
const icon = document.querySelector("#toggle_icon");
toggle.addEventListener("click",darkmodeToggle);
let darkmode =  localStorage.getItem("darkmode");

// Darkmode check
if(darkmode === "enabled"){
    darkmodeOn();
}

// Darkmode Toggle
function darkmodeToggle(){
    darkmode =  localStorage.getItem("darkmode");
    if(darkmode === "enabled"){
        darkmodeOff();
    }
    else{
        darkmodeOn();
    }
}


// Darkmode on
function darkmodeOn(){
    document.body.classList.add("dark");
    darkmode = true;
    localStorage.setItem("darkmode","enabled");
    icon.className = "bx bx-moon";
}

// Darkmode off
function darkmodeOff(){
    document.body.classList.remove("dark");
    darkmode = false;
    localStorage.setItem("darkmode",null);
    icon.className = "bx bx-sun";
}