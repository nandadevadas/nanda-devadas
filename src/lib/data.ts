
import { BookOpen, Target, Users, Briefcase, GraduationCap, Trophy, Award, CheckCircle2, FlaskConical, LifeBuoy } from 'lucide-react';

export const siteInfo = {
  name: "Nanda Dev",
  role: "High School Biology Teacher & Elementary Science Educator | B.Ed., M.Sc. Biotech, B.Sc. Biotech",
  heroTagline: "I design inquiry-rich lessons that make science visible, purposeful, and joyful.",
  resumeUrl: "/assets/resume/Resume_Nanda_Dev.pdf",
  email: "nandadevadas@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/nanda-devadas-p",
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
    title: "Genetics, Inquiry, and a Touch of Hollywood Drama",
    course: "IGCSE Biology",
    grade: "10",
    drivingQuestion: "Can you use blood types to crack a century-old Hollywood case?",
    whatStudentsDid: "Modeled feedback loops; labs on heart rate recovery.",
    assessment: "Students analyzed mock forensic reports and historical documents to construct a scientific argument using the Claim, Evidence, Reasoning (CER) framework. Their final product was a formal lab report, assessed with a detailed rubric focusing on argumentation, data analysis, and scientific communication.",
    overview: "This unit was taught using Phenomenon-Driven Instruction, immediately hooking students with a high-stakes, real-world genetic mystery: the Charlie Chaplin paternity suit and ABO blood typing case. Instead of beginning with theory, the lesson started with the verifiable evidence (the blood types of Chaplin, the mother, and the child), immediately transforming the study of Multiple Alleles and Codominance from an abstract concept into a forensic investigation. This narrative-driven approach was designed to foster scientific curiosity and deeper understanding.",
    learningObjectives: [
      "Analyze and explain the inheritance patterns of Multiple Alleles (ABO Blood Typing).",
      "Apply genetic principles (Punnett squares) to determine unknown genotypes and phenotypes.",
      "Construct a compelling scientific argument using the Claim, Evidence, Reasoning (CER) framework."
    ],
    activities: "The unit was defined by the central Inquiry Question: \"Based on the blood types, could Charlie Chaplin have been the biological father?\"\n\nFoundation: Students utilized initial scaffolded notes and illustrations to rapidly build foundational knowledge of codominance and multiple alleles.\n\nEvidence Gathering: Students were presented with the case files, including simulated blood typing results and historical documents. They actively analyzed pedigree charts and applied blood-typing rules to gather the necessary evidence.\n\nCritical Thinking: The core activity involved students collaborating as \"forensic geneticists\" to prove the actor's innocence (or guilt) with blood-typing rules. This required them to apply critical thinking and problem-solving skills to connect real-life drama with genetic principles.",
    reflection: "The use of this real-world phenomenon was highly effective, demonstrating successful Differentiated Instruction by providing multiple entry points (narrative, case evidence, scientific calculations) for students to access the content. The continuous Inquiry-based process fostered vibrant discussions and helped students move beyond simple memorization. The final CER report validated that students gained a deep, evidence-based understanding of complex inheritance patterns, reinforcing foundational knowledge while building a love for problem-solving.",
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
    assessment: "The summative assessment was a detailed lab report where students analyzed simulated patient data (urine composition, hormone levels) to diagnose a kidney-related ailment. This was supported by a concept map illustrating the entire process of osmoregulation and selective reabsorption.",
    overview: "This IGCSE Biology unit on Excretion and the Kidney was launched using a compelling Phenomenon-Driven hook: \"Let's peep into poop!\" and the real-world puzzle of why bird nests stay clean. This counter-intuitive opening immediately captured student attention, transforming the study of nephrology from a lecture-based topic into an engaging scientific investigation.",
    learningObjectives: [
      "Explain the structure and function of the human kidney (Nephrons).",
      "Describe the processes of ultrafiltration and selective reabsorption in urine formation.",
      "Analyze the relationship between fluid input and output through quantitative reasoning."
    ],
    activities: "This lesson followed an Inquiry-based structure, moving students through questioning, exploration, and hands-on investigation.\n\nInquiry Fun: Discussions were prompted by questions like, \"Why do birds excrete paste-like urine?\" which bridged a familiar observation to the complex physiology of nitrogenous waste.\n\nHands-On Learning: Students conducted a goat kidney dissection, providing a direct, tactile experience of the organ's structure and function.\n\nCritical Thinking & Calculation: Students calculated and analyzed the kidney's efficiency, discovering the massive filtration volume (180L/day) versus the small urine output (1.5L), leading to a deep understanding of selective reabsorption.\n\nRoleplay as Nephrologists: The unit culminated in a mock panel discussion where students took on the roles of medical experts to answer public queries about kidney health, transplants, and stones, solidifying their applied knowledge.",
    reflection: "This approach, rooted in the Inquiry and Phenomenon-Driven framework, ensured maximum engagement and mastery. By linking the complex math of fluid dynamics with a hands-on dissection and a final role-play, students achieved advanced scientific literacy and applied IGCSE Biology concepts as practicing scientists. The unit successfully transformed a dry topic into an exciting and memorable journey of discovery.",
    tags: ["Inquiry-based lesson design", "5E model lesson planning"],
    artifacts: [
      { type: "image", url: "#", label: "Field Data Sheet" },
      { type: "pdf", url: "#", label: "Project Outline" }
    ],
    published: true,
    order: 2
  },
  {
    title: "Steaming Stories: Tales from the Idli Plate",
    course: "Cambridge Primary Science",
    grade: "4",
    drivingQuestion: "Ever wondered what your lunch thinks as it travels through your body?”",
    whatStudentsDid: "Microscopic imaging + annotated gallery; peer feedback rounds.",
    assessment: "Students created a comic strip or a short story from the 'perspective' of a piece of food traveling through the digestive system. This was assessed on the accurate sequence of organs, the function described for each organ, and creative expression.",
    overview: "To make the digestive system accessible and memorable for younger learners, we personified food on its journey through the body. The lesson, anchored by the beloved food 'idli,' used storytelling to trace the path from the mouth to the small intestine, focusing on the roles of different organs in breaking down food for energy.",
    learningObjectives: [
      "Identify the main organs of the human digestive system (mouth, esophagus, stomach, small intestine).",
      "Describe the function of each organ in simple terms (e.g., 'the stomach mashes food').",
      "Sequence the journey of food through the digestive tract.",
      "Understand that digestion is the process of breaking down food for our body to use."
    ],
    activities: "We began by reading a story about 'Idli's Great Adventure.' Students then created a life-sized body map on large paper, drawing and labeling the organs. A hands-on activity involved 'digesting' a cracker in a sealed bag with water and a little vinegar to simulate the stomach, demonstrating both mechanical and chemical breakdown in a safe, observable way.",
    reflection: "The storytelling approach was a resounding success. Students were highly engaged and could easily recall the sequence and function of the organs by referencing the story. The 'stomach in a bag' activity was a powerful, concrete demonstration that solidified their understanding. For some students, the creative writing assessment was a chance to shine, allowing them to demonstrate scientific understanding in a non-traditional format.",
    tags: ["IGCSE", "Inquiry-based lesson design"],
    artifacts: [
        { type: "image", url: "#", label: "Annotated Image" },
        { type: "pdf", url: "#", label: "Assessment Rubric" }
    ],
    published: true,
    order: 3
  },
  {
    title: "Bridging classroom lessons with real-world issues!",
    course: "STEM Project",
    grade: "4",
    drivingQuestion: "What if young scientists could fight pests and protect pollinators?”",
    whatStudentsDid: "Punnett simulations; ethics discussion; newsletter for families.",
    assessment: "Students, in groups, designed and marketed a 'pollinator-friendly' pest control solution. They created a poster and a short presentation arguing why their method was effective and safe for the environment. They were assessed on their scientific reasoning, creativity, and communication skills.",
    overview: "This project connected concepts of life cycles, food chains, and ecosystems to the real-world challenge of pest control in gardens. Students were tasked with becoming 'eco-engineers' to solve a problem: how to get rid of aphids without harming bees and butterflies. This led to an exploration of biological controls, natural repellents, and the vital role of pollinators.",
    learningObjectives: [
      "Distinguish between pests and beneficial organisms in an ecosystem.",
      "Describe the role of pollinators in a plant's life cycle.",
      "Design a solution to a real-world problem using scientific principles.",
      "Communicate scientific ideas to a specific audience."
    ],
    activities: "Students started by observing plants in the school garden to identify different insects. They researched the life cycles of both pests (aphids) and pollinators (bees). The core activity was the design challenge, where groups brainstormed, tested (using water sprays on plants), and refined their solutions, such as introducing ladybugs (biological control) or planting marigolds (natural repellent).",
    reflection: "The 'eco-engineer' framing gave students a strong sense of purpose and agency. They took their role seriously and were deeply invested in protecting the 'good bugs.' The project successfully integrated biology, engineering design, and communication. The final presentations were impressive, showing that even young learners can grasp complex ecological relationships when the context is meaningful and the task is authentic.",
    tags: ["IGCSE", "Differentiated Instruction"],
    artifacts: [
        { type: "pdf", url: "#", label: "Problem Set" },
        { type: "pdf", url: "#", label: "Newsletter Example" }
    ],
    published: true,
    order: 4
  },
  {
    title: "Forensic Files Unveiled at Aimee!",
    course: "STEM Project",
    grade: "4",
    drivingQuestion: "“What makes every living organism as unique as a zebra’s stripes?”",
    whatStudentsDid: "Students designed and conducted experiments with bean seeds, manipulating variables like light, water, and soil. They documented growth daily in journals.",
    assessment: "Students analyzed a mock 'crime scene' where a plant was 'stolen'. They used chromatography to separate the 'ink' from a ransom note and compared fingerprints left at the scene. The final assessment was a 'forensic report' where they documented their findings and identified the 'culprit' from a list of suspects.",
    overview: "This thrilling STEM unit introduced students to forensic science by asking what makes things unique. The driving question led to explorations of fingerprints, chromatography, and the importance of careful observation. The unit was structured as a mystery to be solved, with students taking on the role of crime scene investigators.",
    learningObjectives: [
      "Understand that fingerprints are unique to each individual.",
      "Use paper chromatography to separate mixtures (like ink).",
      "Develop and practice systematic observation and recording skills.",
      "Use evidence to draw a logical conclusion."
    ],
    activities: "The unit began with a staged 'crime scene' in the classroom. Students learned to lift fingerprints using pencils and tape. The main lab involved using paper chromatography to see if the ink from the 'ransom note' matched pens belonging to several 'suspects.' Each activity was framed as a step in solving the case, keeping engagement high.",
    reflection: "The mystery narrative was incredibly effective. Students were meticulous in their observations because they knew it was 'evidence.' Chromatography, which can be a simple color-mixing activity, became a high-stakes analytical tool. This project demonstrated that complex scientific practices can be made accessible and exciting for elementary students through creative, thematic instruction. The final forensic reports showed great pride and a solid grasp of the scientific concepts.",
    tags: ["Inquiry-based lesson design", "5E model lesson planning"],
    artifacts: [
        { type: "image", url: "#", label: "Student Journal" },
        { type: "pdf", url: "#", label: "Experiment Guide" }
    ],
    published: true,
    order: 5
  },
  {
    title: "Modeling Meiosis",
    course: "IGCSE Biology",
    grade: "10",
    drivingQuestion: "“How early should we start teaching road safety?”",
    whatStudentsDid: "Used pipe cleaners, beads, and paper cutouts to model the stages of meiosis, focusing on crossing over and independent assortment.",
    assessment: "Students created a stop-motion video or a narrated slideshow explaining their model, assessed with a rubric on accuracy and clarity.",
    overview: "Meiosis is a notoriously difficult topic due to its microscopic and sequential nature. This lesson aimed to make the process tangible and understandable by having students physically model each stage. By moving the 'chromosomes' themselves, they could directly visualize complex events like crossing over and the reduction of chromosome number, which are critical for genetic variation.",
    learningObjectives: [
      "Sequence the stages of Meiosis I and Meiosis II.",
      "Model the process of crossing over and explain its importance for genetic variation.",
      "Distinguish between meiosis and mitosis in terms of process and outcome.",
      "Explain why meiosis results in four unique haploid cells."
    ],
    activities: "The lesson was a hands-on workshop. Each student group received a kit with different colored pipe cleaners (to represent homologous chromosomes) and beads (to represent centromeres). Following a guided worksheet, they manipulated these materials to walk through Prophase I, Metaphase I, etc. A key instruction was to physically exchange segments of pipe cleaners during 'crossing over' to see the resulting new combination of alleles.",
    reflection: "This was one of the most effective lessons for a difficult topic. The physical act of moving the chromosomes and creating recombinant chromatids created a powerful mental model for students that diagrams alone could not. The stop-motion video assessment was a fantastic way to check for understanding, as students had to explain each step's significance. It turned a passive learning topic into an active, creative, and memorable experience.",
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
