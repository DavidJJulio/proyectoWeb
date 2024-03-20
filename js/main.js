document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menuIcon");
    var menuContent = document.getElementById("menuContent");

    menuIcon.addEventListener("click", function() {
        if (menuContent.style.display === "block") {
            menuContent.style.display = "none";
        } else if (menuContent.style.display !== "flex") {
            menuContent.style.display = "flex";
        }
    });
});