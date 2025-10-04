
import { BookOpen, Target, Users, Briefcase, GraduationCap, Trophy, Award, CheckCircle2, FlaskConical, LifeBuoy } from 'lucide-react';

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
  { href: "#about", label: "About", id: "about" },
  { href: "#timeline", label: "Timeline", id: "timeline" },
  { href: "#philosophy", label: "Philosophy", id: "philosophy" },
  { href: "#work", label: "Work", id: "work" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#credentials", label: "Credentials", id: "credentials" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export const about = {
  paragraph: "I’m Nanda—science teacher and steady coach for mixed-readiness classes. I design lessons that start with a real-world spark, then guide students to test ideas, talk like scientists, and reflect on growth. My classroom runs on clarity, care, and routines that make thinking visible.",
};

export type QuickFact = { 
  id: string;
  text: string | string[];
  icon: any; 
};

export const quickFacts: QuickFact[] = [
  { id: 'experience', text: "2 years teaching experience: Grade 10 Biology (Cambridge IGCSE) and Grades 3 & 4 (Cambridge Primary Science).", icon: Briefcase },
  { id: 'strengths', text: [
    "Inquiry-based lesson design",
    "Phenomenon-Driven instruction",
    "Differentiated Instruction",
    "5E model lesson planning"
  ], icon: Trophy },
  { id: 'location', text: "Based in Scarborough, ON — open to GTA roles.", icon: Target },
];

export const tagDefinitions = {
  "Inquiry-based lesson design": "Learning is driven by student questions and exploration, where students actively construct their own knowledge rather than passively receiving facts.",
  "Phenomenon-Driven instruction": "Lessons start with a real-world observable event (a science puzzle) that students work collaboratively to explain, making the science relevant and memorable.",
  "Differentiated Instruction": "Teaching is responsive to the needs of every learner by adjusting the content, process, or product so all students can achieve the same learning goal.",
  "5E model lesson planning": "A structured framework that guides students through five phases of learning—Engage, Explore, Explain, Elaborate, and Evaluate—to build deep conceptual understanding.",
  "IGCSE": "A globally recognized curriculum and examination system focused on developing knowledge, practical skills, and critical thinking essential for success in higher education."
};


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
    title: "🎬 Genetics, Inquiry, and a Touch of Hollywood Drama 🧬",
    course: "IGCSE Biology",
    grade: "10",
    drivingQuestion: "Can you use blood types to crack a century-old Hollywood case?",
    whatStudentsDid: "Modeled feedback loops; labs on heart rate recovery.",
    assessment: "CER write-up + lab report with success criteria.",
    tags: ["Inquiry-based lesson design", "Phenomenon-Driven instruction"],
    artifacts: [
      { type: "image", url: "#", label: "Student Lab Setup" },
      { type: "pdf", url: "#", label: "Rubric" }
    ],
    published: true,
    order: 1
  },
  {
    title: "From ‘Peep into Poop’ to Nephrologists",
    course: "IGCSE Biology",
    grade: "10",
    drivingQuestion: "How does your body turn 180 liters of fluid into just 1.5 liters of urine?",
    whatStudentsDid: "Field data collection, species counts, improvement proposal.",
    assessment: "Group presentation + reflection (metacognition stem).",
    tags: ["Inquiry-based lesson design", "5E model lesson planning"],
    artifacts: [
      { type: "image", url: "#", label: "Field Data Sheet" },
      { type: "pdf", url: "#", label: "Project Outline" }
    ],
    published: true,
    order: 2
  },
  {
    title: "Steaming Stories: Tales from the Idli Plate 🍚🔥📝",
    course: "Cambridge Primary Science",
    grade: "4",
    drivingQuestion: "Ever wondered what your lunch thinks as it travels through your body?” 🍏🤔",
    whatStudentsDid: "Microscopic imaging + annotated gallery; peer feedback rounds.",
    assessment: "Rubric focusing on observation → inference.",
    tags: ["IGCSE", "Inquiry-based lesson design"],
    artifacts: [
        { type: "image", url: "#", label: "Annotated Image" },
        { type: "pdf", url: "#", label: "Assessment Rubric" }
    ],
    published: true,
    order: 3
  },
  {
    title: "🌍🌿 Bridging classroom lessons with real-world issues!",
    course: "STEM Project",
    grade: "4",
    drivingQuestion: "What if young scientists could fight pests and protect pollinators?” 🐝🌿",
    whatStudentsDid: "Punnett simulations; ethics discussion; newsletter for families.",
    assessment: "Problem set + short editorial with sources.",
    tags: ["IGCSE", "Differentiated Instruction"],
    artifacts: [
        { type: "pdf", url: "#", label: "Problem Set" },
        { type: "pdf", url: "#", label: "Newsletter Example" }
    ],
    published: true,
    order: 4
  },
  {
    title: "🔬 Forensic Files Unveiled at Aimee! 🕵️‍♂️",
    course: "STEM Project",
    grade: "4",
    drivingQuestion: "“What makes every living organism as unique as a zebra’s stripes?” 🦓",
    whatStudentsDid: "Students designed and conducted experiments with bean seeds, manipulating variables like light, water, and soil. They documented growth daily in journals.",
    assessment: "Lab journal with observations, data, and a concluding CER (Claim, Evidence, Reasoning) statement.",
    tags: ["Inquiry-based lesson design", "5E model lesson planning"],
    artifacts: [
        { type: "image", url: "#", label: "Student Journal" },
        { type: "pdf", url: "#", label: "Experiment Guide" }
    ],
    published: true,
    order: 5
  },
  {
    title: "Modeling Meiosis 🧬",
    course: "IGCSE Biology",
    grade: "10",
    drivingQuestion: "“How early should we start teaching road safety?”",
    whatStudentsDid: "Used pipe cleaners, beads, and paper cutouts to model the stages of meiosis, focusing on crossing over and independent assortment.",
    assessment: "Students created a stop-motion video or a narrated slideshow explaining their model, assessed with a rubric on accuracy and clarity.",
    tags: ["Differentiated Instruction", "5E model lesson planning"],
    artifacts: [
        { type: "image", url: "#", label: "Student Model" },
        { type: "pdf", url: "#", label: "Assessment Rubric" }
    ],
    published: true,
    order: 6
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
        quote: "Nanda has a remarkable talent for designing lessons that are not only engaging but also deeply rooted in real-world applications. Her commitment to student-led inquiry has transformed our science classrooms. She is a reflective practitioner, a collaborative colleague, and a true asset to our academic community.",
        author: "Omkara Dantu",
        affiliation: "Principal, AIMEE International School",
        order: 1,
        published: true
    },
    {
        quote: "I genuinely cherish working with you. Your interactions with students, the lasting impact you have on their growth, and your enthusiasm for improving their scientific skills are truly commendable. Our core conversations about IGCSE and the extended conversations about Biology are the days I remember forever. I wish you all the best for your future endeavours, and you deserve the best.",
        author: "Alekhya Bellapu",
        affiliation: "Science Department Lead",
        order: 2,
        published: true
    },
    {
        quote: "Nanda's focus on scientific literacy is outstanding. She collaborates across departments to ensure that students are not just 'doing' science, but also reading, writing, and communicating like scientists. Her students’ lab reports and research proposals show a level of clarity and evidence-based reasoning that is well beyond their years.",
        author: "Ayna Ismail",
        affiliation: "English Department Head",
        order: 3,
        published: true
    },
    {
        quote: "Nanda maam, She is the Science teacher for my son Arjun in grade 3 and 4 , she made learning both exciting and meaningful with clear explanations, hands-on activities, she inspire curiosity in every child. Complex concepts are taught in a simple, easy-to-understand way. She used to help students in making projects where students can understand concepts easily. Her patience, dedication, and passion for science have created a love for the subject in young learners. We are truly grateful for the positive impact she has on the students’ academic growth and confidence. Thank you Nanda maam 😍",
        author: "Sindhu Mukkamala",
        affiliation: "Parent (Grade 4)",
        order: 6,
        published: true
    },
    {
        quote: "Dear Nanda Ma'am,  Thank you so much for being an exceptional teacher and guiding star in my child's (Jaya Nandhan) educational,social and emotional journey. Beyond lessons and textbooks, you have nurtured curiosity, confidence and a love for learning in a way that only a passionate teacher can. Your kindness, patience, and inspiration have touched not just my child's education but also his outlook towards knowledge and growth. I will remain deeply grateful. Your lessons are my child's world. Once again thank you so much ma'am for helping my child become a better person and excel in education , especially in Science.  With Warm Regards, Y Hymavathi",
        author: "Hymavathi",
        affiliation: "Parent (Grade 4)",
        order: 7,
        published: true
    },
    {
        quote: "Nanda mam was a biology teacher, it's the subject with an enormous amount of realistic theories and information and she was the right teacher for me to make it in a smoother way, she has made each and every concept so clear for the whole class and gave us practical knowledge. No matter how hard the topic is, she is the excellent teacher to detangle the difficulty and give a nice representation of the respective topic",
        author: "Sana",
        affiliation: "Grade 10 Student",
        order: 4,
        published: true
    },
    {
        quote: "I used to be nervous about science, but Ms. Nanda’s class changed that. She uses interesting examples and makes sure everyone understands before moving on. The group activities are fun, and I learned so much from my classmates. She is patient and always encourages us to ask questions, no matter how small.",
        author: "Mithravrindha",
        affiliation: "Grade 10 Student",
        order: 5,
        published: true
    }
];

