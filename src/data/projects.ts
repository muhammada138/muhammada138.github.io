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
      '/space-mission-tracker-7.png',
      '/space-mission-tracker-8.png',
    ],
    meta: 'React · Django · PostgreSQL · WebGL · Launch Library 2 · SpaceX API',
    tagline: 'Professional mission control with real-time tracking and 3D visualization.',
    desc: 'This sophisticated mission control platform offers real-time tracking of global space launches and the International Space Station. It features an interactive 3D WebGL globe, a dedicated Starship flight monitor, and detailed technical comparisons for major launch vehicles.',
    overview: [
      'The Space Mission Tracker provides an immersive experience for following global space exploration. It integrates live data feeds covering more than a thousand historical and upcoming launches, using a custom caching system to ensure that mission-critical information is always available and up to date.',
      'A major highlight of the project is the interactive visualization suite. This includes a 3D launch globe built with WebGL that maps launch sites across all seven continents, alongside a live ISS tracker that illustrates the station\'s orbital path in real time. There is also a dedicated section for Starship testing, providing technical logs and telemetry for every major flight test.',
      'Beyond tracking, the app offers tools for deep analysis, such as a rocket comparison engine and a logarithmic mission timeline. Registered users can manage personal watchlists, receive notifications before ignition, and maintain their own mission logs, creating a comprehensive personal headquarters for following the future of space flight.',
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'WebGL', 'Three.js', 'Tailwind CSS', 'JWT', 'Launch Library 2', 'SpaceX API', 'Vite', 'Django REST Framework'],
    status: 'Complete',
  },
  {
    slug: 'league-coach',
    title: 'Rift IQ',
    github: 'https://github.com/muhammada138/league-coach',
    live: 'https://league-coach.vercel.app/',
    images: [
      '/league-coach-1.png',
      '/league-coach-2.png',
      '/league-coach-3.png'
    ],
    meta: 'React · FastAPI · Riot API · Groq · Python',
    tagline: 'Advanced LoL coaching with ML win prediction and lobby benchmarking.',
    desc: 'Rift IQ is an intelligent coaching platform for League of Legends that goes beyond simple statistics. It features a machine learning win predictor, real-time lobby benchmarking, and visual LP trend analysis to provide deep insights into your ranked performance.',
    overview: [
      'While traditional tools offer static data, Rift IQ uses dynamic benchmarking to analyze your performance relative to every other player in your specific matches. It calculates a custom performance score based on your contribution to the game, looking at complex metrics like vision control and lane efficiency to provide a clear picture of your actual impact.',
      'The platform includes a live game dashboard with a specialized win predictor that uses machine learning to estimate victory probability in real time. It analyzes factors like team composition, recent player form, and ranked consistency to provide a detailed breakdown of the match dynamics as they happen.',
      'Players can also track their progress through interactive LP trend graphs that visualize rank changes over the last 30 days. The system uses advanced natural language processing to generate specific, actionable coaching tips tailored to your unique gameplay style, helping you identify exactly where to improve to maximize your competitive success.',
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
    tagline: 'High-performance desktop security with local-first encryption.',
    desc: 'OmniVault is a modern security application built for personal credential management. It features local-only binary encryption and an automated typing system, providing a secure alternative to cloud-based solutions with zero exposure to third-party servers.',
    overview: [
      'This project was built to deliver professional-grade security for local data. It utilizes a layered cryptographic architecture, storing credentials in a binary vault protected by Fernet symmetric encryption and a highly secure key derivation process. By keeping all data local, it eliminates the risks associated with cloud-based storage.',
      'The user interface is built with PyQt6 and features a refined dark theme designed for efficiency. It stays hidden in the system tray until needed, allowing for instant access through global hotkeys. The custom architecture focuses on speed and minimal resource usage, providing a fast and stable desktop experience.',
      'To prioritize both security and ease of use, OmniVault includes a "Click and Type" logic that inputs credentials directly into login fields. This method protects users from clipboard hijacking while making the login process significantly faster, ensuring that sensitive information is handled with maximum care and precision.',
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
    tagline: 'Intelligent movie discovery powered by custom ML algorithms.',
    desc: 'Marquee is a sophisticated movie discovery platform that analyzes deep metadata to provide highly personalized film recommendations. It implementations collaborative filtering and content-based matching to help you find films that match your exact storytelling preferences.',
    overview: [
      'The engine behind Marquee was built to solve the inaccuracy of generic search tools. It implements foundational machine learning algorithms, including SVD and Cosine Similarity, to identify deep patterns in user tastes and film characteristics across a dataset of thousands of movies and ratings.',
      'The system uses a hybrid matching model that considers both genre categories and thousands of specific metadata keywords. It also includes a time-based decay function to prioritize results that align with your preferred eras of cinema, ensuring that every recommendation feels both relevant and insightful.',
      'The platform features a visual dashboard with real-time fuzzy search and high-resolution poster previews. By integrating live streaming data and IMDb links, it provides a comprehensive experience that helps film enthusiasts move directly from discovery to viewing in a single interface.',
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
    tagline: 'Modern personal finance with automated AI categorization.',
    desc: 'Clarity is an AI-enhanced financial dashboard that connects directly to your bank account via the Plaid API. It handles complex transaction math and automated categorization in real time, providing clear spending insights through natural conversation.',
    overview: [
      'This application simplifies financial management by automating the retrieval and analysis of bank transactions. It uses a secure integration to import data directly from your accounts, applying advanced logic to organize spending into distinct categories and providing a clear overview of your financial health.',
      'A key feature is the natural language interface, which allows you to interact with your data through simple questions. The system analyzes your transaction history to provide instant answers about spending patterns and budget trends, making financial planning as easy as having a conversation.',
      'The dashboard includes detailed statistics on income and expenditures, with specialized calculations for various transaction types. It is built for reliability and speed, featuring a modern tech stack that allows for seamless updates and secure session management as you explore your financial records.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Plaid API', 'Groq', 'Vite', 'Recharts', 'Tailwind CSS', 'Pydantic'],
    status: 'Complete',
  },
  {
    slug: 'study-dashboard',
    title: 'Study Dashboard (WIP)',
    github: 'https://github.com/muhammada138/study-dashboard',
    meta: 'Vanilla JS · localStorage',
    tagline: 'A private and minimal workspace for focused productivity.',
    desc: 'Study Dashboard is a lightweight tool designed to transform your browser\'s new tab page into a clean, functional workspace. It features secure local note-taking, task management, and progress tracking that work completely offline.',
    overview: [
      'The goal of this project was to create a distraction-free environment for daily tasks. It provides a specialized note-taking area and a task manager that are instantly available every time you open a new tab, helping you keep your priorities in focus.',
      'To ensure maximum privacy and accessibility, all data is stored directly in your browser\'s local storage. This means your information never leaves your machine and remains accessible even without an internet connection, providing a fast and reliable experience.',
      'The interface is designed for simplicity, emphasizing a clean aesthetic that keeps your goals front and center. It is built using vanilla JavaScript to ensure performance and stability, providing a powerful productivity tool without the need for complex setups or accounts.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    status: 'In Progress',
  },
  {
    slug: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    github: 'https://github.com/muhammada138/pathfinding-visualizer',
    meta: 'JavaScript · HTML · CSS',
    tagline: 'Real-time algorithmic animations for pathfinding logic.',
    desc: 'This interactive tool brings complex graph algorithms to life through real-time visualizations. It allows you to build custom environments and watch as systems like A* and Dijkstra\'s find the most efficient paths through various challenges.',
    overview: [
      'Built as an educational resource, this visualizer allows users to interact with a grid to create obstacles and mazes. You can see exactly how different algorithms explore the environment, providing a visual comparison of their logic and efficiency.',
      'The application supports several well-known systems, each animated to show node visits and final path reconstruction. It helps demystify abstract concepts in computer science by showing the step-by-step logic used to solve complex navigation problems.',
      'The tool is built with vanilla JavaScript, focusing on smooth performance and responsive interaction. It provides a hands-on way to explore algorithmic thinking, making it perfect for students and developers interested in learning about spatial logic and search strategies.',
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
    tagline: 'Instant LoL match statistics delivered to your Discord server.',
    desc: 'This specialized Discord integration provides quick access to player statistics and match history. It fetches live data from the Riot API and presents it clearly within your conversation, allowing communities to track their progress together.',
    overview: [
      'The bot was designed to improve communication in gaming communities by making stats instantly accessible. With simple commands, users can see their recent performance cards, including champion data and gold totals, without needing to switch between apps.',
      'It features robust handling for API interactions, ensuring that data is fetched reliably even during heavy usage. The system is built to provide high-quality visualizations that are easy to read and share, helping players stay informed and connected.',
      'Designed to be lightweight and efficient, the bot provides a stable service for any Discord server. It demonstrates how real-time data can be integrated into social platforms to enhance the group gaming experience and foster competitive growth.',
    ],
    tech: ['Python', 'discord.py', 'Riot API'],
    status: 'Complete',
    hidden: true,
  },
];

export const projects = allProjects.filter(p => !p.hidden);
