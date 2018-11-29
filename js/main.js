function myFunction() {
    var x = document.getElementById("header__menu");
    if (x.className === "header__menu") {
        x.className += " responsive";
    } else {
        x.className = "header__menu";
    }
}