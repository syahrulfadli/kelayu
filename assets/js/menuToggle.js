var showMenu = document.getElementById("showMenu");

function menuToggle(){
    if (showMenu.style.display === "block" ){
        showMenu.style.display = "none";
    }
    else{
        showMenu.style.display = "block";
    }
}