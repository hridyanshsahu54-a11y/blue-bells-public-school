# Blue Bells Public School — Website Starter

This is a responsive bilingual (English/Hindi) public-facing website prototype using the supplied school logo.

## Files
- `index.html` — website sections and forms
- `style.css` — responsive blue/white design with gold accents
- `app.js` — mobile navigation, language toggle, demo enquiry and portal interactions
- `assets/school-logo.png` — supplied logo

## Run it locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Install the **Live Server** extension (or use any local static server).
4. Right-click `index.html` → **Open with Live Server**.
5. Test the mobile menu, Hindi toggle, enquiry form and Parent Portal demo.

## Before publishing
1. Replace the placeholder address, phone, email, office hours, and any school-specific copy in `index.html`.
2. In `app.js`, replace `REPLACE-WITH-OFFICIAL-SCHOOL-EMAIL` with the school's authorised email.
3. Verify that the school has approved use of its logo, name, photographs and all published information.
4. Replace the sample stock photo with a school-approved photo if desired.

## Important security limitation
This is **only the public website/front-end prototype**, not the complete School Management System. The Parent Portal is deliberately a demo: it does not send OTPs, create accounts, store student records, calculate real fees, send WhatsApp messages, or process payments. Do not put real student or payment data into this static website.

The production system needs a secure backend/database, staff authentication and permissions, server-side fee ledger, parent-child verification, audit logs, encrypted backups, OTP and official WhatsApp providers, and payment-gateway server-side verification. GitHub Pages alone cannot safely run those backend functions. Use masked/test data until school authorisation and security controls are ready.
