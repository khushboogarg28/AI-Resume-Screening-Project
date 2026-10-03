// Comprehensive mock data for ResumeIQ demo and offline capability

export const sampleJobs = [
  {
    id: "job-1",
    title: "Senior Full-Stack AI Engineer",
    department: "Engineering",
    company: "ResumeIQ Labs",
    location: "San Francisco, CA (Hybrid)",
    employmentType: "Full-Time",
    experienceRequired: "4+ years",
    educationRequired: "Bachelor's or Master's in Computer Science or related",
    salaryRange: "$145,000 - $185,000",
    description: "We are seeking an experienced Full-Stack AI Engineer to architect high-throughput LLM pipelines, implement reactive frontend user experiences with React, and build resilient Python FastAPI backends. You will collaborate closely with product and data science teams.",
    requiredSkills: ["Python", "FastAPI", "React", "TypeScript", "SQL", "Docker", "Machine Learning"],
    preferredSkills: ["Kubernetes", "PyTorch", "Tailwind CSS", "Redis", "AWS", "CI/CD"],
    createdAt: "2026-09-15",
    status: "Active",
    candidatesCount: 14
  },
  {
    id: "job-2",
    title: "Lead Machine Learning & NLP Scientist",
    department: "AI Research",
    company: "ResumeIQ Labs",
    location: "New York, NY (Remote)",
    employmentType: "Full-Time",
    experienceRequired: "5+ years",
    educationRequired: "Master's or Ph.D. in Computer Science, AI or Statistics",
    salaryRange: "$165,000 - $210,000",
    description: "Lead our NLP and automated reasoning models. Design evaluation benchmarks for resume parsing, semantic embedding matching, and context-aware interview question synthesizers.",
    requiredSkills: ["Python", "PyTorch", "Transformers", "NLP", "Vector Databases", "Prompt Engineering"],
    preferredSkills: ["vLLM", "Hugging Face", "LangChain", "Kubernetes", "MLflow", "Fine-Tuning"],
    createdAt: "2026-09-18",
    status: "Active",
    candidatesCount: 9
  },
  {
    id: "job-3",
    title: "DevOps & Cloud Infrastructure Engineer",
    department: "Platform Engineering",
    company: "ResumeIQ Labs",
    location: "Austin, TX (On-site)",
    employmentType: "Full-Time",
    experienceRequired: "3+ years",
    educationRequired: "Bachelor's in Computer Science or equivalent practical experience",
    salaryRange: "$130,000 - $160,000",
    description: "Responsible for managing multi-tenant Kubernetes clusters, infrastructure as code using Terraform, scalable monitoring with Prometheus/Grafana, and robust automated zero-downtime deployment pipelines.",
    requiredSkills: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "CI/CD"],
    preferredSkills: ["Prometheus", "Helm", "Go", "Python", "ArgoCD", "PostgreSQL"],
    createdAt: "2026-09-20",
    status: "Active",
    candidatesCount: 11
  },
  {
    id: "job-4",
    title: "Technical Product Manager - AI Platforms",
    department: "Product",
    company: "ResumeIQ Labs",
    location: "Remote",
    employmentType: "Full-Time",
    experienceRequired: "4+ years",
    educationRequired: "Bachelor's in Engineering, Business, or related",
    salaryRange: "$140,000 - $175,000",
    description: "Drive product requirements and user feedback loops for the next generation of HR-tech intelligence tools. Partner with engineering leads to deliver explainable AI features.",
    requiredSkills: ["Product Strategy", "Agile / Scrum", "Data Analytics", "API Design", "User Research"],
    preferredSkills: ["SQL", "Figma", "SaaS Metrics", "Generative AI", "A/B Testing"],
    createdAt: "2026-09-22",
    status: "Active",
    candidatesCount: 6
  }
];

