// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
/*
// Configure EmailJS
emailjs.init('saisriharsha2k@gmail.com');

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-btn');

    // Function to check if both email and message fields are filled
    function checkFormValidity() {
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        submitButton.disabled = !(email && message);
    }

    // Event listener for email input
    emailInput.addEventListener('input', checkFormValidity);

    // Event listener for message input
    messageInput.addEventListener('input', checkFormValidity);

    // Event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data via EmailJS
        emailjs.sendForm('service_4dr60qc', 'template_hc5ydhp', this)
            .then(function(response) {
                console.log('Email sent successfully!', response);
                document.getElementById('contact-form').reset(); // Reset the form after successful submission
            }, function(error) {
                console.error('Failed to send email.', error);
            });
    });
});
*/


// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    
    // Save the theme preference to local storage
    const theme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // Update the theme toggle button icon
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.src = `./assets/${theme === "dark" ? "sun" : "moon"}.png`;
}

// Function to load the saved theme preference
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// Call the loadTheme function when the page loads
loadTheme();


// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
/*
// Configure EmailJS
emailjs.init('saisriharsha2k@gmail.com');

// Function to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-btn');

    // Function to check if both email and message fields are filled
    function checkFormValidity() {
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        submitButton.disabled = !(email && message);
    }

    // Event listener for email input
    emailInput.addEventListener('input', checkFormValidity);

    // Event listener for message input
    messageInput.addEventListener('input', checkFormValidity);

    // Event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data via EmailJS
        emailjs.sendForm('service_4dr60qc', 'template_hc5ydhp', this)
            .then(function(response) {
                console.log('Email sent successfully!', response);
                document.getElementById('contact-form').reset(); // Reset the form after successful submission
            }, function(error) {
                console.error('Failed to send email.', error);
            });
    });
});
*/


// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
    
    // Save the theme preference to local storage
    const theme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // Update the theme toggle button icon
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.src = `./assets/${theme === "dark" ? "sun" : "moon"}.png`;
}

// Function to load the saved theme preference
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// Call the loadTheme function when the page loads
loadTheme();

/*
// Function to toggle "Read More" text
function toggleReadMore(expId, event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    event.stopPropagation(); // Stop event propagation to prevent navigation

    var moreText = document.getElementById(expId);
    var btnText = event.target.textContent; // Get the text content of the clicked button
    var isHidden = moreText.classList.contains("hide"); // Check if the additional content is currently hidden

    if (isHidden) {
        moreText.classList.remove("hide"); // Remove the "hide" class to show the additional content
        event.target.textContent = "Read Less"; // Change the button text to "Read Less"
    } else {
        moreText.classList.add("hide"); // Add the "hide" class to hide the additional content
        event.target.textContent = "Read More"; // Change the button text back to "Read More"
    }
}
*/
/*
function toggleReadMore(expId, event) {
    event.preventDefault();
    event.stopPropagation();

    var moreText = document.getElementById(expId);

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        event.target.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        event.target.textContent = "Read More";
    }
}
*/

function toggleReadMore(expId, event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    event.stopPropagation(); // Stop event propagation to prevent navigation

    var moreText = document.getElementById(expId);
    var isHidden = moreText.style.display === "none" || moreText.style.display === ""; // Check if the additional content is currently hidden

    if (isHidden) {
        moreText.style.display = "inline"; // Display the content
        event.target.textContent = "Read Less"; // Change the button text to "Read Less"
        event.target.parentNode.style.marginBottom = "20px"; // Add margin at the bottom to create space for the expanded text
    } else {
        moreText.style.display = "none"; // Hide the content
        event.target.textContent = "Read More"; // Change the button text back to "Read More"
        event.target.parentNode.style.marginBottom = "0"; // Remove the margin when the text is collapsed
    }
}




/*Projects load more */

