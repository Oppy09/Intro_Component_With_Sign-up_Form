document.querySelector("input#email").addEventListener("click", function() {
    document.querySelector("input#email").setAttribute("placeholder", "email@example/com");
    document.querySelector("form div.email").classList.remove("hide");
});
document.querySelector("input#firstname").addEventListener("click", function() {
    document.querySelector("input#firstname").setAttribute("placeholder", "");
    document.querySelector("form div").classList.remove("hide");
});
document.querySelector("input#lastname").addEventListener("click", function() {
    document.querySelector("input#lastname").setAttribute("placeholder", "");
    document.querySelector("form div.lastname").classList.remove("hide");
});
document.querySelector("input#password").addEventListener("click", function() {
    document.querySelector("input#password").setAttribute("placeholder", "");
    document.querySelector("form div.password").classList.remove("hide");
});












// const input = document.querySelectorAll("input");
// for (i = 0; i <= input.length; i++) {
//     document.querySelectorAll("input")[i].addEventListener("click", function() {
//         document.querySelector("input").setAttribute("placeholder", "");
//         document.querySelector("form div").classList.toggle("hide");
//     });
// };
