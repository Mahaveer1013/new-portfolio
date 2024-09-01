import chatApp from './images/chat-app.png'
import pecEventPage from './images/main-page-event.png'
import portfolio from './images/portfolio.png'
import whatsappClone from './images/whatsapp-clone.png'
import kkl from './images/kkl.png'
import eCommerce from './images/e-commerce.png'
import codesapiens from './images/codesapiens.png'
import altruisty from './images/experience/altruisty.jpg'
import upwork from './images/experience/upwork.png'
import kkl_logo from './images/experience/kkl.jpg'

import { FaArrowUp, FaStar } from 'react-icons/fa';

export const industry_projects = [
    {
        title: 'Biometric Attendance and Employee Management System',
        company: 'Kanchi Karpooram Limited',
        tech: 'Html, Css, Js, Flask and Sqlalchemy',
        role: 'Backend Developer',
        description: `This Project is to achieve the strict constraints of the company for their attendance system.\n
            I have worked as a backend developer in this project. We, A team of 4 members have been worked on this project.We use Flask for Backend and Html, Css, Js for Frontend.\n
            1. The project is basically about making a software for calculating the attendance for their employees.\n
            2. There is already a software provided along with the biometric machine , which runs in their localhost and it has only basic constraint of attendance.\n
            3. They download the excel sheet of attendance daily and employee modifies the data according to the company's constraint which takes around 1hr/per day...\n
            4. Our software takes only the punch time and emp_number from that software's database and insert into our database every time a new punch data record added, and calculate attendance according to the constrainsts that company required... and provided many features they asked.\n
            5. For database , we used SQLAlchemy (toolkit of python SQL) .`,
        duration: '1 year',
        screenshot: kkl,
    },
    {
        title: 'Internship',
        company: 'Altruisty',
        tech: 'Node Js, React Js, Firebase',
        role: 'Full Stack Developer',
        description: `Currently I'm working there as a intern`,
        duration: '3 Months'
    },
    {
        title: 'Pull Request Management System',
        company: 'Codesapiens',
        tech: 'ReactJs with Cloud Firebase',
        role: 'Full stack developer',
        description: `1. The project is done for a developer community ( CodeSapiens ).
        2. The webpage has connected to some of the repositories that have been included, and i can manage all the pull requests made to that specific repos.
        3. It also has authenticated and secure login functionality with JWT authentication.
        4. And has a point system based on successfull merge of a pull request.`,
        screenshot: codesapiens,
        link: 'https://codesapiens.in'
    },
];

export const personal_projects = [
    {
        title: 'Whatsapp Clone',
        tech: 'Html, Css, Js',
        role: 'Frontend Developer',
        description: `I have clone the Whatsapp web which include light and dark theme too. I have used pure Html, Css, Js for this project`,
        screenshot: whatsappClone,
        link: 'https://mahaveer-wp-clone.netlify.app/'
    },
    {
        title: 'Authentix - npm package',
        tech: 'Node JS',
        role: 'Full Stack Developer',
        description: `Kindly visit the link for more details about my package.`,
        link: 'https://www.npmjs.com/package/authentix?activeTab=readme'
    },
    {
        title: 'Real Time Chat Application',
        tech: 'Flask, MongoDb and React Js',
        role: 'Full Stack Developer',
        description: `A real time chat application using SocketIO, 
                        1. React Js for frontend 
                        2. Flask Act as a API for backend
                        3. Mongo Db for database`,
        screenshot: chatApp,
    },
    {
        title: 'E Commerce Website',
        tech: 'MERN Stack',
        role: 'Full Stack Developer',
        description: `This Project is been given as a task for checking my capability from a company "Critter Graphix" for an Internship.
         Task: Develop a Full-Fledged E-Commerce Website.
         Objective: Create a comprehensive e-commerce platform with user authentication, product management, a shopping cart, and order management.
         Requirements: User Authentication: Implement user registration and login.
         Use JWT for secure authentication.
         Protect routes to ensure only authenticated users can access certain pages.
         Product Management: Admin can add, update, and delete products.
         Each product should have attributes like name, description, price, and image.
         Implement an admin panel for product management.
         Shopping Cart: Users can browse products and add them to their shopping cart.
         Users can view the cart, update quantities, and remove items. Users can proceed to checkout to finalize their purchase.
         Ensure users receive a confirmation of their payment and order.
         Order Management: Users can view their order history, including details of past purchases.
         Admin can manage orders, including viewing all orders, updating order statuses, and handling customer issues.`,
        screenshot: eCommerce,
        link: 'https://mahaveer-e-commerce.netlify.app',
    },
    {
        title: 'Personal portfolio',
        tech: 'React Js',
        role: 'Frontend Developer',
        description: 'The Current Page You are Viewing.',
        screenshot: portfolio,
        link: 'https://mahaveer-portfolio.vercel.app',
    },
    {
        title: 'College Event page',
        tech: 'React Js, Node Js, Mongo Db',
        role: 'Full Stack Developer',
        screenshot: pecEventPage,
        link: 'https://main--pec-it-event-page.netlify.app',
        description: 'A website made for a event to be conducted in our college.'
    },
    {
        title: 'Socket IO Project',
        tech: 'Html, Css, js, Flask, SocketIO',
        role: 'Full Stack Developer',
        description: 'A project done for mastering the SocketIO concepts and its functions in flask.'
    },
    {
        title: 'MERN - Chat Application',
        tech: 'MERN Stack',
        role: 'Full Stack Developer',
        description: `A real time chat application using SocketIO, 
                        1. React Js for frontend 
                        2. Node Js for backend
                        3. Mongo Db for database`,
        screenshot: chatApp,
    },
];

export const experience = [
    {
        "title": "Software Development Team Lead - Altruisty",
        "location": "Remote",
        "date": "Aug 2024 - Present",
        "description": "Promoted to Team Lead, overseeing development projects and leading the team.",
        "iconBackground": "rgb(255, 165, 0)",  // Different color to indicate promotion
        "contentBackground": "var(--bg-secondary-hover)",
        "image": altruisty,
        "icon": <FaArrowUp />
    },
    {
        "title": "Software Development Intern - Altruisty",
        "location": "Remote",
        "date": "Jun 2024 - Aug 2024",
        "description": "Contributed as a Software Development Intern, gaining experience and collaborating with the team.",
        "iconBackground": "rgb(16, 204, 82)",
        "contentBackground": "var(--bg-secondary-hover)",
        "image": altruisty,
        "icon": <FaStar />
    },
    {
        "title": "Full Stack Developer - Upwork",
        "location": "Remote",
        "date": "Feb 2024 - Mar 2024",
        "description": "Delivered a comprehensive shop management solution for a client on Upwork.",
        "iconBackground": "rgb(16, 204, 82)",
        "contentBackground": "var(--bg-secondary-hover)",
        "image": upwork,
        "icon": <FaStar />
    },
    {
        "title": "Backend Developer - Kanchi Karpooram Limited",
        "location": "Remote",
        "date": "Mar 2023 - Feb 2024",
        "description": "Developed and maintained a biometric attendance and employee management system.",
        "iconBackground": "rgb(16, 204, 82)",
        "contentBackground": "var(--bg-secondary-hover)",
        "image": kkl_logo,
        "icon": <FaStar />
    }
    // Add more elements as needed
];
