export const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Gaming", href: "gaming" },
  { label: "Travel", href: "travel" },
  { label: "YouTube", href: "youtube" },
  { label: "Coding", href: "coding" },
  { label: "Contact", href: "contact" },
];

export const HERO_ROLES = [
  "Full Stack Engineer",
  "AI Builder",
  "Problem Solver",
  "PUBG Ace Eliminator",
  "Explorer",
  "Content Creator",
];

export const STATS = [
  { num: "350+", label: "LeetCode Solved" },
  { num: "9.21", label: "CGPA" },
  { num: "361", label: "Global Rank CodeChef" },
  { num: "3+", label: "Years Experience" },
];

export const SKILLS = {
  Languages: ["Python", "JavaScript", "C++", "Java", "SQL", "HTML/CSS"],
  Frameworks: ["React.js", "Django", "FastAPI", "PySpark", "NumPy", "Pandas"],
  "Databases & Cloud": ["MySQL", "MongoDB", "Snowflake", "AWS EC2", "Docker", "Render", "ChromaDB"],
  "AI & APIs": ["OpenAI API", "Hugging Face", "Ollama", "Llama 3", "RAG", "Twilio", "WATI"],
};

export const IDENTITY_TAGS = [
  { icon: "⚙️", label: "Dev", style: "dev" },
  { icon: "🎮", label: "Gamer", style: "gamer" },
  { icon: "✈️", label: "Traveller", style: "travel" },
  { icon: "🏏", label: "Cricket", style: "cricket" },
  { icon: "📺", label: "Content Creator", style: "yt" },
];

export const PROJECTS = [
  {
    type: "AI / RAG Architecture",
    name: "IT Support Chatbot",
    desc: "Private IT support RAG chatbot with semantic search using ChromaDB and local LLM hosting via Ollama (Llama 3). Deployed on AWS EC2 for low-latency query handling.",
    stack: ["React", "FastAPI", "ChromaDB", "Llama 3", "AWS EC2"],
    live: "#",
    github: "https://github.com/8bit-Manash",
  },
  {
    type: "Full Stack + AI",
    name: "AI-Enhanced Notes App",
    desc: "Full-stack notes app with AI text summarization via Hugging Face transformer. Lazy loading optimization, deployed on Vercel + Render.",
    stack: ["ReactJS", "FastAPI", "MongoDB", "Hugging Face", "Tailwind"],
    live: "#",
    github: "https://github.com/8bit-Manash",
  },
  {
    type: "Productivity",
    name: "Daily Habit & Goal Tracker",
    desc: "Modern React 18 habit tracker with interactive Recharts visualizations. Replaced Excel-based tracking with a beautiful web interface.",
    stack: ["React 18", "Vite", "Recharts", "CSS3"],
    live: "#",
    github: "https://github.com/8bit-Manash",
  },
  {
    type: "Security Tool",
    name: "Custom Password Builder",
    desc: "Customizable password generator with character type selection and length configuration for secure, flexible password creation.",
    stack: ["ReactJS", "Tailwind CSS", "JavaScript"],
    live: "#",
    github: "https://github.com/8bit-Manash",
  },
  {
    type: "Avo Automation — Work",
    name: "AvoRecon / Avo Release-IQ",
    desc: "Copilot Studio AI agent for automated ADO release notes. Power Automate + WIQL queries, categorized work item tables, Claude Sonnet integration.",
    stack: ["Copilot Studio", "Power Automate", "Azure DevOps", "Claude Sonnet"],
    live: null,
    github: null,
    accentColor: "#7b2fff",
  },
  {
    type: "LLM Engineering",
    name: "IT Helpdesk LLM (Kaggle)",
    desc: "Custom LLM trained on 1,000-pair IT Q&A dataset on Kaggle T4 GPU. Custom PyTorch architecture with tokenizer and trained weights.",
    stack: ["PyTorch", "Kaggle GPU", "Hugging Face", "Python"],
    live: "https://www.kaggle.com/manashmadhukar20",
    github: "https://github.com/8bit-Manash",
    accentColor: "#00f5ff",
  },
];

