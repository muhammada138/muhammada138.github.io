export type Project = {
  slug: string;
  title: string;
  github: string;
  live?: string;
  images?: string[];
  meta: string;
  tagline: string;
  desc: string;
  overview: string[];
  tech: string[];
  status: string;
  hidden?: boolean;
};

const allProjects: Project[] = [
  {
    slug: 'space-mission-tracker',
    title: 'Space Mission Tracker',
    github: 'https://github.com/muhammada138/space-mission-tracker',
    live: 'https://space-mission-tracker-nine.vercel.app/',
    images: [
      '/space-mission-tracker-1.png',
      '/space-mission-tracker-2.png',
      '/space-mission-tracker-3.png',
      '/space-mission-tracker-4.png',
      '/space-mission-tracker-5.png',
      '/space-mission-tracker-6.png',
    ],
    meta: 'React · Django · PostgreSQL · WebGL · Launch Library 2 · SpaceX API',
    tagline: 'A comprehensive mission control dashboard for space enthusiasts.',
    desc: 'This full-stack application provides a sophisticated interface for tracking global space launches. It features an interactive 3D globe and real-time station tracking, all powered by live data from multiple industry sources and presented in a refined mission control aesthetic.',
    overview: [
      'The Space Mission Tracker was created to make space data accessible and engaging. The platform consolidates live feeds from both the Launch Library 2 and the SpaceX API, covering thousands of launches with a custom caching system that ensures information remains current and reliable even during high-traffic events.',
      'A core part of the experience is the visualization suite. This includes a custom-built 3D globe that maps launch coordinates across continents and a real-time ISS tracker that uses smooth interpolation to show the station\'s path. A logarithmic timeline also allows users to explore decades of history without being overwhelmed by data density.',
      'For registered users, the app offers personal features like watchlists and mission logs. The system can send browser notifications shortly before a scheduled launch and generate shareable cards for social media. The technical foundation relies on a Django backend with PostgreSQL for robust data management, while the React frontend uses starfield animations to create an immersive environment.',
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'WebGL', 'Three.js', 'Tailwind CSS', 'JWT', 'Launch Library 2', 'SpaceX API', 'Vite', 'Django REST Framework'],
    status: 'Complete',
  },
  {
    slug: 'league-coach',
    title: 'Rift IQ',
    github: 'https://github.com/muhammada138/league-coach',
    live: 'https://league-coach.vercel.app/',
    images: ['/league-coach-1.png'],
    meta: 'React · FastAPI · Riot API · Groq · Python',
    tagline: 'Intelligent coaching based on your actual match performance.',
    desc: 'Rift IQ is an AI-powered analysis tool for League of Legends that benchmarks your performance against everyone else in your matches. It uses large language models to provide specific, actionable coaching tips based on your real statistics.',
    overview: [
      'While most tools provide generic statistics, Rift IQ focuses on relative performance. It analyzes how you performed compared to the other nine players in your specific game, looking at gold, damage, and vision scores to provide context that matters. This approach ensures that the feedback you receive is relevant to the actual skill level of your opponents.',
      'The analysis pipeline fetches your recent matches and scores each one on a percentile scale. This data is then processed by an advanced language model that identifies patterns in your gameplay. Rather than giving vague advice, the system points out specific moments where you fell behind and suggests clear improvements.',
      'The application also includes a live scoreboard, trend tracking for your rank, and win probability modeling. It handles complex API interactions with an asynchronous backend to ensure fast response times, providing a professional and responsive experience for players looking to climb the ladder.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Riot API', 'Groq', 'Vite', 'Tailwind CSS', 'React Router', 'Pydantic'],
    status: 'Complete',
  },
  {
    slug: 'omnivault-password-manager',
    title: 'OmniVault',
    github: 'https://github.com/muhammada138/password-manager',
    images: ['/omnivault-1.png', '/omnivault-2.png', '/omnivault-3.png'],
    meta: 'Python · PyQt6 · Cryptography · Fernet · PBKDF2',
    tagline: 'A fast and secure desktop password manager with local encryption.',
    desc: 'OmniVault is a modern security application built for personal credential management. It features robust local encryption and an automated typing system, providing a secure alternative to cloud-based solutions with a polished desktop interface.',
    overview: [
      'This project was built to give users complete control over their sensitive data. It uses industry-standard encryption protocols to store credentials in a local binary vault, ensuring that your master password and data never leave your own machine. The key derivation process uses high iteration counts to protect against modern security threats.',
      'The user interface is built with PyQt6 and features a frameless dark theme that feels modern and professional. It is designed to stay out of your way, living in the system tray until it is needed. Global hotkeys allow you to summon the vault and find your credentials in seconds.',
      'To improve both security and convenience, OmniVault uses an automated typing system that inputs your credentials directly into login fields. This method avoids the use of the system clipboard, protecting you from potential hijacking scripts while making the login process significantly faster than manual entry.',
    ],
    tech: ['Python', 'PyQt6', 'Cryptography', 'PyAutoGUI', 'pystray'],
    status: 'Complete',
  },
  {
    slug: 'marquee-movie-recommender',
    title: 'Marquee',
    github: 'https://github.com/muhammada138/movie-recommender',
    live: 'https://marqueemovie.streamlit.app/',
    images: ['/marquee-1.png', '/marquee-2.png', '/marquee-3.png'],
    meta: 'Python · Streamlit · Scikit-Learn · Pandas · TMDB API',
    tagline: 'Discover your next favorite film through intelligent analysis.',
    desc: 'Marquee is a sophisticated movie discovery platform that moves beyond simple search. It uses custom machine learning models to analyze thousands of data points, providing personalized recommendations that consider your taste in genres, actors, and specific film eras.',
    overview: [
      'The goal of Marquee was to create a recommendation system that feels personal and accurate. Instead of relying on a simple API, this project implements collaborative and content-based filtering algorithms from the ground up, using a massive dataset of movie ratings and metadata.',
      'The recommendation engine uses a hybrid approach that combines user similarity with deep keyword analysis. It can identify subtle patterns in what you enjoy, such as specific themes or sub-genres, and uses a time-based decay function to ensure that the results feel fresh and relevant to your interests.',
      'The application features a visual dashboard with real-time search and poster previews. It also integrates live streaming data, so you can see where a movie is currently available to watch. The entire experience is built to be fast, visual, and genuinely helpful for film enthusiasts.',
    ],
    tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Pandas', 'TMDB API', 'NumPy', 'Requests'],
    status: 'Complete',
  },
  {
    slug: 'clarity-finance-tracker',
    title: 'Clarity Finance Tracker',
    github: 'https://github.com/muhammada138/clarity-finance-tracker',
    live: 'https://clarity-finance-tracker.vercel.app/',
    images: ['/clarity-1.png', '/clarity-2.png'],
    meta: 'React · FastAPI · Plaid · Groq · Python',
    tagline: 'Understand your spending through conversation and AI.',
    desc: 'Clarity is an AI-powered financial dashboard that connects directly to your bank account. It uses advanced language models to categorize every transaction and allows you to ask natural questions about your money, turning raw numbers into meaningful insights.',
    overview: [
      'This application removes the manual work from personal finance. By securely linking to your bank through the Plaid API, it automatically imports your transaction history and uses AI to organize it into logical categories. This creates a clear picture of where your money is going without any manual entry required.',
      'The most powerful feature is the natural language interface. Instead of searching through charts, you can simply ask questions about your habits, such as where you spent the most money this week or how your current spending compares to last month. The AI understands the context of your transactions and provides clear, personalized answers.',
      'Your data is handled securely and persists across sessions, allowing you to return to your analysis at any time. The system is built for speed and reliability, using a modern tech stack that allows for real-time updates as soon as your bank records a new transaction.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Plaid API', 'Groq', 'Vite', 'Recharts', 'Tailwind CSS', 'Pydantic'],
    status: 'Complete',
  },
  {
    slug: 'study-dashboard',
    title: 'Study Dashboard (WIP)',
    github: 'https://github.com/muhammada138/study-dashboard',
    meta: 'Vanilla JS · localStorage',
    tagline: 'A private and minimal workspace for your browser.',
    desc: 'Study Dashboard is a lightweight productivity tool that lives in your new tab page. It features built-in notes, task lists, and progress tracking that work completely offline, ensuring your data stays private and your workflow remains distraction-free.',
    overview: [
      'This dashboard was designed to replace cluttered new tab pages with a clean, functional workspace. It provides everything you need to stay organized, including a quick-note area and a task manager, all accessible the moment you open your browser.',
      'Privacy and speed were the primary goals for this project. All data is stored locally in your browser, meaning no accounts are required and your information never leaves your device. This makes the tool incredibly fast and reliable, even without an internet connection.',
      'The interface focuses on minimalism and usability, with support for keyboard shortcuts to help you manage your tasks quickly. It is a simple yet powerful way to keep your goals in sight and your workspace clean.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    status: 'In Progress',
  },
  {
    slug: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    github: 'https://github.com/muhammada138/pathfinding-visualizer',
    meta: 'JavaScript · HTML · CSS',
    tagline: 'Watch algorithms navigate complex mazes in real time.',
    desc: 'This interactive tool brings classic pathfinding algorithms to life. It allows you to build custom obstacles on a grid and watch as different logic systems, such as A* and Dijkstra\'s, find the most efficient path through the environment.',
    overview: [
      'This visualizer was built to make abstract computer science concepts concrete and easy to understand. Users can interact with a large grid, placing start and end points and drawing walls to create complex challenges for the AI to solve.',
      'The tool supports several well-known algorithms, each with its own unique behavior. As the visualization runs, you can see how different strategies prioritize search directions and cost, providing a clear comparison of how these systems operate in real-world scenarios.',
      'The entire application is built with vanilla JavaScript, emphasizing performance and smooth animations. It is an educational resource designed for anyone looking to learn more about graph theory and algorithmic logic in a visual way.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'Complete',
    hidden: true,
  },
  {
    slug: 'league-stats-bot',
    title: 'League Stats Bot',
    github: 'https://github.com/muhammada138/league-stats-bot',
    meta: 'Python · discord.py · Riot API',
    tagline: 'Bring detailed player statistics directly into Discord.',
    desc: 'This Discord bot provides instant access to League of Legends match history and player statistics. It uses the Riot API to fetch live data and presents it through polished Discord cards, making it easy to check performance without leaving the chat.',
    overview: [
      'The bot was created to streamline how players check their stats during gaming sessions. With simple slash commands, users can pull up their recent performance, including champion picks, KDA, and gold totals, all within the Discord interface.',
      'Reliability was a key focus during development. The bot includes custom logic to handle API rate limits and connection issues, ensuring it remains responsive even when multiple users are requesting data simultaneously.',
      'It is designed to be a lightweight addition to any server, providing high-quality data visualizations that help communities track their progress and share their achievements together.',
    ],
    tech: ['Python', 'discord.py', 'Riot API'],
    status: 'Complete',
    hidden: true,
  },
];

export const projects = allProjects.filter(p => !p.hidden);