export const sampleCandidates = [
  {
    id: "cand-1",
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+1 (415) 890-2341",
    location: "San Jose, CA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    jobId: "job-1",
    jobTitle: "Senior Full-Stack AI Engineer",
    yearsOfExperience: 5.2,
    education: "M.S. Computer Science, Stanford University (2021)",
    currentCompany: "Nexus Innovations",
    currentRole: "Senior Software Engineer",
    matchScore: 92,
    screeningBreakdown: {
      skillsMatch: 95,
      experienceMatch: 92,
      educationMatch: 95,
      projectRelevance: 90,
      certificationRelevance: 85,
      keywordMatch: 94
    },
    skills: {
      matched: ["Python", "FastAPI", "React", "TypeScript", "SQL", "Docker", "Machine Learning", "PyTorch", "Redis"],
      missing: ["Kubernetes"],
      additional: ["GraphQL", "PostgreSQL", "Next.js", "Jest", "Tailwind CSS", "Git", "Webpack"]
    },
    explainableReasoning: [
      {
        type: "positive",
        title: "High Core Skill Overlap",
        description: "Candidate possesses 7 of 7 required technical skills including Python, FastAPI, React, and Machine Learning with proven production usage."
      },
      {
        type: "positive",
        title: "Exceeds Experience Baseline",
        description: "Candidate brings 5.2 years of specialized engineering experience versus the 4-year requirement specified for this role."
      },
      {
        type: "positive",
        title: "Strong Project Relevance",
        description: "Directly architected an automated predictive document parser processing 50K documents/day using FastAPI and React."
      },
      {
        type: "neutral",
        title: "Minor Infrastructure Skill Gap",
        description: "Has extensive Docker container experience but lacks explicit Kubernetes orchestration mentions in resume work history."
      }
    ],
    interviewRecommendation: {
      verdict: "Strongly Recommended",
      score: 94,
      summary: "Exceptional candidate with deep full-stack mastery and hands-on ML integration background. Strong communication indicators in leadership roles.",
      suggestedFocus: "Evaluate Kubernetes architecture understanding and microservices scaling limits."
    },
    interviewQuestions: [
      {
        id: "q-101",
        category: "Technical",
        difficulty: "Hard",
        question: "How do you design a high-concurrency FastAPI service that runs ML inference without blocking asynchronous event loops?",
        rubric: "Look for usage of background workers (Celery/RQ), threading pools with run_in_executor, or dedicated inference microservices."
      },
      {
        id: "q-102",
        category: "Project",
        difficulty: "Medium",
        question: "In your project with Nexus Innovations, what was your latency SLA for document parsing, and how did you profile bottlenecks?",
        rubric: "Candidate should explain caching strategies (Redis), asynchronous I/O, and chunked processing pipelines."
      },
      {
        id: "q-103",
        category: "Skill Gap",
        difficulty: "Medium",
        question: "While you've worked heavily with Docker, how would you migrate and orchestrate that containerized pipeline across a multi-node Kubernetes cluster?",
        rubric: "Assesses container orchestration readiness: Pod specs, Deployments, ConfigMaps, and Ingress routing."
      },
      {
        id: "q-104",
        category: "Behavioral",
        difficulty: "Easy",
        question: "Describe a situation where a model deployed to production gave unexpected low-confidence predictions. How did you coordinate with product stakeholders?",
        rubric: "Evaluates accountability, rapid debugging, rollback strategies, and clear non-technical communication."
      },
      {
        id: "q-105",
        category: "Situational",
        difficulty: "Hard",
        question: "If a spike in resume upload traffic increases response latency by 400%, what immediate triage and long-term architectural steps do you take?",
        rubric: "Tests real-time incident management, rate limiting, autoscaling, queue decoupling, and database connection pooling."
      }
    ],
    status: "Shortlisted",
    appliedDate: "2026-09-21",
    resumeUrl: "/resumes/aarav_sharma.pdf"
  },
  {
    id: "cand-2",
    name: "Elena Rostova",
    email: "elena.rostova@techmail.io",
    phone: "+1 (206) 555-0198",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    jobId: "job-1",
    jobTitle: "Senior Full-Stack AI Engineer",
    yearsOfExperience: 3.8,
    education: "B.S. Software Engineering, University of Washington (2022)",
    currentCompany: "CloudScale Systems",
    currentRole: "Full Stack Developer",
    matchScore: 84,
    screeningBreakdown: {
      skillsMatch: 88,
      experienceMatch: 82,
      educationMatch: 90,
      projectRelevance: 85,
      certificationRelevance: 80,
      keywordMatch: 81
    },
    skills: {
      matched: ["Python", "FastAPI", "React", "TypeScript", "SQL", "Docker"],
      missing: ["Machine Learning", "Kubernetes"],
      additional: ["Vue.js", "Express", "MongoDB", "Tailwind CSS", "AWS Lambda", "Prisma"]
    },
    explainableReasoning: [
      {
        type: "positive",
        title: "Clean Modern Frontend & API Experience",
        description: "Extensive expertise in React, TypeScript, and FastAPI microservices with clean component design."
      },
      {
        type: "neutral",
        title: "Slight Experience Delta",
        description: "Candidate has 3.8 years of total experience, slightly under the target 4+ years threshold, but exhibits fast promotion trajectory."
      },
      {
        type: "negative",
        title: "Missing Applied ML Experience",
        description: "Resume emphasizes web infrastructure and data pipelines rather than hands-on machine learning modeling or vector retrieval."
      }
    ],
    interviewRecommendation: {
      verdict: "Recommended for Interview",
      score: 82,
      summary: "Solid full-stack developer with strong foundational coding standards. Needs assessment on machine learning integration interest and aptitude.",
      suggestedFocus: "Focus on API design, asynchronous Python, and willingness to ramp up on NLP/LLM orchestration."
    },
    interviewQuestions: [
      {
        id: "q-201",
        category: "Technical",
        difficulty: "Medium",
        question: "How do you manage state transitions and asynchronous loading skeletons in complex React applications?",
        rubric: "Assesses understanding of custom hooks, React Query/SWR, optimistic UI, and cache invalidation."
      },
      {
        id: "q-202",
        category: "Skill Gap",
        difficulty: "Hard",
        question: "If you needed to integrate an embeddings model like SentenceTransformers into your FastAPI backend, how would you architect batch generation?",
        rubric: "Tests whether candidate can bridge web engineering into ML inference optimization."
      },
      {
        id: "q-203",
        category: "Project",
        difficulty: "Medium",
        question: "Tell us about a time you optimized a slow SQL query in your CloudScale backend. What indexing or schema changes solved it?",
        rubric: "Looks for EXPLAIN ANALYZE usage, composite indexes, query refactoring, and connection pooling."
      }
    ],
    status: "Interview Recommended",
    appliedDate: "2026-09-22",
    resumeUrl: "/resumes/elena_rostova.pdf"
  },
  {
    id: "cand-3",
    name: "Marcus Vance",
    email: "marcus.vance@aiworks.org",
    phone: "+1 (512) 402-9112",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    jobId: "job-2",
    jobTitle: "Lead Machine Learning & NLP Scientist",
    yearsOfExperience: 6.5,
    education: "Ph.D. in Computer Science (NLP Specialization), UT Austin (2020)",
    currentCompany: "Cognitive Synthetics",
    currentRole: "Lead NLP Researcher",
    matchScore: 96,
    screeningBreakdown: {
      skillsMatch: 98,
      experienceMatch: 95,
      educationMatch: 100,
      projectRelevance: 96,
      certificationRelevance: 90,
      keywordMatch: 97
    },
    skills: {
      matched: ["Python", "PyTorch", "Transformers", "NLP", "Vector Databases", "Prompt Engineering", "vLLM", "Hugging Face"],
      missing: [],
      additional: ["C++", "CUDA", "LangChain", "Qdrant", "LoRA", "DeepSpeed", "Distributed Training"]
    },
    explainableReasoning: [
      {
        type: "positive",
        title: "Exact NLP & Transformer Domain Fit",
        description: "Has published 4 peer-reviewed papers on LLM hallucination reduction and parameter-efficient fine-tuning (PEFT/LoRA)."
      },
      {
        type: "positive",
        title: "Top-Tier Educational Alignment",
        description: "Holds a Ph.D. in NLP from UT Austin, exceeding the minimum educational criteria."
      },
      {
        type: "positive",
        title: "Production Inference Mastery",
        description: "Reduced model latency by 55% using vLLM and TensorRT-LLM on AWS GPU clusters."
      }
    ],
    interviewRecommendation: {
      verdict: "Strongly Recommended",
      score: 98,
      summary: "Elite candidate for AI research lead. Deep academic rigour combined with genuine production GPU optimization credentials.",
      suggestedFocus: "Evaluate cross-functional product collaboration and research-to-production roadmap execution."
    },
    interviewQuestions: [
      {
        id: "q-301",
        category: "Technical",
        difficulty: "Hard",
        question: "Explain the architectural difference between FlashAttention-2 and standard multi-head attention. How does memory tiling prevent GPU SRAM bottlenecks?",
        rubric: "Candidate should explain IO-aware tiling, softmax scaling without HBM round-trips, and backward pass optimizations."
      },
      {
        id: "q-302",
        category: "Project",
        difficulty: "Hard",
        question: "How did you design automated evaluation metrics for hallucination detection across subjective text summaries in your previous role?",
        rubric: "Check for synthetic benchmark design, G-Eval / LLM-as-a-judge consistency, and human annotator calibration."
      },
      {
        id: "q-303",
        category: "Behavioral",
        difficulty: "Medium",
        question: "How do you align cutting-edge open research explorations with tight commercial quarterly release deadlines?",
        rubric: "Demonstrates practical prioritization, POC-driven scoping, and risk management."
      }
    ],
    status: "Shortlisted",
    appliedDate: "2026-09-23",
    resumeUrl: "/resumes/marcus_vance.pdf"
  },
  {
    id: "cand-4",
    name: "Priya Patel",
    email: "priya.patel@devopsglobal.com",
    phone: "+1 (312) 887-3401",
    location: "Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    jobId: "job-3",
    jobTitle: "DevOps & Cloud Infrastructure Engineer",
    yearsOfExperience: 4.1,
    education: "B.Tech Computer Science, NIT Trichy",
    currentCompany: "Fintech Cloud",
    currentRole: "Site Reliability Engineer",
    matchScore: 89,
    screeningBreakdown: {
      skillsMatch: 92,
      experienceMatch: 90,
      educationMatch: 88,
      projectRelevance: 89,
      certificationRelevance: 95,
      keywordMatch: 88
    },
    skills: {
      matched: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "Prometheus", "Helm"],
      missing: ["ArgoCD"],
      additional: ["Ansible", "Grafana", "Bash", "Python", "Vault", "Datadog"]
    },
    explainableReasoning: [
      {
        type: "positive",
        title: "AWS & Kubernetes Mastery",
        description: "Maintained 20+ EKS clusters with automated GitOps workflows and zero unplanned outages over 24 months."
      },
      {
        type: "positive",
        title: "Certified Kubernetes Administrator (CKA)",
        description: "Verified CKA and AWS Solutions Architect Associate certifications."
      },
      {
        type: "neutral",
        title: "GitOps Tooling Variance",
        description: "Used FluxCD rather than ArgoCD for automated reconciliation, but concepts transfer immediately."
      }
    ],
    interviewRecommendation: {
      verdict: "Recommended for Interview",
      score: 90,
      summary: "High quality infrastructure candidate with real high-availability production experience.",
      suggestedFocus: "Test automated incident recovery, secret management, and cost optimization practices."
    },
    interviewQuestions: [
      {
        id: "q-401",
        category: "Technical",
        difficulty: "Hard",
        question: "How do you handle zero-downtime rolling updates in Kubernetes when database migrations require non-backwards-compatible schema changes?",
        rubric: "Look for expand/contract (two-phase) schema migrations, blue/green deployments, and feature flags."
      },
      {
        id: "q-402",
        category: "Situational",
        difficulty: "Medium",
        question: "An alert fires indicating that pod CPU throttling is occurring across 4 critical services while node CPU is at 45%. What do you investigate?",
        rubric: "Tests deep understanding of CFS quotas, CPU limits vs requests, and thread pool contention."
      }
    ],
    status: "Interviewed",
    appliedDate: "2026-09-20",
    resumeUrl: "/resumes/priya_patel.pdf"
  },
  {
    id: "cand-5",
    name: "Jordan Lee",
    email: "jordan.lee@productlab.co",
    phone: "+1 (617) 992-1200",
    location: "Boston, MA",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    jobId: "job-4",
    jobTitle: "Technical Product Manager - AI Platforms",
    yearsOfExperience: 4.8,
    education: "B.S. Cognitive Science & Economics, Brown University",
    currentCompany: "SaaS Matrix",
    currentRole: "Product Manager",
    matchScore: 86,
    screeningBreakdown: {
      skillsMatch: 88,
      experienceMatch: 90,
      educationMatch: 85,
      projectRelevance: 87,
      certificationRelevance: 80,
      keywordMatch: 84
    },
    skills: {
      matched: ["Product Strategy", "Agile / Scrum", "Data Analytics", "API Design", "User Research", "SQL", "Figma"],
      missing: ["Generative AI"],
      additional: ["Mixpanel", "Jira", "Market Analysis", "Customer Discovery", "PRD Authoring"]
    },
    explainableReasoning: [
      {
        type: "positive",
        title: "Strong Technical Product Track Record",
        description: "Shipped 3 major enterprise B2B workflow products from zero to $2M ARR with high CSAT."
      },
      {
        type: "neutral",
        title: "Emerging AI Feature Exposure",
        description: "Product roadmap was traditional SaaS analytics rather than autonomous agent or LLM fine-tuning pipelines."
      }
    ],
    interviewRecommendation: {
      verdict: "Recommended for Interview",
      score: 85,
      summary: "Exceptional product fundamentals and recruiter empathy. Needs to demonstrate quick intuition on AI UX paradigms.",
      suggestedFocus: "Inquire about designing products with non-deterministic AI outputs and trust building."
    },
    interviewQuestions: [
      {
        id: "q-501",
        category: "Situational",
        difficulty: "Hard",
        question: "When an AI feature outputs probabilistic recommendations (e.g. candidate match scores), how do you design the interface to prevent user over-reliance and explain model decisions?",
        rubric: "Evaluates explainable AI design, confidence intervals, clear evidence callouts, and user control."
      }
    ],
    status: "Shortlisted",
    appliedDate: "2026-09-24",
    resumeUrl: "/resumes/jordan_lee.pdf"
  },
  {
    id: "cand-6",
    name: "David Kim",
    email: "david.kim@webcraft.net",
    phone: "+1 (408) 321-9988",
    location: "Sunnyvale, CA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    jobId: "job-1",
    jobTitle: "Senior Full-Stack AI Engineer",
    yearsOfExperience: 1.8,
    education: "B.S. Information Systems, San Jose State (2024)",
    currentCompany: "Junior Web Devs Inc",
    currentRole: "Associate Web Developer",
    matchScore: 61,
    screeningBreakdown: {
      skillsMatch: 64,
      experienceMatch: 45,
      educationMatch: 75,
      projectRelevance: 62,
      certificationRelevance: 60,
      keywordMatch: 68
    },
    skills: {
      matched: ["React", "TypeScript", "SQL"],
      missing: ["Python", "FastAPI", "Docker", "Machine Learning"],
      additional: ["HTML5", "CSS3", "jQuery", "Bootstrap", "Git"]
    },
    explainableReasoning: [
      {
        type: "negative",
        title: "Significant Experience Gap",
        description: "Candidate has 1.8 years of total experience while the senior role requires a minimum of 4+ years."
      },
      {
        type: "negative",
        title: "Missing Key Backend & AI Stack",
        description: "Resume contains no evidence of Python, FastAPI, Docker, or Machine Learning experience."
      },
      {
        type: "neutral",
        title: "Frontend Foundations Present",
        description: "Demonstrates basic proficiency in React and TypeScript on client-side projects."
      }
    ],
    interviewRecommendation: {
      verdict: "Not Recommended for Senior Role",
      score: 58,
      summary: "Talented junior developer, but falls substantially short of senior architectural expectations and core backend requirements.",
      suggestedFocus: "Consider retaining resume for upcoming junior or entry-level web developer openings."
    },
    interviewQuestions: [],
    status: "Rejected",
    appliedDate: "2026-09-22",
    resumeUrl: "/resumes/david_kim.pdf"
  }
];

