# EveryCountdown Website

Welcome to my website project that is public at [EveryCountdown.com](https://everycountdown.com/)

This repository contains the code for my a website built using Nuxt 3, Vue.js, and Tailwind CSS. It is done in my free-time challenging myself to make a complete website by building both the frontend and the backend from the bottom up and deploying it to [Railway.app](https://railway.app/)

You can also checkout the [API Service here](https://github.com/ob-vest/EveryCountdown-API_SERVICE/tree/main)

## Project Overview

I wanted to build a website that displays all the events *(Movies, games, elections, tech)* happening in the near future, when it releases and also what is known so far *(e.g trailers, leaks, interviews)*. It shouldn't be restricted to a website, I was thinking of making it future-proof by providing an API endpoint, so it requires less work next time if I in addition to the website also wants to build a mobile application using the same backend.
## Technologies Used

- **Nuxt 3 (Server-Side Rendering):** I chose Nuxt 3 with server-side rendering, which improves SEO and initial load times.

- **Vue.js:** Vue.js is the main JavaScript framework I used for building interactive user interfaces and dynamic components.

- **Tailwind CSS:** For styling, I used Tailwind CSS, it allows be to quickly build a modern responsive design

- **Express.js:** For the API service, that handles all the CRUD operations.

- **PostgreSQL:** The relational database that stores all the events. It is deployed in Railway

## How I Built It

1. **Project Setup:**
   - I initialized the project using the Nuxt 3 and Railway CLI to set up the basic structure and configurations, railway helps me interacting with the deployed code and sensitive code that I don't want to push to the repository, so I do not need a .env file to prevent exposure.

2. **Page Structure:**
   - I created different page components inside the `pages/` directory to represent various sections of the website, such as the categories, event items, FAQ, it follows the natural hierarchy of the website.

3. **Reusable Components:**
   - To maintain consistency, I designed and developed reusable Vue components inside the `components/` directory, such as navigation bar, movie card, and countdown timer.

4. **Styling with Tailwind CSS:**
   - I leveraged Tailwind CSS classes to style the components and pages, allowing me to focus more on functionality and design rather than writing custom CSS in various files.

5. **Server-Side Rendering:**
   - The websites content is rendering server-side, this is mostly because it was quicker and more SEO friendly as i ensure that when the Google crawler bot visits my website it will see the full website, so I do not risk that the SEO text appears later.

6. **SEO:**
   - I have used Googles lighthouse to make sure that my code is performant, accessible and I follow all the best practices. I utilized SEO headers, so it shows the correct title and description of the current page, and as my website can have a lot of content in many places and it keeps growing, I have also added a library for Nuxt that handles the sitemap file when I build the project for deployment.

## Challenges

- **Learning Curve:** I like to use something new when I begin a project and this time the main technology was Nuxt 3 and the SSR capability.

- **API service:** Despite being familiar with RESTful api by third parties I have never myself build an API endpoint before this project, so it required acquiring new knowledge and deciding what technology to use.

- **Components:** Creating complex interactive and reusable components with Vue.js required thoughtful planning and managing component state effectively, see components folder.

- **Deployment:** I have used Github Actions before but it was in a very tedious way as I had to create a YAML file that finds the projects output folder, connect to web-hotel through SSH and then deploy the code by transferring the files. But this time it was way easier I have configured Railway so it will deploy code that is pushed to the main branch, which was a seamless experience.
