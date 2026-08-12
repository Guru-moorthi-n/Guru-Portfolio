const mobileMenuBtn = document.getElementById("MobileMenuBtn");
const mobileNav = document.getElementById("MobileNavMenu");

mobileMenuBtn.addEventListener("click", () => {

    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } 
    
    else {
        mobileNav.style.display = "flex";
    }
});

document.querySelectorAll("#MobileNavMenu div").forEach(item => {

    item.addEventListener("click", () => {
        mobileNav.style.display = "none";
    });

});
