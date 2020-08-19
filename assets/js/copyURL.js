var copyLink = document.getElementById("copyLink");
var tooltip = document.getElementById("copyTooltip");

function copyURL(){
    copyLink.select();
    document.execCommand("copy");
    tooltip.innerText = "URL sudah disalin";
}
function resetTooltip(){
    tooltip.innerText = "Salin URL";
}