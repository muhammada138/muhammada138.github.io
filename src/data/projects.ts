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
};

export const projects: Project[] = [
  {
    slug: 'league-coach',
    title: 'Rift IQ',
    github: 'https://github.com/muhammada138/league-coach',
    images: ['/league-coach-1.png', '/league-coach-2.png', '/league-coach-3.png'],
    meta: 'React · FastAPI · Riot API · Groq · Python',
    tagline: 'Coaching grounded in your actual games, not global averages.',
    desc: 'AI-powered League of Legends coaching app that pulls your last 10 ranked games, benchmarks your stats against the other 9 players in each lobby, and generates specific improvement tips.',
    overview: [
      'Most coaching tools give you a wall of numbers and leave the interpretation to you. Rift IQ tries to do something more useful: instead of comparing you to global averages, it looks at how you performed relative to the nine other players in that specific game. Your CS, KDA, vision score, damage, and gold all get measured against the actual lobby you were in, so the feedback means something.',
      'The coaching pipeline fetches your last 10 ranked games in parallel, scores each one by ranking you within the 10-player lobby on a 0 to 100 scale, then figures out which lane most consistently outperformed you across recent games. All of that gets packaged into a structured prompt and sent to LLaMA 3.3 70B on Groq with a system prompt that keeps the tips specific and actionable. No generic advice about warding more. It talks about your games.',
      'The app also has a live game scoreboard, real-time rank lookups, an LP trend graph built from recent results, and a win prediction model. There is an in-app chat for follow-up questions, bookmarked profiles for quick access, and the whole thing runs on an async FastAPI backend with TTL caching to stay within Riot\'s rate limits.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Riot API', 'Groq', 'Vite', 'Tailwind CSS'],
    status: 'In Progress',
  },
  {
    slug: 'clarity-finance-tracker',
    title: 'Clarity Finance Tracker',
    github: 'https://github.com/muhammada138/clarity-finance-tracker',
    live: 'https://clarity-finance-tracker.netlify.app',
    images: ['/clarity-1.png', '/clarity-2.png'],
    meta: 'React · FastAPI · Plaid · Groq · Python',
    tagline: 'Connect your bank. Ask it anything.',
    desc: 'Personal finance tracker that connects to your real bank account through Plaid, categorizes every transaction with an LLM, and lets you ask questions about your spending in plain language.',
    overview: [
      'Clarity connects to your bank through Plaid Link, so there is no manual entry or CSV uploading. Once linked it pulls your full transaction history and runs each transaction through LLaMA 3.3 70B on Groq to categorize it automatically. The result is a dashboard with a spending breakdown by category, sortable transaction tables, and stat cards that update based on your real accounts.',
      'The chat interface is what makes it actually useful. Instead of trying to read charts and do the math yourself, you can just ask: how much did I spend on food last month, what is my biggest category this week, am I spending more than last month. The model has your actual transaction data so it answers about your specific history, not some generic budgeting template.',
      'Session state persists across refreshes so you stay logged in and your analysis does not disappear. The backend runs on FastAPI deployed to Render and the frontend is React 18 with Vite, hosted on Netlify.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Plaid API', 'Groq', 'Vite', 'Recharts'],
    status: 'Complete',
  },
  {
    slug: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    github: 'https://github.com/muhammada138/pathfinding-visualizer',
    meta: 'JavaScript · HTML · CSS',
    tagline: 'Watch algorithms find their way.',
    desc: 'Interactive grid-based visualizer for A*, Dijkstra\'s, and BFS built in vanilla JavaScript, where every node visit and path reconstruction is animated in real time.',
    overview: [
      'You get a 40 by 40 grid where you can draw walls, move the start and end nodes around, and then run whichever algorithm you want to watch. Each one animates step by step as it runs. Visited nodes light up as the frontier spreads across the grid, and once the algorithm finishes the shortest path traces back from the end to the start.',
      'The three algorithms each behave differently and the visualization makes that obvious. A* pushes toward the goal using a Manhattan distance heuristic so its frontier looks directional rather than circular. Dijkstra\'s fans out by cost and guarantees the shortest path no matter what the grid looks like. BFS expands level by level and finds the path with the fewest steps. Running all three on the same maze and watching them each carve a different shape through it is the whole point.',
      'Everything is vanilla JavaScript with no libraries and no build step. Grid state, animation timing, and input handling are all managed by hand. I built it to understand the algorithms well enough to implement and visualize them from scratch rather than just reading about them.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'Complete',
  },
  {
    slug: 'league-stats-bot',
    title: 'League Stats Bot',
    github: 'https://github.com/muhammada138/league-stats-bot',
    meta: 'Python · discord.py · Riot API',
    tagline: 'Stats, without leaving Discord.',
    desc: 'Discord bot that pulls match history for any summoner through the Riot API and formats it into rich embeds with slash commands.',
    overview: [
      'The bot responds to slash commands with a breakdown of any summoner\'s recent ranked games. Champion, role, KDA, CS, vision score, win or loss, match duration. All of it pulled live from the Riot API and posted back into the channel so nobody has to open a browser tab or navigate to a third-party site.',
      'Riot\'s API rate limits are aggressive, so the bot handles throttling with exponential backoff. If a request gets blocked it retries with increasing delays instead of failing out or hammering the endpoint. It holds up fine when multiple people in the server are querying at the same time.',
      'It runs self-hosted on a Raspberry Pi so it stays online around the clock without paying for cloud compute. The hardware cost was a one-time thing and the bot has been running continuously since.',
    ],
    tech: ['Python', 'discord.py', 'Riot API'],
    status: 'Complete',
  },
  {
    slug: 'study-dashboard',
    title: 'Study Dashboard',
    github: 'https://github.com/muhammada138/study-dashboard',
    meta: 'Vanilla JS · localStorage',
    tagline: 'A personal corner of the browser.',
    desc: 'Minimal personal productivity dashboard with notes, todos, and progress tracking in a single offline tab. No server, no login, no setup.',
    overview: [
      'Study Dashboard started as a replacement for the browser new tab page. One place for notes, todos, and a progress tracker that opens instantly and does not require signing into anything. No app to install, no account to create, nothing running in the background.',
      'All data lives in localStorage, so it survives browser restarts and works completely offline. Nothing leaves the device. For a tool used on a single machine every day, adding a backend and sync layer would just be extra friction with no real benefit.',
      'The interface is keyboard-first with shortcuts for common actions and a minimal layout that stays out of the way. It is built in vanilla JavaScript with no build tools. Open the file in a browser and it works.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    status: 'Complete',
  },
];
