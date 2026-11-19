// ─── Inline SVG icons (replaces Font Awesome CDN) ─────────────────────────────
const iconFacebook = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="vertical-align:-2px;margin-right:0.3em"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>`;
const iconInstagram = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="vertical-align:-2px;margin-right:0.3em"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`;

// ─── Shared nav ───────────────────────────────────────────────────────────────
const navHTML = `
<nav class="site-nav">
  <div class="nav">
    <a href="index.html"><img src="images/logo.png" alt="Wood Classics" class="logo" width="368" height="210" /></a>
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <div class="nav-links">
      <a href="index.html" class="nav-link">Home</a>
      <a href="portfolio.html" class="nav-link">Portfolio</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="blog.html" class="nav-link">Blog</a>
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
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>
        <a href="https://www.facebook.com/profile.php?id=61595021345894" target="_blank" rel="noopener">${iconFacebook} Facebook</a>
        <a href="https://www.instagram.com/woodclassics.utah/" target="_blank" rel="noopener">${iconInstagram} Instagram</a>
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
document.body.insertAdjacentHTML('afterbegin', navHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

// ─── Mobile nav toggle ─────────────────────────────────────────────────────────
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('open');
});
