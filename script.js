/**
 * IDUM Website — script.js
 * All client-side behavior for index.html. No build step, no dependencies
 * beyond Lucide (loaded via CDN in index.html <head>).
 *
 * WHAT THIS FILE DOES:
 *   1. Initializes Lucide icons (converts data-lucide attributes to SVGs)
 *   2. Toggles nav bar appearance on scroll (dark <-> white)
 *   3. Manages the 5-tab dynamic contact form (tab switching, field visibility)
 *   4. Handles form submission (client-side only — shows success message)
 *
 * CROSS-FILE REFERENCES:
 *   - Nav: adds/removes .scrolled class on <nav id="nav"> — styled in styles.css
 *   - Form tabs: data-tab attributes in index.html must match tabMeta keys below
 *   - Form fields: #field-location and #field-timeframe are shown/hidden per tab
 *   - Form submit: #form-success is shown for 4 seconds, then form resets
 *   - lucide.createIcons() is called after any innerHTML change that adds
 *     data-lucide attributes (e.g., submit button icon replacement)
 */

// Initialize all Lucide icons on page load
lucide.createIcons();

// ── Nav scroll behavior ─────────────────────────────────────────────────
// Adds .scrolled class to nav when page is scrolled past 100px.
// This triggers the dark-to-white nav transition defined in styles.css.
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── Contact form tab configuration ──────────────────────────────────────
// Each key corresponds to a data-tab attribute on .contact-tab buttons in index.html.
// Properties control what the form displays when that tab is active:
//   title    — text for #form-dynamic-title
//   subtitle — text for #form-dynamic-subtitle
//   btn      — submit button label (arrow icon appended automatically)
//   loc      — whether to show the #field-location input
//   time     — whether to show the #field-timeframe select
var tabMeta = {
  consulting:   { title: 'Expert Consultation Request',    subtitle: 'For government, military, or industry consultation on underwater munitions.',       btn: 'Submit Consultation Request', loc: true,  time: true  },
  speaking:     { title: 'Speaking Engagement Inquiry',    subtitle: 'Book Terrance for international keynotes, panels, or conference presentations.',     btn: 'Submit Speaking Inquiry',     loc: false, time: true  },
  media:        { title: 'Media Collaboration Inquiry',    subtitle: 'For documentary, journalism, or broadcast collaboration requests.',                   btn: 'Submit Media Inquiry',        loc: false, time: false },
  data:         { title: 'Data Access Request',            subtitle: 'Request access to the world\'s most comprehensive underwater munitions database.',    btn: 'Submit Data Request',         loc: true,  time: true  },
  partnerships: { title: 'Partnership Inquiry',            subtitle: 'For organizations seeking to collaborate with IDUM on ocean munitions initiatives.',  btn: 'Submit Partnership Inquiry',  loc: false, time: false }
};

/**
 * switchTab — Updates the contact form to match the selected tab.
 * Called via onclick on .contact-tab buttons in index.html.
 * @param {HTMLElement} el - The clicked tab button element
 * @param {string} tab - Key from tabMeta (e.g., 'consulting', 'speaking')
 */
function switchTab(el, tab) {
  document.querySelectorAll('.contact-tab').forEach(function(t) { t.classList.remove('active'); });
  el.classList.add('active');
  var m = tabMeta[tab];
  document.getElementById('form-dynamic-title').textContent = m.title;
  document.getElementById('form-dynamic-subtitle').textContent = m.subtitle;
  document.getElementById('form-submit-btn').innerHTML = m.btn + ' <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>';
  document.getElementById('field-location').style.display = m.loc ? '' : 'none';
  document.getElementById('field-timeframe').style.display = m.time ? '' : 'none';
  // Re-initialize icons because the submit button innerHTML was replaced
  lucide.createIcons();
}

/**
 * scrollToContact — Smooth-scrolls to the contact form section.
 * Used by CTA buttons throughout the page.
 */
function scrollToContact() {
  document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
}

/**
 * openContact — Scrolls to the contact form and activates a specific tab.
 * Used by service card buttons (e.g., "Book as Speaker" -> openContact('speaking')).
 * The 400ms delay allows the scroll animation to complete before switching tabs.
 * @param {string} tab - Key from tabMeta to activate
 */
function openContact(tab) {
  document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
  setTimeout(function() {
    var btn = document.querySelector('.contact-tab[data-tab="' + tab + '"]');
    if (btn) switchTab(btn, tab);
  }, 400);
}

/**
 * handleSubmit — Client-side form submission handler.
 * Currently shows a success message for 4 seconds, then resets the form.
 * No backend integration yet — form data is not sent anywhere.
 * Called via onsubmit on #contact-form in index.html.
 */
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-title-wrap').style.display = 'none';
  var s = document.getElementById('form-success');
  s.style.display = 'block';
  lucide.createIcons();
  // Auto-reset after 4 seconds: restore form, hide success message
  setTimeout(function() {
    document.getElementById('contact-form').reset();
    document.getElementById('contact-form').style.display = '';
    document.getElementById('form-title-wrap').style.display = '';
    s.style.display = 'none';
  }, 4000);
}
