import GuessGame from "../assets/projects/p1.png"
import MembersDashBoard from "../assets/projects/p2.png"
import WatchWise from "../assets/projects/p3.png"
import Student from "../assets/projects/p4.png"
import Trips from "../assets/projects/p5.png"
import BMI from "../assets/projects/p6.png"
import InvCalc from "../assets/projects/p7.png"
import TimeCh from "../assets/projects/p8.png"
import PM from "../assets/projects/p9.png"
import TSM from "../assets/projects/pp1.png"
import Shopping from "../assets/projects/pp2.png"
import Quiz from "../assets/projects/pp3.png"
import places from "../assets/projects/pp4.png"
import Memory from "../assets/projects/pp5.png"
import Form from "../assets/projects/pp6.png"
import Score from "../assets/projects/pp7.png"
import tic2 from "../assets/projects/pp8.png"
import Bank from "../assets/projects/pp9.png"
import loop from "../assets/projects/ppp1.png"
import tic from "../assets/projects/ppp2.png"
import book from "../assets/projects/ppp3.png"
import Algo from "../assets/projects/ppp4.png"
import cafe from "../assets/projects/D1.png"
import Goals from "../assets/projects/D2.png"
import Super from "../assets/projects/D3.png"
import Titanic from "../assets/projects/D4.png"
import Chinook from "../assets/projects/D5.png"
import Olist from "../assets/projects/D6.jpeg"
import CMDI from "../assets/projects/D7.png"
import Algo2 from "../assets/projects/ppp5.png"
import rct from "../assets/projects/ppp6.png"
export const Projects = [
    {
        type: "Front-End", 
        list: [
            {
                name: "Algorithm Visualizer",
                repo: "https://github.com/Moatazahmed156/Search-Graph-Visualizer",
                demo: "https://searchandgaph.netlify.app/",
                description: "The Search & Graph Algorithm Visualizer is an interactive React application designed to bridge the gap between theoretical code and visual execution by animating fundamental computer science algorithms in real-time. It features dual visualization modes—dynamic bar charts for Linear and Binary search, and a fully manipulatable grid for Breadth-First (BFS) and Depth-First (DFS) graph traversals—allowing users to intuitively explore algorithmic logic through custom data inputs, interactive wall drawing, and adjustable playback speeds. Built with responsive design principles and live complexity analytics, this tool serves as an educational sandbox for developers and students to experiment with pathfinding strategies and search efficiency in a tangible, visual environment.",
                image: Algo2,
                tech: ["React" , "State Handler", "Tailwind CSS" , "Algorithms" , "Animation" ]
            },
            {
                name: "AlgoRhythm",
                repo: "https://github.com/Moatazahmed156/Sorting-Algorithms-Visualizer",
                demo: "https://bespoke-valkyrie-d5f1c9.netlify.app/",
                description: "This project brings complex sorting algorithms (Bubble, Selection, Insertion, Merge, and Quick Sort) to life. I re-engineered these algorithms not just to sort, but to generate a 'step-by-step' animation sequence of their logic. A custom visualization engine then translates this sequence into a live, frame-by-frame animation, showing exactly how data is moved. The app provides real-time performance stats (comparisons, swaps, time) and interactive controls, demonstrating a practical mastery of algorithm analysis and dynamic state visualization.",
                image: Algo,
                tech: ["React" , "State Handler", "Tailwind CSS" , "Algorithms" , "Animation" ]
            },
            {
                name: "Investment Calculator",
                repo: "https://github.com/Moatazahmed156/React-Investment-Calculator",
                demo: "https://loquacious-custard-f8fc16.netlify.app/",
                description: "A user-friendly React app that helps users project the future value of their investments. By entering the initial investment, annual contribution, expected return rate, and duration, users get a year-by-year breakdown of investment value, total interest earned, and capital invested. Ideal for visualizing compound growth over time.",
                image: InvCalc,
                tech: ["React" , "Math" , "React Hooks" , "Tailwind CSS"]
            },
            {
                name: "Time Challenge",
                repo: "https://github.com/Moatazahmed156/Time-Challenge-ReactJS",
                demo: "https://glittery-rolypoly-dd247a.netlify.app/",
                description: "A fast-paced React time estimation game that challenges your sense of timing! Choose a difficulty level (1 to 15 seconds), start the countdown, and try to stop the timer as close as possible to zero—without any visual hints. Can you beat the clock using only your instincts? Test your timing skills across multiple levels and track your accuracy!",
                image: TimeCh,
                tech: ["React" , "React Hooks" , "CSS"]
            },
            {
                name: "Project Manager",
                repo: "https://github.com/Moatazahmed156/Project-Manager-reactjs",
                demo: "https://bright-pudding-2153b0.netlify.app/",
                description: "A user-friendly React application designed to help you manage multiple projects with ease. Create, view, and organize unlimited projects, each with its own set of tasks. Add or delete tasks within any project, keeping your workflow clean and efficient. With a simple and intuitive interface, staying on top of your projects has never been easier.",
                image: PM,
                tech: ["React" , "React Hooks" , "Tailwind CSS" , "Local Storage"]
            },
            {
                name: "Clothes E-Commerce",
                repo: "https://github.com/Moatazahmed156/ShoppingCart-Handler-Context-and-useReducer",
                demo: "https://majestic-starship-6880ad.netlify.app/",
                description: "A sleek and responsive React-based shopping cart application designed for fashion enthusiasts. Browse a curated collection of elegant clothing, view product details, and manage your cart seamlessly. Add or remove items with ease while enjoying a smooth and user-friendly shopping experience.",
                image: Shopping,
                tech: ["React" , "React Hooks", "Context" , "CSS"]
            },
            {
                name: "Quiz App",
                repo: "https://github.com/Moatazahmed156/QuizApp-React",
                demo: "https://precious-pony-de8e4d.netlify.app/",
                description: "A lightweight React-based quiz application that tests users' knowledge of React.js and web development concepts. Featuring multiple-choice questions, instant interaction, and a clean interface, it's perfect for quick learning and self-assessment.",
                image: Quiz,
                tech: ["React" , "React Hooks", "CSS"]
            },
            {
                name: "PlacePicker",
                repo: "https://github.com/Moatazahmed156/PlacePicker-Reactjs",
                demo: "https://reliable-kulfi-c1deaf.netlify.app/",
                description: "A beautifully designed React app that lets you create a personalized collection of places you've visited or dream of exploring. Places are automatically sorted based on your current location from nearest to farthest making it easy to plan your next adventure. Discover, save, and visualize your travel inspirations in one elegant interface.",
                image: places,
                tech: ["React" , "React Hooks", "CSS" , "Local Storage" , "GeoLocation"]
            },
            {
                name: "Memory Game",
                repo: "https://github.com/Moatazahmed156/Memory-Game",
                demo: "https://deft-gecko-f1cd2a.netlify.app/",
                description: "A playful React-based memory game where players flip cards to find matching pairs. Each round challenges your focus and recall abilities with fun emojis and a clean, interactive layout. Perfect for all ages—just flip, match, and try to beat your best score!",
                image: Memory,
                tech: ["React" , "React Hooks", "Tailwind CSS" , "Algorithms" ]
            },
            {
                name: "Tic Tak Toe 2",
                repo: "https://github.com/Moatazahmed156/React_Tic-Tac-Toe",
                demo: "https://rainbow-chimera-363288.netlify.app/",
                description: "A fun and interactive Tic Tac Toe game built with React. Players can enter their names before starting, making each match more engaging. With a clean UI and smooth gameplay, it's perfect for quick competitive fun between friends.",
                image: tic2,
                tech: ["React" , "React Hooks", "Tailwind CSS"]
            },
            {
                name: "Book Library",
                repo: "https://github.com/Moatazahmed156/Book-Library",
                demo: "https://moatazahmed156.github.io/Book-Library/",
                description: "A modern and responsive book library interface built with HTML, CSS, and JavaScript. This app allows users to browse a collection of popular books, add titles to their personal list, explore trending authors, and view featured blog posts. Includes dynamic search functionality, interactive UI elements, and clean categorization for an engaging reading experience.",
                image: book,
                tech: ["HTML" , "CSS" , "JS"]
            },
            {
                name: "React Demo",
                repo: "https://github.com/Moatazahmed156/React-Essentials",
                demo: "https://famous-fenglisu-3d30e0.netlify.app/",
                description: "A simple React application demonstrating core concepts such as components, props, state management, and event handling. This demo serves as a foundational example for beginners looking to understand the essentials of building applications with React.js.",
                image: rct,
                tech: ["React" , "State Handling" , "Tailwind CSS"]
            },
            {
                name: "Tic Tak Toe",
                repo: "https://github.com/Moatazahmed156/Tic-Tak-Toe",
                demo: "https://moatazahmed156.github.io/Tic-Tak-Toe/",
                description: "A classic two-player Tic Tac Toe game built with vanilla JavaScript, HTML, and CSS. Players can enter their names, take turns making moves, and track scores across rounds.",
                image: tic,
                tech: ["HTML" , "CSS" , "JS"]
            },
            {
                name: "Easy Bank Landing Page",
                repo: "https://github.com/Moatazahmed156/EasyBank-Design",
                demo: "https://moatazahmed156.github.io/EasyBank-Design/",
                description: "A fully responsive landing page built with HTML and CSS for a fictional digital banking service. The design highlights Easybank's features like online banking, budgeting, onboarding, and Open API. Includes interactive navigation, article previews, and a clean call-to-action for inviting users. Perfect for showcasing front-end layout and styling skills.",
                image: Bank,
                tech: ["HTML" , "CSS"]
            },
            {
                name: "LoopStudios Landing Page",
                repo: "https://github.com/Moatazahmed156/Loopstudios",
                demo: "https://moatazahmed156.github.io/Loopstudios/",
                description: "A sleek and fully responsive landing page built with HTML and CSS, highlighting a virtual reality company’s portfolio. Featuring immersive visuals, clean layout, and a modern design, this page showcases LoopStudios cutting-edge VR creations and company story. Ideal for demonstrating layout structuring and responsive web design skills.",
                image: loop,
                tech: ["HTML" , "CSS"]
            },
        ]
    },
    {
        type: "Full-Stack",
        list: [
            {
                name: "WatchWise App",
                repo: "hhttps://github.com/Moatazahmed156/WatchWise_MoviesApp",
                demo: "https://drive.google.com/drive/folders/1dlSG_pXcROeynIG0tAfarSpxftr0uOLb",
                description: "Watch Wise is a movie discovery app that helps users explore films, track favorites, and get personalized recommendations based on their preferences. The app provides a seamless user experience with features like search, genre filtering, watchlists, and trending movies, making it easy to find the perfect movie for any mood. Its goal is to make movie selection smarter and more enjoyable.",
                image: WatchWise,
                tech: ["Flutter" , "Dart" , "HTTP" , "Navigators", "Hive" ,"Node.js", "TMDB API", "SQL", "Express"]
            },
            {
                name: "Member & Attendance Management Dashboard",
                repo: "https://github.com/Moatazahmed156/Members-DashBoard-nodejs-React",
                demo: "https://drive.google.com/file/d/1p5qRytnlFXq5K8EJZLxmrw_Bzggbgf-y/view?usp=drive_link",
                description: "This is a Full Stack Web Application built with Node.js (Express) for the backend, React.js for the frontend, and SQL for the database. It is designed to help admins manage a database of organization members, track their attendance, and perform CRUD operations securely using token-based authentication (JWT).The system features role-based access, ensuring that only authorized admins can create, update, or delete member and attendance data, while regular users can only view limited information.",
                image: MembersDashBoard,
                tech: ["React" , "Axios" , "Hooks" , "SPA", "local Storage" ,"Node.js", "JWT", "SQL", "Express"]
            },
        ]
    },
    {
        type: "Mobile",
        list: [
            {
                name: "WatchWise App",
                repo: "hhttps://github.com/Moatazahmed156/WatchWise_MoviesApp",
                demo: "https://drive.google.com/drive/folders/1dlSG_pXcROeynIG0tAfarSpxftr0uOLb",
                description: "Watch Wise is a movie discovery app that helps users explore films, track favorites, and get personalized recommendations based on their preferences. The app provides a seamless user experience with features like search, genre filtering, watchlists, and trending movies, making it easy to find the perfect movie for any mood. Its goal is to make movie selection smarter and more enjoyable.",
                image: WatchWise,
                tech: ["Flutter" , "Dart" , "HTTP" ,  "Hive" ,"Node.js", "TMDB API", "SQL", "Express"]
            },
            {
                name: "Vacation Trips",
                repo: "https://github.com/Moatazahmed156/vacation_trips",
                demo: "https://drive.google.com/drive/folders/17mvRN-v9puwryfpPWDVHov5Yfi2iZy1E",
                description: "Vacation Trip App is a Flutter-based mobile application designed to help users explore beautiful destinations, plan trips, and view detailed information about various vacation spots. With a simple interface, users can browse places in list or grid view and dive into each location's details — perfect for travel lovers and adventure seekers.",
                image: Trips,
                tech: ["Flutter" , "Dart" , "Navigator"]
            },
            {
                name: "BMI Calculator",
                repo: "https://github.com/Moatazahmed156/BMI-Calculator-Flutter",
                demo: "https://drive.google.com/drive/folders/1akManJVgpLoNNXJmDSlYUoyz_1_V1peh",
                description: "A simple and responsive BMI Calculator app built with Flutter. Users can select gender, adjust height, weight, and age, then calculate and view their Body Mass Index along with a health category.",
                image: BMI,
                tech: ["Flutter" , "Dart" , "Navigator", "Math"]
            },
        ]
    },
    {
        type: "Data Analysis",
        list: [
            {
                name: "Cafe Sales",
                demo: "https://www.linkedin.com/posts/moataz-ahmed-b02438255_dataanalysis-excel-dashboard-activity-7368955801425690624-k7ZN",
                description: "An interactive Excel dashboard that visualizes coffee sales performance, including total revenue, cups sold, and best-selling coffee types. The project features dynamic charts and slicers for filtering by coffee type and size, along with trend analysis for monthly sales and revenue distribution.",
                image: cafe,
                tech: ["Excel" , "Pivot Table", "Power Query" , "Visual Basic" ]
            },
            {
                name: "Brazilian E-Commerce Public Dataset",
                demo: "https://drive.google.com/drive/folders/1vAXkNeu7msFWyhzh6EFGz6xKwwE-NTMo",
                description: "PowerBi Analysis of Brazilian E-Commerce public dataset, including sales performance by product, category, and customer demographics. Utilizes Power BI features such as data modeling, DAX calculations, and visualizations to extract insights and trends from the e-commerce data.",
                image: Olist,
                tech: ["Power Bi" , "Data Modeling", "DAX", "Visualizations"]
            },
            {
                name: "Cairo-Metro-Data-Intelligence",
                demo: "https://gamma.app/docs/Cairo-Metro-Data-Intelligence-cxwt7k739wib0nn",
                repo: "https://github.com/Moatazahmed156/Cairo-Metro-Data-Intelligence",
                description: "The Cairo Metro Data Analysis & Visualization project provides deep insights into Cairo’s metro system using Python, Pandas, NumPy, Matplotlib, Seaborn, and Folium. It analyzes passenger trends, revenue patterns, station performance, and service reliability through clear visualizations and interactive maps. The project highlights time-based passenger behaviors, identifies crowded and high-performing stations, and tracks service issues over time. An interactive Folium map displays stations, lines, and performance metrics for better spatial understanding. Overall, it offers a powerful data-driven perspective to support metro management and urban planning decisions.",
                image: CMDI,
                tech: ["Python" , "Seaborn", "Matplotlib", "pandas", "Folium", "NumPy", "Jupyter Notebook"]
            },
            {
                name: "SuperStore Sales",
                demo: "https://www.linkedin.com/posts/moataz-ahmed-b02438255_elevvo-internship-excel-activity-7381322299003613184-uk-A",
                description: "An interactive Excel dashboard visualizing sales performance from 2015 to 2018, tracking revenue, orders, and customer insights. Includes detailed analysis by category, region, and sub-category, highlighting top-performing states, customers, and monthly sales trends.",
                image: Super,
                tech: ["Excel" , "Pivot Table", "Power Query", "Power Pivot"]
            },
            {
                name: "Titanic Survival Analysis",
                demo: "https://drive.google.com/drive/folders/1xgTHxn6bBj07hK2S_N8mb6EROoMqiHjr",
                description: "A python Analysis of Titanic passenger data, including survival rates by class, gender, and age. Utilizes Pandas for data manipulation and Matplotlib/Seaborn for visualizations to uncover patterns and insights about the tragic event.",
                image: Titanic,
                tech: ["Python" , "Pandas", "NumPy", "Matplotlib", "Seaborn"]
            },
            {
                name: "Chinook Database Analysis",
                demo: "https://drive.google.com/drive/folders/19EkjcvLpatwwHA6mqUN24Dl0gTuqnWZM",
                description: "A SQL Analysis of Chinook database, including sales performance by artist, album, and customer demographics. Utilizes complex SQL queries to extract insights and trends from the music store data.",
                image: Chinook,
                tech: ["SQL" , "SQLite", "Jupyter Notebook", "Python"]
            },
            {
                name: "C.Ronaldo Goals",
                demo: "https://www.linkedin.com/posts/moataz-ahmed-b02438255_excel-powerquery-powerpivot-activity-7378028987748409346-jdKx",
                description: "An interactive Excel dashboard that visualizes C.Ronaldo's goals performance, including total goals, assists, and best matches. The project features dynamic charts and slicers for filtering by season and competition, along with trend analysis for monthly goals and assists distribution.",
                image: Goals,
                tech: ["Excel" , "Pivot Table", "Power Query" ]
            },
        ]
    },
]

const SecProject = [
    {
                name: "Tasks Manager",
                repo: "https://github.com/Moatazahmed156/Task-Manager",
                demo: "https://cool-baklava-b43f4c.netlify.app/",
                description: "A simple and intuitive task manager built with React. Add tasks with details, view them in a clean layout, and filter by month. Includes dynamic headers and clear feedback when no tasks are available.",
                image: TSM,
                tech: ["React" , "React Hooks" , "Tailwind CSS"]
    },
    {
                name: "Number Guess game",
                repo: "https://github.com/Moatazahmed156/Guess-game",
                demo: "https://moatazahmed156.github.io/Guess-game/",
                description: "A fun and interactive web-based game where players try to guess a randomly generated four-digit number with no repeated digits! The game provides feedback on each attempt, helping the player deduce the correct number",
                image: GuessGame,
                tech: ["HTML" , "CSS" , "JS"]
    },
    {
        repo:"https://moatazahmed156.github.io/Hangman-Game/",
        link: "https://github.com/Moatazahmed156/Hangman-Game"
    },
    {
        repo:"https://moatazahmed156.github.io/Task-List/",
        link: "https://github.com/Moatazahmed156/Task-List"
    },
]
