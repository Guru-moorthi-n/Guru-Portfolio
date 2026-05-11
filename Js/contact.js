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


// Send Email Message Logic

emailjs.init("LobKhyb6lygZWxPr6");

    document.getElementById("contact-form")
        .addEventListener("submit", function(event) {

        event.preventDefault();

        emailjs.send("service_5s89z3h", "template_1nu11xc", {
            name: document.getElementById("Name").value,
            email: document.getElementById("Email").value,
            message: document.getElementById("Message").value
        })
        .then(function() {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            alert("Failed to send message");
            console.log(error);
        });
    });