type ProfessionalDevelopmentSubCategory = {
    title: string;
    items: string[];
};

export type CredentialCategory = {
    title: string;
    items: string[] | ProfessionalDevelopmentSubCategory[];
};

export const credentials: CredentialCategory[] = [
    {
        title: "Education",
        items: [
            "Bachelor of Education (B.Ed.)",
            "Master of Science Biotechnology (M.Sc.)",
            "Bachelor of Science Biotechnology (B.Sc.)"
        ]
    },
    {
        title: "Experience",
        items: [
            "Cambridge IGCSE Biology Teacher (Grade 10)",
            "Cambridge Primary Science Teacher (Grades 3 & 4)",
            "STEM Program Coordinator (Grades 1–9)",
            "Social-Emotional Learning (SEL) Instructor (Grade 4)"
        ]
    },
    {
        title: "Professional Development",
        items: [
            {
                title: "Certifications",
                items: [
                    "Certified STEM Educator (Chitti, 2025)",
                    "Artificial Intelligence Tools for Innovative Educational Practices (Chitti, 2025)",
                    "KTET Category 3 (2022)",
                    "SET Biotechnology (2022)"
                ]
            },
            {
                title: "Workshops",
                items: [
                    "Orientation Program for Effective Use of Cambridge Learning Resources"
                ]
            },
            {
                title: "Specialized Training",
                items: [
                    "DNA Fingerprinting",
                    "CRISPR Genetic Modification",
                    "PCR-based Molecular Techniques",
                    "Phytochemistry"
                ]
            }
        ]
    }
];
