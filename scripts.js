var menu_toggle = document.getElementById("menu")
var close_toggle = document.getElementById("close")

 menu_toggle.addEventListener("click", () => {
    
    document.getElementById("menu").style.display = "none";
    document.getElementById("header-content").style.display = "flex"
    document.getElementById("close").style.display = "block"
    document.getElementById("close").style.zIndex = 1
    document.body.style.overflow = "hidden"
    
 })

 close_toggle.addEventListener("click", () => {
    document.getElementById("close").style.display = "none"
    document.getElementById("header-content").style.display = "none"
    document.getElementById("menu").style.display = "block";
    document.body.style.overflow = ""
    
 })