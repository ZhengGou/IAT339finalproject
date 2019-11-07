//Menu button onClick() action

function toggleNav() {
    var element = document.getElementById("side_nav");
    if (element.style.opacity == "0") {
        document.getElementById("side_nav").style.width = "300px";
        document.getElementById("side_nav").style.right = "0";
        document.getElementById("side_nav").style.opacity = "1";
    } else {
       document.getElementById("side_nav").style.width = "300px";
       document.getElementById("side_nav").style.right = "-300px";
       document.getElementById("side_nav").style.opacity = "0";
    }
}