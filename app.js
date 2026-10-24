const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const nav = $("#mainNav");
const menuToggle = $("#menuToggle");
const languageToggle = $("#languageToggle");
const portalDialog = $("#portalDialog");
const toast = $("#toast");
let currentLanguage = "en";
let toastTimer;

$("#year").textContent = new Date().getFullYear();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

$$('#mainNav a').forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  $$("[data-en][data-hi]").forEach(el => {
    const value = el.dataset[language];
    if (value !== undefined) el.innerHTML = value;
  });
  languageToggle.textContent = language === "en" ? "हिन्दी" : "English";
  $("#portalOpen").textContent = language === "en" ? "Parent portal" : "अभिभावक पोर्टल";
  showToast(language === "en" ? "Language changed to English." : "भाषा हिन्दी में बदल दी गई है।");
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "hi" : "en"));

function openPortal() {
  if (typeof portalDialog.showModal === "function") portalDialog.showModal();
  else showToast("Please use a modern browser to open the parent portal.");
}
$("#portalOpen").addEventListener("click", openPortal);
$("#portalOpenFooter").addEventListener("click", openPortal);
$("#portalClose").addEventListener("click", () => portalDialog.close());
portalDialog.addEventListener("click", (event) => {
  if (event.target === portalDialog) portalDialog.close();
});

$("#enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const parent = String(form.get("parent") || "").trim();
  const mobile = String(form.get("mobile") || "").trim();
  const studentClass = String(form.get("class") || "").trim();
  const subject = encodeURIComponent("Admission enquiry — Blue Bells Public School");
  const body = encodeURIComponent(
    `Admission enquiry\nParent/Guardian: ${parent}\nMobile: ${mobile}\nClass of interest: ${studentClass}\n\nPlease contact me about the admission process.`
  );
  // Replace the placeholder with the school's verified official email before publishing.
  const schoolEmail = "REPLACE-WITH-OFFICIAL-SCHOOL-EMAIL";
  if (schoolEmail.startsWith("REPLACE-")) {
    showToast(currentLanguage === "en"
      ? "Demo only: ask the school for its official email, then update app.js."
      : "यह डेमो है: स्कूल का आधिकारिक ईमेल लेकर app.js में अपडेट करें।");
    return;
  }
  window.location.href = `mailto:${schoolEmail}?subject=${subject}&body=${body}`;
});

$("#portalForm").addEventListener("submit", (event) => {
  event.preventDefault();
  // No OTP is sent in this front-end prototype. Real authentication must use a backend/provider.
  $("#portalMessage").textContent = currentLanguage === "en"
    ? "Demo only: OTP delivery and parent verification are not connected yet. No account was created."
    : "यह डेमो है: OTP और अभिभावक सत्यापन अभी जुड़े नहीं हैं। कोई खाता नहीं बनाया गया।";
  showToast(currentLanguage === "en"
    ? "Demo mode — real OTP login is not enabled."
    : "डेमो मोड — असली OTP लॉगिन चालू नहीं है।");
});
