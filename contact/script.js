function sendEmail() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Message from ${firstname} ${lastname}`;
    const body = `Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:contact@kaoli.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}