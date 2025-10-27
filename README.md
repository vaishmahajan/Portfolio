

# 🚀 Vaishnavi Mahajan - Full Stack Java Developer Portfolio

A dynamic, fully responsive personal portfolio designed to showcase **Full Stack Java development** expertise, core projects, and technical skills. It features a modern, dark-themed UI with complex **CSS animations** (like a 3D skill carousel and project flip cards) and utilizes **Netlify Forms** for **serverless contact inquiry submission**, eliminating the need for a separate backend or PHP.

-----

## ☁️ Deployed Application

The portfolio is live and actively hosted on the Netlify platform:

{Active Site Link: [ https://vaishnavimahajan.netlify.app/ ]( https://vaishnavimahajan.netlify.app/ ) }

-----

## ✨ Project Features & Stack

| Category | Feature | Description |
| :--- | :--- | :--- |
| **Primary Stack** | **Java, Spring Boot, MySQL** | The core professional skills this portfolio is designed to advertise, showcased in projects like **Inkspire**. |
| **Frontend Stack** | HTML5, CSS3, JavaScript, Bootstrap 5 | The technologies used to build this modern, responsive UI, including custom animations defined in `style.css`. |
| **Dynamic UI/UX** | Custom Animations | Includes a **3D Rotating Skill Carousel** and **3D Project Flip Cards** for an engaging user experience. |
| **Serverless Form** | **Netlify Form Submission** | Contact inquiry submission handled via AJAX (`fetch` API) in `script.js`, requiring **no backend code (PHP/Node)**. |
| **Visuals** | Background Video & Dark Theme | Features a looping background video (`Bg.mp4`) and a custom dark aesthetic. |

-----

## ☁️ Detailed Deployment Steps (Netlify)

This is a static site (HTML, CSS, JS) optimized for quick deployment via Netlify, which is essential for the contact form functionality.

### 1\. Initial Setup

1.  **Push to GitHub:** Ensure all files (`index.html`, `script.js`, `style.css`, `Bg.mp4`, `Vaishnavi.jpeg`) are pushed to this repository.
2.  **Connect to Netlify:** Log in to your Netlify account and click **"Add new site"** $\rightarrow$ **"Import an existing project"**.
3.  Select **"Deploy with GitHub"** and choose this `portfolio` repository.

### 2\. Build Settings

  * **Build Command:** Leave **blank** (No compilation needed for static HTML).
  * **Publish Directory:** Leave **blank** (Netlify defaults to the repository root `/`).
  * Click **"Deploy site"**. Netlify will automatically publish the site.

### 3\. Contact Form Activation

The form relies on Netlify to detect its HTML attributes (`data-netlify="true"`):

1.  After the site deploys, go to the **Forms** tab in your Netlify dashboard.
2.  Verify that a form named **`contact`** has been detected.
3.  **Enable Email Notifications:** Manually configure an email notification under the form's settings so you are alerted immediately when a user hits "Submit Inquiry" via the JavaScript logic in `script.js`.

-----

## 💻 GitHub Usage (Push/Pull)

To manage and update this portfolio on your local machine and synchronize with this repository:

### How to Clone (Fetch initial copy)

Use this command once to download the project:

```bash
git clone https://github.com/vaishmahajan/portfolio.git
cd portfolio
```

### How to Update Locally (Pull)

If you made changes on another machine or directly on GitHub, fetch the latest version:

```bash
git pull origin main 
# (or 'git pull origin master' depending on your default branch name)
```

### How to Save Changes (Push)

After making edits to your local files (e.g., updating `index.html` or `style.css`):

1.  **Stage changes:** Tell Git which files to include in the commit.
    ```bash
    git add .
    ```
2.  **Commit changes:** Record the changes with a descriptive message.
    ```bash
    git commit -m "Update profile summary and fix CSS for mobile view"
    ```
3.  **Push to GitHub:** Upload the committed changes to this repository.
    ```bash
    git push origin main
    # (or 'git push origin master')
    ```

-----
🤝 Contact
Feel free to connect with me for Full Stack Java Developer opportunities or collaboration inquiries.

LinkedIn: https://www.linkedin.com/in/vaishnavi-mahajan-67242b220/

GitHub: https://github.com/vaishmahajan

Email: vaishnavimahajan642003@gmail.com

## 🔒 Copyright and Usage Policy

**© 2025 Vaishnavi Mahajan.** All rights reserved.

This portfolio code, including all custom CSS for the 3D animations (carousel, flip cards) and the specific serverless form implementation in `script.js`, is the intellectual property of Vaishnavi Mahajan.

  * **Copyright:** The entire design and code are protected by copyright.
  * **Use for Inspiration ONLY:** You are welcome to **fork** this repository for learning and **inspiration** purposes (e.g., to understand the structure, the AJAX form logic, or the pure CSS animations).
  * **Do NOT Copy Directly:** This code must **not** be cloned, forked, or deployed as your own personal portfolio without significant structural and visual modifications. Please build your own unique design and content based on the techniques learned here.

