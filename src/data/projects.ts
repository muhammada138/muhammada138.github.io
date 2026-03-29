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
      'Most coaching tools hand you a spreadsheet of numbers and leave the interpretation to you. Rift IQ takes a different approach: instead of comparing you to global averages, it benchmarks your performance against the nine other players in each specific game you played. Your CS/min, KDA, vision score, damage, and gold are all measured relative to that lobby — so the feedback is grounded in the actual game, not some abstract ranked average.',
      'The coaching pipeline fetches your last 10 ranked games in parallel via the Riot API, computes a 0–100 performance score for each by ranking you within the 10-player lobby, and identifies which lane most consistently "diffed" you across recent games. That structured data — per-game deltas between your stats and lobby averages — gets sent to LLaMA 3.3 70B on Groq with a strict system prompt that enforces grouped, actionable tips in second person. No filler. The model talks directly to you about the specific games it analyzed.',
      'Beyond the core analysis, the app includes a live game scoreboard with expandable 10-player views, real-time rank lookups, an LP trend graph estimated from recent results, and a 5-factor win prediction model. There\'s an in-app AI chat panel for follow-up questions, saved profile bookmarks for quick access, and a League-themed UI with dark and light mode. The backend is an async FastAPI server with TTL caching and rate-limit handling to stay within Riot\'s API constraints.',
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
      'Clarity connects directly to your bank through Plaid Link — no manual entry, no CSV exports, no copy-pasting from statements. Once linked, it pulls your full transaction history and hands it off to LLaMA 3.3 70B on Groq, which categorizes every transaction automatically: food, transport, shopping, income, subscriptions, and more. The result is a live dashboard with stat cards, a Recharts bar chart broken down by category, and sortable transaction tables — all populated from your real accounts.',
      'The part that makes it genuinely useful is the chat interface. Instead of staring at charts and doing the math yourself, you can ask questions in plain language — "how much did I spend eating out last month?" or "what\'s my biggest expense category this week?" — and get a direct, grounded answer. The LLM has access to your actual transaction data, so it\'s not guessing or giving generic budgeting advice. It\'s answering about your specific spending.',
      'Session state persists across refreshes so your linked account and analysis stay intact between visits. The backend runs on FastAPI deployed to Render; the frontend is React 18 with Vite, deployed on Netlify.',
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
      'The visualizer renders a 40×40 interactive grid where you can click or drag to place walls, reposition the start and end nodes, and then run any of the three algorithms. Each one animates its traversal step-by-step — visited nodes light up as the frontier expands across the grid, then the shortest path traces back from the end node to the start once the algorithm finishes.',
      'The three algorithms each work differently and the visualization makes that visible. A* uses a Manhattan distance heuristic to prioritize nodes closer to the goal, so its frontier reaches toward the target rather than spreading out uniformly. Dijkstra\'s explores exhaustively by weighted cost and guarantees the shortest path regardless of layout. BFS fans out level by level and finds the path with the fewest hops on an unweighted grid — you can watch each approach carve a different shape through the same maze.',
      'The whole thing is built in vanilla JavaScript with no libraries and no build step. Grid state, animation queuing, frame timing, and all input handling are managed by hand. It was an exercise in understanding the algorithms deeply enough to implement and visualize them from scratch.',
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
      'The bot responds to slash commands with a formatted breakdown of any summoner\'s recent ranked games — champion, role, KDA, CS, vision score, win/loss, and match duration, all pulled live from the Riot Games API. No one needs to leave the Discord server or open a browser tab to check on their stats or a teammate\'s.',
      'Riot\'s API has aggressive rate limits, so the bot handles all requests with exponential backoff — if a request gets throttled, it retries with increasing delays rather than dropping the call or flooding the user with errors. It\'s built to stay reliable during peak hours when multiple people in the server might be querying at once.',
      'The bot runs self-hosted on a Raspberry Pi for always-on availability without paying for cloud compute. It stays online 24/7 and responds to commands any time, even while idle.',
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
      'Study Dashboard started as a replacement for the browser new tab page — a single place for notes, todos, and a simple progress tracker that opens instantly and doesn\'t require signing into anything. Everything lives in one tab. There\'s no app to download, no account to create, and no cloud service running behind it.',
      'All data persists to localStorage, which means it survives browser restarts and works completely offline. Nothing ever leaves the device. The tradeoff is intentional — for a tool used daily on a single machine, the overhead of a backend and sync layer would just be friction.',
      'The interface is keyboard-first, with shortcuts for common actions and a minimal layout designed to stay out of the way. Built in vanilla JS with no build tools — the file opens directly in the browser and works.',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
    status: 'Complete',
  },
];
