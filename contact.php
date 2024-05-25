<?php include 'header.php'; ?>

<section id="contact">
    <h2>Contact</h2>
    <form action="php/contact.php" method="post">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
    </form>
</section>

<?php include 'footer.php'; ?>
