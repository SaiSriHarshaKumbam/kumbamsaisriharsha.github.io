<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set the recipient email address
    $to = "saisriharsha2k@gmail.com"; // Your email address

    // Set the email subject
    $subject = "Message from Contact Form";

    // Get the form data
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set additional headers
    $headers = "From: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
