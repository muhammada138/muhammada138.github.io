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
    images: ['/league-coach-1.png', '/league-coach-2.png'],
    meta: 'React · FastAPI · Riot API · Groq · Python',
    tagline: 'Coaching grounded in your actual games, not global averages.',
    desc: 'AI-powered League of Legends coaching app that pulls your last 10 ranked games, benchmarks your stats against the other 9 players in each lobby, and generates specific, ranked improvement tips — not generic advice.',
    overview: [
      'Lobby-relative analysis — compares your KDA, CS/min, vision score, damage, and gold against per-game lobby averages rather than global benchmarks, so the feedback reflects the actual game you played.',
      'Coaching pipeline: fetches 10 ranked games in parallel, computes a 0–100 performance score by ranking you within each 10-player lobby, identifies your most consistently "diffed" lane, then sends structured per-game deltas to LLaMA 3.3 70B for grouped, actionable tips.',
      'Live game scoreboard with expandable 10-player views, real-time rank lookups, LP trend graph, and a 5-factor win prediction model.',
      'In-app AI chat for follow-up questions, saved profiles for quick access, and a React 19 + Tailwind frontend backed by an async FastAPI server with TTL caching and rate-limit handling.',
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
    desc: 'AI-powered personal finance tracker that connects to your real bank account through Plaid, automatically categorizes every transaction via LLaMA 3.3 70B, and lets you chat with an LLM that knows your actual spending history.',
    overview: [
      'Bank connection via Plaid Link — no manual entry, no CSV imports. Pulls live transaction history directly from your accounts.',
      'LLaMA 3.3 70B on Groq categorizes each transaction (food, transport, shopping, income, etc.) and populates a breakdown dashboard with stat cards, sortable tables, and a Recharts bar chart by category.',
      'Conversational AI chat grounded in your actual transactions — ask "how much did I spend on food last month?" and get a direct answer, not a generic response.',
      'Session persistence across refreshes. Backend deployed on Render, frontend on Netlify, built with React 18 + Vite and a FastAPI Python server.',
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
    desc: 'Interactive grid-based visualizer for A*, Dijkstra\'s, and BFS — built in vanilla JavaScript with no libraries, where every node visit and path reconstruction is animated in real time.',
    overview: [
      'Renders a 40×40 interactive grid. Click or drag to place walls, reposition the start and end nodes, then run any of the three algorithms.',
      'Each algorithm animates its traversal step-by-step at 60fps — visited nodes light up as the frontier expands, then the shortest path traces back from end to start.',
      'A* uses a Manhattan distance heuristic; Dijkstra\'s guarantees the shortest path through weighted traversal; BFS finds the fewest hops on an unweighted grid.',
      'Built entirely in vanilla JS — no libraries, no build tools. Grid state, animation queuing, and input handling all managed by hand.',
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
    desc: 'Discord bot that fetches and formats match history for any summoner via the Riot Games API — slash commands, rich embeds, and always-on deployment on a Raspberry Pi.',
    overview: [
      'Slash commands to look up any summoner by Riot ID — returns their last N ranked games without leaving the Discord server.',
      'Each match formats into a rich embed with champion, role, KDA, CS, vision score, win/loss, and match duration.',
      'Riot API rate limiting handled with exponential backoff — no dropped requests during peak usage.',
      'Self-hosted on a Raspberry Pi for 24/7 availability without cloud infrastructure costs.',
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
    desc: 'Minimal personal productivity dashboard — notes, todos, and progress tracking in a single offline tab, with no server, no login, and no setup.',
    overview: [
      'All-in-one tab: notes editor, todo list, and a simple progress tracker living together without switching apps or accounts.',
      'Fully offline — all data persists to localStorage. Nothing leaves the browser, nothing requires a backend.',
      'Keyboard-first design with shortcuts for common actions, dark mode, and a clean layout designed to replace the new tab page.',
      'Built in vanilla JS with no build step — open the file and it works.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    status: 'Complete',
  },
];
