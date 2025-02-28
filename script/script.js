// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        // Validate inputs
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_rfevdwt", "template_ql044sp", {
            user_name: name,
            user_email: email,
            subject: subject,
            message: message
        }).then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Clear form after sending
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.error("Error:", error);
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("about");

    function checkScroll() {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
});