export const GAMES = [
  {
    icon: "🔫",
    title: "PUBG MOBILE",
    rank: "⚡ ACE ELIMINATOR",
    desc: "Clutch player. IQ-based rotation, zone control, and high-pressure gunfights. Peak in ranked solo/squad.",
    rankColor: "#ffd700",
    borderColor: "rgba(255,165,0,0.35)",
  },
  {
    icon: "💀",
    title: "CALL OF DUTY",
    rank: "RANKED PLAYER",
    desc: "Fast-paced tactical gameplay. Hardpoint specialist with aggressive push mechanics and team coordination.",
    rankColor: "#00f5ff",
    borderColor: "rgba(0,245,255,0.3)",
  },
  {
    icon: "🎯",
    title: "VALORANT",
    rank: "COMPETITIVE",
    desc: "Precision aiming and agent utility. Map knowledge and post-plant mentality in competitive queues.",
    rankColor: "#ff4655",
    borderColor: "rgba(255,70,85,0.3)",
  },
  {
    icon: "🏏",
    title: "CRICKET",
    rank: "ACTIVE PLAYER",
    desc: "Off the screen and onto the pitch. Strategy meets athleticism — same energy, different battlefield.",
    rankColor: "#ffd700",
    borderColor: "rgba(255,215,0,0.3)",
  },
];

export const TRAVEL_PLACES = [
  { emoji: "🏔️", place: "Mountains", sub: "Himalayas & Western Ghats" },
  { emoji: "🏖️", place: "Beaches", sub: "South India Coastline" },
  { emoji: "🏛️", place: "Heritage", sub: "Temples & History Trails" },
  { emoji: "🌆", place: "Cities", sub: "Bengaluru, Mumbai, Delhi" },
  { emoji: "🛤️", place: "Road Trips", sub: "Random drives, best vibes" },
  { emoji: "🗺️", place: "Next Destination", sub: "TBD — always planning", highlight: true },
];

export const YT_TOPICS = [
  { icon: "💻", title: "Tech & Coding", sub: "Tutorials & Tips" },
  { icon: "✈️", title: "Travel Vlogs", sub: "Exploring India" },
  { icon: "🎮", title: "Gaming", sub: "PUBG Clips & Gameplays" },
  { icon: "🤖", title: "AI & Tools", sub: "Gyaan (Knowledge) Shots" },
];

export const CODING_PLATFORMS = [
  {
    icon: "🟨", name: "LeetCode", stat: "350+", sub: "Problems Solved",
    note: "Rank 3155 — Weekly Contest 336", color: "#ffa116",
    url: "https://leetcode.com/u/manashmadhukar20/", borderColor: "rgba(255,161,22,0.3)",
  },
  {
    icon: "🟩", name: "CodeChef", stat: "1687", sub: "Max Rating",
    note: "Global Rank 361 — May Cook-Off 2022", color: "#67a84c",
    url: "https://www.codechef.com/users/manashmadhukar", borderColor: "rgba(84,148,67,0.3)",
  },
  {
    icon: "🟢", name: "GeeksForGeeks", stat: "200+", sub: "Problems Solved",
    note: "", color: "#2bbc64",
    url: "https://www.geeksforgeeks.org/user/manashmadhukar", borderColor: "rgba(43,188,100,0.3)",
  },
  {
    icon: "🔵", name: "Codeforces", stat: "Active", sub: "Competitive Programmer",
    note: "", color: "#0077ff",
    url: "https://codeforces.com/profile/manashmadhukar", borderColor: "rgba(0,119,255,0.3)",
  },
  {
    icon: "⚡", name: "InterviewBit", stat: "Active", sub: "Interview Prep",
    note: "", color: "#00c0dd",
    url: "https://www.interviewbit.com/profile/manash-madhukar", borderColor: "rgba(0,192,221,0.3)",
  },
  {
    icon: "🐙", name: "GitHub", stat: "8bit-Manash", sub: "Open Source & Projects",
    note: "", color: "#e0e0e0",
    url: "https://github.com/8bit-Manash", borderColor: "rgba(255,255,255,0.15)",
  },
];

export const CONTACT_LINKS = [
  { icon: "📧", label: "Email", value: "manastiwary2067@gmail.com", href: "mailto:manastiwary2067@gmail.com" },
  { icon: "🐙", label: "GitHub", value: "8bit-Manash", href: "https://github.com/8bit-Manash" },
  { icon: "💼", label: "LinkedIn", value: "manash-madhukar-4311a8200", href: "https://www.linkedin.com/in/manash-madhukar-4311a8200/" },
  { icon: "▶️", label: "YouTube", value: "@gyaanshots-no1", href: "https://www.youtube.com/@gyaanshots-no1" },
];