export const platformAnalytics = {
  totalCandidates: 46,
  resumesScreened: 42,
  shortlistedCount: 19,
  interviewsRecommendedCount: 24,
  averageMatchScore: 81.4,
  screeningAccuracy: 95.8,
  timeSavedPercent: 71.5,
  screeningTrends: [
    { date: "Sep 20", screened: 5, shortlisted: 2, avgScore: 78 },
    { date: "Sep 21", screened: 8, shortlisted: 4, avgScore: 82 },
    { date: "Sep 22", screened: 11, shortlisted: 5, avgScore: 84 },
    { date: "Sep 23", screened: 7, shortlisted: 3, avgScore: 79 },
    { date: "Sep 24", screened: 9, shortlisted: 4, avgScore: 83 },
    { date: "Sep 25", screened: 14, shortlisted: 7, avgScore: 86 },
    { date: "Sep 26", screened: 12, shortlisted: 6, avgScore: 85 }
  ],
  matchScoreDistribution: [
    { range: "< 50%", count: 2, color: "#f43f5e" },
    { range: "50-69%", count: 6, color: "#fb923c" },
    { range: "70-79%", count: 12, color: "#facc15" },
    { range: "80-89%", count: 16, color: "#38bdf8" },
    { range: "90-100%", count: 10, color: "#4ade80" }
  ],
  topSkillsDistribution: [
    { skill: "Python", count: 34, percentage: 81 },
    { skill: "React", count: 29, percentage: 69 },
    { skill: "SQL", count: 28, percentage: 66 },
    { skill: "Docker", count: 25, percentage: 59 },
    { skill: "TypeScript", count: 22, percentage: 52 },
    { skill: "FastAPI", count: 19, percentage: 45 },
    { skill: "Machine Learning", count: 18, percentage: 42 },
    { skill: "Kubernetes", count: 14, percentage: 33 }
  ],
  commonSkillGaps: [
    { skill: "Kubernetes", missingCount: 16, impact: "High" },
    { skill: "Machine Learning", missingCount: 12, impact: "Critical" },
    { skill: "ArgoCD / GitOps", missingCount: 9, impact: "Medium" },
    { skill: "Distributed Caching (Redis)", missingCount: 7, impact: "Low" }
  ],
  statusBreakdown: [
    { name: "Shortlisted", value: 19, color: "#10b981" },
    { name: "Interview Recommended", value: 12, color: "#6366f1" },
    { name: "Interviewed", value: 6, color: "#06b6d4" },
    { name: "Screening", value: 4, color: "#f59e0b" },
    { name: "Rejected", value: 5, color: "#f43f5e" }
  ]
};

export const sampleNotifications = [
  {
    id: "notif-1",
    title: "Screening Complete",
    message: "Aarav Sharma matched Senior Full-Stack AI Engineer with 92% score.",
    type: "success",
    timestamp: "10 minutes ago",
    read: false
  },
  {
    id: "notif-2",
    title: "Interview Recommended",
    message: "AI generated 5 personalized questions for Marcus Vance (Lead NLP Scientist).",
    type: "info",
    timestamp: "45 minutes ago",
    read: false
  },
  {
    id: "notif-3",
    title: "Resume Uploaded",
    message: "3 new resumes successfully parsed and indexed for Cloud DevOps role.",
    type: "upload",
    timestamp: "2 hours ago",
    read: true
  },
  {
    id: "notif-4",
    title: "Candidate Shortlisted",
    message: "Priya Patel was moved to Shortlisted status by Recruiter Team.",
    type: "status",
    timestamp: "Yesterday",
    read: true
  }
];
