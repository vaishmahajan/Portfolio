# Vaishnavi Mahajan | Full Stack Java Developer Portfolio  

My official Full Stack Java Developer portfolio, showcasing expertise in Java, Spring Boot, microservices, and modern front-end technologies (HTML5, CSS3, JavaScript, and Bootstrap). This static site uses AJAX/Fetch with Netlify Forms for reliable, non-redirecting contact submissions.

***

## Live Project
Go and check out my portfolio: https://vaishnavimahajan.netlify.app/

## Overview

This site showcases **my** professional experience, core project highlights, and a robust technical skillset, primarily focused on the Java ecosystem (Spring Boot) and modern web technologies.

The portfolio is designed for high performance and is deployed as a static site using Netlify.

***

## 🛠️ Technical Stack

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6+), Bootstrap 5 (for responsive design).
* **Key Libraries/Tools:** Font Awesome (icons).
* **Deployment:** Netlify (for hosting and serverless forms).
* **Core Skills Showcase (via content):** Java, Spring Boot, Microservices, REST APIs, Databases (e.g., MySQL, MongoDB).

***

## ✨ Core Features

* **Responsive Design:** Fully optimized for desktop, tablet, and mobile views.
* **Interactive Navigation:** Smooth scrolling between sections using anchor links.
* **Dynamic Project Slider:** A CSS/JavaScript-controlled horizontal slider with simulated infinite loop functionality to showcase projects effectively.
* **Serverless Contact Form (AJAX):** A highly efficient contact mechanism that captures inquiries directly into the Netlify dashboard without requiring a backend server (like the previous `send_email.php`).

***

## 📧 How the Contact Form Works (Serverless AJAX)

The contact form is configured to provide a clean, modern user experience by displaying a success message **in-place** instead of forcing a page redirect. This ensures a seamless user experience.

1.  **Form Markup (`index.html`):**
    * The `<form>` element includes the `data-netlify="true"` attribute and a required hidden input (`form-name`). This combination tells Netlify's build system to activate its serverless form handling feature for this specific form.
2.  **AJAX Submission (`script.js`):**
    * The JavaScript code attaches an event listener to the form's submission event.
    * It uses **`e.preventDefault()`** to stop the standard browser redirect behavior.
    * It then uses the native **`fetch`** API to **POST** the form data to the current URL (`/`), formatted specifically for Netlify (URL-encoded), which Netlify's backend intercepts.
3.  **Netlify Handling:**
    * Netlify intercepts this POST request from the live site.
    * It parses the data and immediately saves it to the **Forms** section of **my** Netlify dashboard.
    * It sends **me** an email notification of the new submission.
4.  **In-Place Success Message:**
    * If the `fetch` request is successful (`response.ok`), the JavaScript dynamically updates the `<div id="form-message">` element to show the green **"Enquiry Sent!"** message, giving the user immediate confirmation without leaving the page.

***

## 🚀 Deployment Instructions (Netlify)

This project is ideally hosted on Netlify due to its native support for static hosting and serverless form handling.

1.  **Preparation:**
    * Ensure all your project files (`index.html`, `style.css`, `script.js`, etc.) are committed and pushed to **my** GitHub repository's main branch (`main` or `master`).
2.  **Netlify Setup:**
    * Log in to [Netlify account](https://app.netlify.com/) (using GitHub login is the easiest method).
    * Click **"Add new site"** → **"Import an existing project"**.
    * Select **"GitHub"** and authorize Netlify if prompted.
    * Choose **my** portfolio repository from the list.
3.  **Deployment Settings:**
    * **Branch to deploy:** `main` (or whichever branch holds stable code).
    * **Build command:** **Leave blank** (This is a static site; no build process is needed).
    * **Publish directory:** **Leave blank** (Netlify correctly points to the root directory).
    * Click **"Deploy site"**. Netlify will build and publish site instantly, giving a live URL.

### ⚠️ Post-Deployment Steps

After the site is live:

1.  **Form Confirmation:** Go to the site's URL and submit a test message through the contact form.
2.  **Verify Submission:** Check Netlify dashboard for the deployed site. Navigate to the **"Forms"** tab to ensure the test submission was successfully captured. This confirms that the form is fully operational.
