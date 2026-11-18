// ─── Shared nav ───────────────────────────────────────────────────────────────
const navHTML = `
<nav class="site-nav">
  <div class="nav">
    <img src="images/logo.png" alt="Wood Classics" class="logo" />
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <div class="nav-links">
      <a href="index.html" class="nav-link">Home</a>
      <a href="portfolio.html" class="nav-link">Portfolio</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="contact.html" class="nav-link">Contact</a>
    </div>
  </div>
</nav>`;

// ─── Shared footer ─────────────────────────────────────────────────────────────
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-col">
        <p class="footer-heading">Get in Touch</p>
        <p>Andy Larsen, Owner</p>
        <a href="tel:3852361283">(385) 236-1283</a>
        <a href="mailto:andy.woodclassics@gmail.com">andy.woodclassics@gmail.com</a>
        <a href="contact.html">Request a Quote</a>
        <br>
        <p class="muted">&copy; 2026 Wood Classics LLC</p>
        <p class="muted">Made in Utah</p>
      </div>
      <div class="footer-col">
        <p class="footer-heading">Quick Links</p>
        <a href="index.html">Home</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="https://www.facebook.com/profile.php?id=61595021345894" target="_blank" rel="noopener"><i class="fa-brands fa-facebook"></i> Facebook</a>
        <a href="https://www.instagram.com/woodclassics.utah/" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Instagram</a>
      </div>
      <div class="footer-col">
        <p class="footer-heading">Location</p>
        <p>1086 N 450 W, Suite 112<br>Springville, UT 84663</p>
        <div class="footer-map">
          <iframe
            src="https://maps.google.com/maps?q=1086+N+450+W+Suite+112,+Springville,+UT+84663&output=embed&z=15"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="Wood Classics location map"></iframe>
        </div>
      </div>
    </div>
  </div>
</footer>`;

// ─── Inject ────────────────────────────────────────────────────────────────────
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />');
document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

// ─── Mobile nav toggle ─────────────────────────────────────────────────────────
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('open');
});