const socialIcons = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.5" cy="6.5" r="1"></circle>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.7.3-1 1-1Z"></path>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 3c.4 2.6 1.8 4.1 4 4.5v3.1c-1.4 0-2.8-.4-4-1.2v6.8a5.7 5.7 0 1 1-5-5.7v3.2a2.6 2.6 0 1 0 1.9 2.5V3h3.1Z"></path>
    </svg>
  `
};

const footerMarkup = `
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="index.html">
          <i class="brand-mark"></i>
          <span>Precision Peptide<br>Wellness</span>
        </a>
        <p>Thoughtful wellness products and lifestyle support for your goals.</p>
        <div class="socials">
          <a href="#" aria-label="Instagram placeholder">${socialIcons.instagram}</a>
          <a href="#" aria-label="Facebook placeholder">${socialIcons.facebook}</a>
          <a href="#" aria-label="TikTok placeholder">${socialIcons.tiktok}</a>
        </div>
      </div>
      <div>
        <p class="footer-title">Navigate</p>
        <div class="footer-links">
          <a href="products.html">Products</a>
          <a href="about.html">About Us</a>
          <a href="wellness.html">Wellness &amp; Fitness</a>
          <a href="blog.html">Blog</a>
        </div>
      </div>
      <div>
        <p class="footer-title">Categories</p>
        <div class="footer-links">
          <a href="products.html">Peptides</a>
          <a href="products.html">Vitamins &amp; Supplements</a>
          <a href="products.html">Fitness &amp; Nutrition</a>
          <a href="products.html">General Wellness</a>
        </div>
      </div>
      <div>
        <p class="footer-title">Connect</p>
        <div class="footer-links">
          <a href="https://wa.me/14132855423" target="_blank" rel="noopener">WhatsApp us</a>
          <a href="contact.html">Contact</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
          <a href="disclaimer.html">Disclaimer</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Precision Peptide Wellness. All rights reserved.</span>
      <span>Information on this site is for general wellness purposes only.</span>
    </div>
  </div>
`;

document.querySelectorAll(".site-footer").forEach((footer) => {
  footer.innerHTML = footerMarkup;
});
