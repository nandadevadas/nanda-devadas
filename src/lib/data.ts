import { BookOpen, Target, Users, Briefcase, GraduationCap, Trophy, Award } from 'lucide-react';

export const siteInfo = {
  name: "Nanda Dev",
  role: "Secondary Biology Teacher | IGCSE & Ontario-aligned Science Educator",
  heroTagline: "I design inquiry-rich lessons that make science visible, purposeful, and joyful.",
  resumeUrl: "/Nanda-Dev-Resume.pdf",
  email: "hello@nanda.dev",
  social: {
    linkedin: "https://www.linkedin.com/in/example",
  }
};

export const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#philosophy", label: "Philosophy", id: "philosophy" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#timeline-road-so-far", label: "Timeline", id: "timeline-road-so-far"},
  { href: "#credentials", label: "Credentials", id: "credentials" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const about = {
  paragraph: "I help young people see science as a way of thinking. With Cambridge IGCSE experience and current practice aligned to Ontario expectations, I design phenomenon-driven units, model metacognition, and build safe, respectful classrooms where every learner has a way in and a supported path to success.",
};

export const quickFacts = [
  { text: "2+ years teaching Grade 9–10 Biology/Science (Cambridge IGCSE).", icon: Briefcase },
  { text: "Strengths: inquiry design, visible thinking, differentiated supports.", icon: Trophy },
  { text: "Based in Scarborough, ON — open to GTA roles.", icon: Target },
];

export const philosophy = [
  {
    title: "Beliefs",
    description: "Every learner is unique. We build a respectful community where equity, inclusion, and student voice are foundational. Students act as CEOs of their learning—setting goals, monitoring progress, seeking help, and celebrating milestones. Daily practice centers on integrity, kindness, and stewardship while cultivating metacognition.",
    icon: Users,
  },
  {
    title: "My Role",
    description: "I am a positive catalyst: I remove barriers, light the path, and begin every unit with a clear real-world why. I design—not deliver—learning through phenomenon-driven inquiry and differentiation, with clear success criteria, timely feedback, and multiple chances to improve. Mastery is iterative.",
    icon: Target,
  },
  {
    title: "Learning Environment",
    description: "We explore the why before the what. In a safe space for critique, revision, and second chances, authentic tasks grow problem-solvers and confident learners, nurture civic responsibility, and develop empathy, resilience, and collaboration alongside academic skill.",
    icon: BookOpen,
  },
];

export type PortfolioItem = typeof portfolioItems[0];
export const portfolioItems = [
  {
    title: "Human Systems & Homeostasis",
    course: "SBI2D",
    grade: "10",
    drivingQuestion: "How does the body keep balance under stress?",
    whatStudentsDid: "Modeled feedback loops; labs on heart rate recovery.",
    assessment: "CER write-up + lab report with success criteria.",
    tags: ["Ontario", "Biology", "Assessment", "Lab"],
    artifacts: [
      { type: "image", url: "#", label: "Student Lab Setup" },
      { type: "pdf", url: "#", label: "Rubric" }
    ],
    published: true,
    order: 1
  },
  {
    title: "Ecosystems & Local Action",
    course: "SNC1W",
    grade: "9",
    drivingQuestion: "How can our class improve a local habitat?",
    whatStudentsDid: "Field data collection, species counts, improvement proposal.",
    assessment: "Group presentation + reflection (metacognition stem).",
    tags: ["Ontario", "Science", "Project-Based"],
    artifacts: [
      { type: "image", url: "#", label: "Field Data Sheet" },
      { type: "pdf", url: "#", label: "Project Outline" }
    ],
    published: true,
    order: 2
  },
  {
    title: "Cells & Microscopy Sprint",
    course: "IGCSE",
    grade: "10",
    drivingQuestion: "What story can a single cell tell?",
    whatStudentsDid: "Microscopic imaging + annotated gallery; peer feedback rounds.",
    assessment: "Rubric focusing on observation → inference.",
    tags: ["IGCSE", "Biology", "Lab", "Peer Feedback"],
    artifacts: [
        { type: "image", url: "#", label: "Annotated Image" },
        { type: "pdf", url: "#", label: "Assessment Rubric" }
    ],
    published: true,
    order: 3
  },
  {
    title: "IGCSE Genetics Mini-Project",
    course: "IGCSE",
    grade: "10",
    drivingQuestion: "How do traits move through a community?",
    whatStudentsDid: "Punnett simulations; ethics discussion; newsletter for families.",
    assessment: "Problem set + short editorial with sources.",
    tags: ["IGCSE", "Genetics", "Ethics"],
    artifacts: [
        { type: "pdf", url: "#", label: "Problem Set" },
        { type: "pdf", url: "#", label: "Newsletter Example" }
    ],
    published: true,
    order: 4
  }
];

export type TimelineMilestone = typeof timelineMilestones[0];
export const timelineMilestones = [
  {
    type: 'degree',
    title: 'B.Sc. Biotechnology',
    institution: 'University of Calicut — Kerala, India',
    date: '2015–2018',
    details: 'First Class, Distinction',
  },
  {
    type: 'degree',
    title: 'M.Sc. Biotechnology',
    institution: 'Mahatma Gandhi University — Kerala, India',
    date: '2018–2020',
    details: 'First Rank, Distinction',
  },
  {
    type: 'degree',
    title: 'Bachelor of Education (B.Ed.)',
    institution: 'University of Calicut — Kerala, India',
    date: '2020–2022',
    details: 'First Class, Distinction',
  },
  {
    type: 'role',
    title: 'IGCSE Biology & Science Teacher',
    institution: 'AIMEE International School',
    date: '2023–2025',
    details: '',
  },
];


export const testimonials = [
    {
        quote: "Nanda creates inclusive labs where every student participates meaningfully. Clear routines, visible success criteria, and kind accountability.",
        author: "Department Head",
        affiliation: "Cambridge International School",
        avatarUrl: "/images/ref-1.webp",
        order: 1,
        published: true
    },
    {
        quote: "Students consistently referenced the ‘why’ of each task. Growth in scientific writing was evident across the term.",
        author: "Vice Principal",
        affiliation: "GTA Secondary School",
        avatarUrl: "/images/ref-2.webp",
        order: 2,
        published: true
    },
    {
        quote: "My child’s confidence in science soared. Nanda’s feedback was specific, encouraging, and timely.",
        author: "Parent",
        affiliation: "Grade 10",
        avatarUrl: "/images/ref-3.webp",
        order: 3,
        published: true
    }
];

export const credentials = [
    {
        title: "Education",
        icon: GraduationCap,
        items: [
            "Bachelor of Education (B.Ed.), Science Specialization",
            "Bachelor of Science (B.Sc.), Biology Major"
        ]
    },
    {
        title: "Experience",
        icon: Briefcase,
        items: [
            "Cambridge IGCSE Biology/Science Teacher",
            "Transition to Ontario Curriculum (SNC1W, SBI2D)"
        ]
    },
    {
        title: "Professional Training",
        icon: Award,
        items: [
            "Assessment for Learning Strategies",
            "Universal Design for Learning (UDL) Principles",
            "ESL-Sensitive Scaffolding in STEM",
            "Google Workspace for Education Certified"
        ]
    },
    {
        title: "Status",
        icon: Trophy,
        items: [
            "Ontario Certified Teacher (OCT) application in progress."
        ]
    }
]
