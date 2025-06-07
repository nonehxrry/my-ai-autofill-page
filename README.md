# AI Job Autofill Landing Page

![Hero Section Screenshot](images/Screenshot (51).png)

## Table of Contents

-   [Project Overview](#project-overview)
-   [Features](#features)
-   [Live Demo](#live-demo)
-   [Design Inspiration](#design-inspiration)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Local Setup (HTML/CSS/JS)](#local-setup-htmlcssjs)
    -   [Local Setup (React Version - Optional)](#local-setup-react-version---optional)
-   [Project Structure](#project-structure)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

## Project Overview

This project is a modern, responsive landing page for an AI-powered job application autofill tool. The design is inspired by the clean aesthetics and vibrant branding of **RezuWizard**, while the content structure and featured functionalities are derived from **Jobright.ai/job-autofill**.

The page aims to attract potential users by highlighting key benefits, showcasing features like ATS compatibility and AI resume tailoring, featuring user testimonials, explaining the process, and answering common questions.

## Features

-   **Responsive Design:** Optimized for seamless viewing across desktops, tablets, and mobile devices.
-   **Header & Navigation:** Clean, accessible navigation with clear calls to action.
-   **Hero Section:** Engaging headline and call-to-action to capture user attention.
-   **Benefit/Stats Bar:** Highlights key metrics and value propositions.
-   **Core Feature Highlights:** Dedicated sections for:
    -   1-Click Autofill on Major ATSs (Workday, Greenhouse, etc.)
    -   AI-Powered Resume Tailoring
    -   Job Application Match Score
-   **Job Board Section:** Illustrates the breadth of available jobs.
-   **Testimonial Section:** Authentic user reviews to build trust.
-   **How It Works:** Simple, step-by-step guide for using the tool.
-   **Frequently Asked Questions (FAQ):** Interactive accordion for common queries (implemented with vanilla JavaScript).
-   **Footer:** Essential links and social media integration.

## Live Demo

You can view the live demo of this project here:

[**Live Demo Link**](YOUR_LIVE_DEMO_URL_HERE)
*(Replace `YOUR_LIVE_DEMO_URL_HERE` with your actual GitHub Pages or Netlify URL once deployed)*

## Design Inspiration

-   **Visual Aesthetic:** [RezuWizard](https://www.rezuwizard.in/) - Inspired color palette, typography (Poppins font), button styles, clean layouts, and overall modern, professional feel.
-   **Content Structure & Functionality:** [Jobright.ai/job-autofill](https://jobright.ai/job-autofill) - Informed the specific sections (features, job board, how it works, testimonials, FAQ) and the key messaging about job application automation.

## Tech Stack

This project is built using fundamental web technologies:

-   **HTML5:** For the page structure and content.
-   **CSS3:** For styling and responsiveness.
-   **JavaScript (Vanilla JS):** For interactive elements like the FAQ accordion.
-   **(Optional) React.js:** A component-based JavaScript library for building user interfaces. (A conceptual breakdown and setup guide for a React version is provided in the project documentation for those looking to expand.)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   **Web Browser:** Any modern browser (Chrome, Firefox, Edge, Safari).
-   **Code Editor:** [Visual Studio Code (VS Code)](https://code.visualstudio.com/) is highly recommended.
-   **VS Code Extensions (Recommended for VS Code users):**
    -   **Live Server:** For a live preview of your HTML/CSS/JS changes.
    -   **Prettier - Code formatter:** For automatic code formatting.
-   **(For React Version Only):** [Node.js](https://nodejs.org/en/) (LTS version) and npm/Yarn.

### Local Setup (HTML/CSS/JS)

1.  **Clone the Repository (or Download):**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/my-ai-autofill-page.git](https://github.com/YOUR_USERNAME/my-ai-autofill-page.git)
    cd my-ai-autofill-page
    ```
    *(Replace `YOUR_USERNAME` with your GitHub username)*
    Alternatively, you can download the project as a ZIP file and extract it.

2.  **Open in VS Code:**
    -   Open Visual Studio Code.
    -   Go to `File > Open Folder...`
    -   Select the `my-ai-autofill-page` folder.

3.  **Place Images:**
    -   Ensure all required images (illustrations, logos, profile pictures) are downloaded and placed in the `images/` subfolder within your project. The `index.html` references these by name (e.g., `images/autofill-hero-illustration.png`).

4.  **Go Live with Live Server:**
    -   Open `index.html` in your VS Code editor.
    -   Click the "Go Live" button in the bottom-right corner of the VS Code status bar (this uses the Live Server extension).
    -   Your project will open in your default browser at `http://127.0.0.1:5500/index.html` (or similar). Any changes you save will automatically refresh the page.

### Local Setup (React Version - Optional)

If you chose to implement the React version, follow these steps:

1.  **Ensure Node.js and npm are installed.**
2.  **Create React App (or Vite project):**
    ```bash
    npx create-react-app my-autofill-react-app  # Or npm create vite@latest
    cd my-autofill-react-app
    ```
3.  **Copy Files:**
    -   Transfer the CSS styles from `style.css` into component-specific `.css` files (e.g., `src/components/Header/Header.css`).
    -   Convert HTML sections into React components (`.js` or `.jsx` files) in the `src/components` folder, as explained in the project's detailed documentation.
    -   Place your images in `public/images` (CRA) or `src/assets` and reference them appropriately.
4.  **Install Dependencies:**
    ```bash
    npm install
    ```
5.  **Start Development Server:**
    ```bash
    npm start # For Create React App
    # OR
    npm run dev # For Vite
    ```
    Your React app will open in your browser, typically at `http://localhost:3000` or `http://localhost:5173`.

## Project Structure
