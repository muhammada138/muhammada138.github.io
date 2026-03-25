export type Project = {
  slug: string;
  title: string;
  github: string;
  live?: string;
  meta: string;
  tagline: string;
  desc: string;
  overview: string[];
  tech: string[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: 'pathfinding-visualizer',
    title: 'Pathfinding Visualizer',
    github: 'https://github.com/muhammada138/pathfinding-visualizer',
    meta: 'JavaScript · HTML · CSS · 6 weeks',
    tagline: 'See how algorithms think.',
    desc: 'Interactive visualizer for A*, Dijkstra, and BFS. Real-time traversal on a 40×40 grid at 60fps.',
    overview: [
      'Renders a 40×40 interactive grid — draw walls, place start/end nodes, then watch.',
      'Supports A*, Dijkstra\'s, and BFS, each with animated step-by-step traversal.',
      'Built with vanilla JS — no libraries, no frameworks, state managed by hand.',
      'Highlights the shortest path after traversal completes.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS'],
    status: 'Complete',
  },
  {
    slug: 'league-stats-bot',
    title: 'League Stats Bot',
    github: 'https://github.com/muhammada138/league-stats-bot',
    meta: 'Python · discord.py · Riot API · 3 weeks',
    tagline: 'Stats, without leaving Discord.',
    desc: 'Discord bot that fetches and summarizes player match history via the Riot Games API.',
    overview: [
      'Slash commands to pull recent match data for any summoner by name.',
      'Displays KDA, champion, role, win/loss, and match duration in a formatted embed.',
      'Handles Riot API rate limiting with exponential backoff.',
      'Deployed on a Raspberry Pi for always-on availability.',
    ],
    tech: ['Python', 'discord.py', 'Riot API'],
    status: 'Complete',
  },
  {
    slug: 'clarity-finance-tracker',
    title: 'Clarity Finance Tracker',
    github: 'https://github.com/muhammada138/clarity-finance-tracker',
    live: 'https://clarity-finance-tracker.netlify.app',
    meta: 'React · FastAPI · Plaid · Groq · Python',
    tagline: 'Your bank account, finally explained.',
    desc: 'AI-powered personal finance tracker that connects to your bank via Plaid and uses an LLM to categorize spending and surface insights.',
    overview: [
      'Connects to real bank accounts through Plaid Link — retrieves live transaction history.',
      'LLM (Llama 3.3 70B via Groq) automatically categorizes transactions and generates spending breakdowns.',
      'Dashboard with spending visualization charts and a chat interface for querying your finances.',
      'React + Vite frontend backed by a FastAPI Python server.',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Plaid API', 'Groq', 'Vite'],
    status: 'Complete',
  },
  {
    slug: 'study-dashboard',
    title: 'Study Dashboard',
    github: 'https://github.com/muhammada138/study-dashboard',
    meta: 'Vanilla JS · localStorage · 2 weeks',
    tagline: 'A personal corner of the browser.',
    desc: 'Lightweight personal web app for tracking notes, progress, and ideas. Fully offline.',
    overview: [
      'Notes, todos, and a simple progress tracker — all in one tab.',
      'Everything persists to localStorage. No server, no account, no setup.',
      'Dark mode, keyboard shortcuts, and a minimal layout.',
      'Designed to replace the new tab page.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    status: 'Complete',
  },
];
