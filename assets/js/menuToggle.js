var showMenu = document.getElementById("showMenu");

function menuToggle(){
    if (showMenu.style.display === "flex" ){
        showMenu.style.display = "none";
    }
    else{
        showMenu.style.display = "flex";
    }
}