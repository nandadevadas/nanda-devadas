import { BookOpen, Target, Users, Briefcase, GraduationCap, Trophy, Award, CheckCircle2 } from 'lucide-react';

export const siteInfo = {
  name: "Nanda Dev",
  role: "High School Biology Teacher & Elementary Science Educator | B.Ed., M.Sc. Biotech, B.Sc. Biotech",
  heroTagline: "I design inquiry-rich lessons that make science visible, purposeful, and joyful.",
  resumeUrl: "/Nanda-Dev-Resume.pdf",
  email: "hello@nanda.dev",
  social: {
    linkedin: "https://www.linkedin.com/in/example",
  }
};

export const navLinks = [
  { href: "#timeline", label: "Timeline", id: "timeline" },
  { href: "#about", label: "About", id: "about" },
  { href: "#philosophy", label: "Philosophy", id: "philosophy" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#credentials", label: "Credentials", id: "credentials" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const about = {
  paragraph: "I’m Nanda—science teacher and steady coach for mixed-readiness classes. I design lessons that start with a real-world spark, then guide students to test ideas, talk like scientists, and reflect on growth. My classroom runs on clarity, care, and routines that make thinking visible.",
};

export const quickFacts = [
  { text: "2 years teaching Grade 10 Biology/ Grade 3&4 Science (Cambridge IGCSE)", icon: Briefcase },
  { text: "Strengths : Inquiry based lesson, Phenomenon Driven instruction , Differentiated Instruction and 5E model lesson plan", icon: Trophy },
  { text: "Based in Scarborough, ON — open to GTA roles.", icon: Target },
];

export const philosophy = [
  {
    title: "The Learning Environment",
    description: "I believe the learning environment should spark curiosity and purpose -leading students to explore the why before the what- in a safe, respectful space where healthy critique, revision, and second chances are the norm. Through real tasks and authentic phenomena, it grows problem-solvers and confident learners, nurtures civic responsibility so knowledge serves the community, and develops empathy, resilience, and collaboration alongside academic skill.",
    icon: BookOpen,
  },
  {
    title: "The Facilitator - My Role",
    description: "I believe my role isn’t to dictate but to be a positive catalyst, removing barriers, lighting the path, and beginning every unit with a clear real-world why so no student wonders why they’re learning this.  I design, not deliver, learning, using phenomenon-driven inquiry and differentiated methods so every learner has a way in and a supported path to success.  With clear expectations, timely feedback, and multiple chances to improve, we treat mastery as iterative, and I model curiosity and humility by evolving my practice based on evidence and students’ needs.",
    icon: Target,
  },
  {
    title: "The Learners",
    description: "I believe every learner is unique, and the classroom remains a safe, respectful community where equity, inclusion, and student voice are foundational, with shared responsibility for everyone’s success.  Students act as CEOs of their learning, setting goals, monitoring progress, seeking help when needed, and celebrating milestones.  Daily practice centers on integrity, kindness, and stewardship while cultivating metacognition: making thinking visible, reflecting with honesty, and transferring ideas to new contexts.",
    icon: Users,
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
        items: [
            "Bachelor of Education (B.Ed.), Science Specialization",
            "Bachelor of Science (B.Sc.), Biology Major"
        ]
    },
    {
        title: "Experience",
        items: [
            "Cambridge IGCSE Biology/Science Teacher",
            "Transition to Ontario Curriculum (SNC1W, SBI2D)"
        ]
    },
    {
        title: "Professional Training",
        items: [
            "Assessment for Learning Strategies",
            "Universal Design for Learning (UDL) Principles",
            "ESL-Sensitive Scaffolding in STEM",
            "Google Workspace for Education Certified"
        ]
    },
    {
        title: "Status",
        items: [
            "Ontario Certified Teacher (OCT) application in progress."
        ]
    }
]
