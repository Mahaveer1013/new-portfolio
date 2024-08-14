import chatApp from './images/chat-app.png'
import pecEventPage from './images/main-page-event.png'
import portfolio from './images/portfolio.png'
import whatsappClone from './images/whatsapp-clone.png'
import kkl from './images/kkl.png'
import codesapiens from './images/codesapiens.png'

export const industry_projects = [
    {
        title: 'Pull Request Management System',
        tech: 'ReactJs with Cloud Firebase',
        role: 'Full stack developer',
        description: `1. The project is done a developer community ( CodeSapiens ).
        2. I have personally build the backend API in Node JS. 
        3. The webpage has connected to some of the repositories i have included, and i can manage all the pull requests made to that specific repos.
        4. It also has authenticated and secure login functionality with JWT authentication.
        5. And has a point based on successfull merge of a pull request.`,
        screenshot: codesapiens,
        link: 'https://codesapiens.in'
    },
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
        screenshot:chatApp,
    },
    {
        title: 'Personal portfolio',
        tech: 'React Js',
        role: 'Frontend Developer',
        description: 'The Current Page You are Viewing.',
        screenshot: portfolio,
        link: 'https://mahaveer-portfolio-1013.netlify.app/',
    },
    {
        title: 'College Event page',
        tech: 'React Js, Node Js, Mongo Db',
        role: 'Full Stack Developer',
        screenshot: pecEventPage,
        link: 'https://main--pec-it-event-page.netlify.app/',
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
        screenshot:chatApp,
    },
  ];
