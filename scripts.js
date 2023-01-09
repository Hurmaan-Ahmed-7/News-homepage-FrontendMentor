var menu_toggle = document.getElementById("menu")
var close_toggle = document.getElementById("close")
 menu_toggle.addEventListener("click", () => {
    console.log("hi")
    document.getElementById("menu").style.display = "none";
    document.getElementById("header-content").style.display = "flex"
    document.getElementById("close").style.display = "block"
    document.getElementById("close").style.zIndex = 1
 })