// Shields.io "for-the-badge" URL builder — used to keep every badge on this
// site pixel-identical in style to the ones already embedded in the GitHub README.
export function badgeUrl(label: string, color: string, logo?: string, logoColor = "white") {
  const encodedLabel = encodeURIComponent(label);
  const params = new URLSearchParams({ style: "for-the-badge" });
  if (logo) params.set("logo", logo);
  if (logo) params.set("logoColor", logoColor);
  return `https://img.shields.io/badge/${encodedLabel}-${color}?${params.toString()}`;
}

export const socialBadges = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-kathpal/", url: "https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" },
  { label: "GitHub", href: "https://github.com/akk29", url: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
  { label: "Email", href: "mailto:akshatkathpal29@hotmail.com", url: "https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" },
] as const;

export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Python", url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
      { name: "TypeScript", url: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
      { name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Django", url: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
      { name: "Node.js", url: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" },
      { name: "Redis", url: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
      { name: "Apache Kafka", url: "https://img.shields.io/badge/Apache%20Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" },
      { name: "RabbitMQ", url: "https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", url: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "MySQL", url: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
      { name: "MongoDB", url: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", url: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=20232A" },
      { name: "HTML5", url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
      { name: "CSS3", url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
    ],
  },
  {
    category: "Infrastructure & Developer Tools",
    items: [
      { name: "Docker", url: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
      { name: "Kubernetes", url: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
      { name: "AWS", url: "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=111111" },
      { name: "Git", url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
      { name: "GitHub", url: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
      { name: "GitHub Actions", url: "https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" },
      { name: "Ubuntu", url: "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" },
      { name: "macOS", url: "https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white" },
      { name: "VS Code", url: "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" },
      { name: "uv", url: "https://img.shields.io/badge/uv-6E56CF?style=for-the-badge&logo=uv&logoColor=white" },
    ],
  },
  {
    category: "AI & Developer Experience",
    items: [
      { name: "Claude", url: "https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white" },
      { name: "CLI", url: "https://img.shields.io/badge/CLI-111827?style=for-the-badge&logo=gnubash&logoColor=white" },
    ],
  },
] as const;

export const employment = [
  {
    company: "Original4Sure – Evato Technologies",
    tag: "B2B",
    location: "Gurugram, IND",
    role: "Software Engineer – Backend",
    stack: ["NodeJS", "TypeScript", "Python", "MongoDB", "Redis", "Kafka", "AWS", "Docker", "Kubernetes"],
    bullets: [
      "Delivered instant reward redemption as a key product milestone by fully automating payouts through Cashfree, replacing manual and offline payment workflows and increasing operational excellence. This enabled companies to offer real-time rewards at scale & directly drove increased client adoption and inbound sales interest.",
      "Implemented an event-driven architecture using Kafka to replace async API calls, reducing request latency by ~40% and improving service decoupling across microservices. Offloaded background job processing to a centralized, queue-driven service with a configurable control switch, enabling load leveling between producers and consumers, boosting throughput, and significantly reducing synchronous request response times.",
      "Refactored the platform from a single-tenant model to a multi-tenant architecture using feature-based configuration to enable dynamic, client-specific behavior. This redesign significantly accelerated client onboarding and improved white-label mobile app delivery speed by ~80%.",
      "Implemented multiple authentication & messaging providers to optimize billing costs and improve delivery reliability across regions. Added country-specific provider routing with intelligent fallback to a global vendor based on delivery attempts, also implemented rate limiting to prevent abuse, ensuring high availability and consistent user authentication experience.",
      "Implemented a multilingual translation framework across the application to support multi-geographic adoption. Designed dynamic configuration for persisting and serving localized content across multiple languages. Introduced a caching layer to optimize read-heavy access patterns, significantly reducing database load and improving response latency.",
    ],
  },
  {
    company: "Jetbrain Robotics – M&A – Solaris Robots",
    tag: "B2B",
    location: "Gurugram, IND",
    role: "Senior Software Engineer – Backend",
    stack: ["NodeJS", "JavaScript", "React", "MongoDB", "Redis", "AWS"],
    bullets: [
      "Led and mentored a team of 3 junior engineers to architect and deliver a full-scale modernization of a legacy .NET monolith into a decoupled web platform. Rebuilt the system end-to-end using React and Node.js, enforcing SOLID design principles and OOPS patterns, and delivered core platform capabilities including authentication, media services, deployment workflows, device health reporting, and large-scale legacy data migration.",
    ],
  },
  {
    company: "Squareboat",
    tag: "B2C",
    location: "Gurugram, IND",
    role: "Software Engineer – Full Stack",
    stack: ["NodeJS", "JavaScript", "React", "AWS", "MySQL"],
    bullets: [
      "Streamlined customer data onboarding by implementing end-to-end digital workflows for digitization & centralized dashboard.",
      "Optimized server performance & reduced network bandwidth usage by migrating media uploads to S3 using pre-signed upload URLs.",
      "Built a scalable reporting service using batch processing to generate metrics, insights, and evolving requirements for active users.",
      "Integrated Vonage APIs to enable in-app video calling during the COVID-19 period, increasing engagement across active user base.",
    ],
  },
] as const;

// Brand colors reused for employment stack badges, so they read consistently
// with the Technology section even though this exact grouping isn't in the README.
const stackColors: Record<string, string> = {
  NodeJS: "339933", TypeScript: "3178C6", Python: "3776AB", MongoDB: "47A248",
  Redis: "DC382D", Kafka: "231F20", AWS: "FF9900", Docker: "2496ED",
  Kubernetes: "326CE5", JavaScript: "F7DF1E", React: "61DAFB", MySQL: "4479A1",
};
const stackLogos: Record<string, string> = {
  NodeJS: "node.js", TypeScript: "typescript", Python: "python", MongoDB: "mongodb",
  Redis: "redis", Kafka: "apachekafka", AWS: "amazonaws", Docker: "docker",
  Kubernetes: "kubernetes", JavaScript: "javascript", React: "react", MySQL: "mysql",
};
export function stackBadgeUrl(name: string) {
  const color = stackColors[name] ?? "333333";
  const logo = stackLogos[name];
  const logoColor = name === "JavaScript" || name === "AWS" ? "111111" : "white";
  return badgeUrl(name, color, logo, logoColor);
}

export const openSource = [  
  {
    name: "Gitpy",
    title: "Python Package to GitHub REST API",
    url: "https://github.com/akk29/gitpy",
    description:
      "A Python library that simplifies automation and management of GitHub resources by providing a clean, developer-friendly interface over the GitHub REST API.",
  },
  {
    name: "Career-finder",
    title: "Job Recruitment Portal",
    url: "https://github.com/akk29/career-finder",
    description:
      "A recruitment platform that connects recruiters and job seekers by streamlining job discovery, applications, and hiring workflows through a centralized system.",
  },
  {
    name: "Kisanmill",
    title: "Direct food distribution for farmers",
    url: "https://github.com/akk29/kisanmill",
    description:
      "A B2C & C2C platform designed for the agriculture sector to eliminate middlemen, enabling direct transactions between farmers and buyers to maximize earnings and efficiency.",
  },
] as const;

export const education = {
  school: "Lovely Professional University",
  location: "Phagwara, IND",
  degree: "Bachelor of Technology · Computer Science & Engineering",
  period: "Aug 2015 – Jan 2020",
  coursework:
    "Data Structures & Algorithms, Discrete Mathematics, Probability & Statistics, DBMS, Computer Architecture, Computer Networks, Operating Systems, Compiler Design, Automata Theory & Artificial Intelligence.",
};

export const githubUsername = "akk29";

