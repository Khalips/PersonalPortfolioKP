function scrollAndActivate(sectionId, clickedButton) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        // Remove 'active' class from all buttons
        document.querySelectorAll('.nav').forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        clickedButton.classList.add('active');
    } else {
        console.error("Section not found: " + sectionId);
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault(); // Stop form from refreshing the page

    // Get the form fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let button = document.getElementById("submitButton");

    // Check if all fields are filled
    if (name && email && message) {
        button.innerText = "Submitted"; // Change button text
    }
};
