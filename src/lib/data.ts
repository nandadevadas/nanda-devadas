

import { BookOpen, Target, Users, Briefcase, GraduationCap, Trophy, Award, CheckCircle2, FlaskConical, LifeBuoy, HelpCircle, Lightbulb, TrendingUp, Map } from 'lucide-react';

export const siteInfo = {
  name: "Nanda Dev",
  role: "High School Biology Teacher & Elementary Science Educator | B.Ed., M.Sc. Biotech, B.Sc. Biotech",
  heroTagline: "I design inquiry-rich lessons that make science visible, purposeful, and joyful.",
  resumeUrl: "/assets/resume/0_resume_Nanda_New_Jobfair.pdf",
  email: "nandadevadas@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/nanda-devadas",
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
  paragraph: "I design lessons that start with a real-world spark, then guide students to test ideas, talk like scientists, and reflect on growth. My classroom runs on clarity, care, and routines that make thinking visible.",
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
  { id: 'location', text: "Based in Scarborough, ON.", icon: Target },
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
    description: "I believe my role isn’t to dictate but to be a positive catalyst, removing barriers, lighting the path, and beginning every unit with a clear real-world why so no student wonders why they’re learning this. I design, not deliver, learning, using phenomenon-driven inquiry and differentiated methods so every learner has a way in and a supported path to success. With clear expectations, timely feedback, and multiple chances to improve, we treat mastery as iterative, and I model curiosity and humility by evolving my practice based on evidence and students’ needs.",
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
    activities: [
      { "title": "Inquiry Question", "description": "The unit was defined by the central Inquiry Question: \"Based on the blood types, could Charlie Chaplin have been the biological father?\"" },
      { "title": "Foundation", "description": "Students utilized initial scaffolded notes and illustrations to rapidly build foundational knowledge of codominance and multiple alleles." },
      { "title": "Evidence Gathering", "description": "Students were presented with the case files, including simulated blood typing results and historical documents. They actively analyzed pedigree charts and applied blood-typing rules to gather the necessary evidence." },
      { "title": "Critical Thinking", "description": "The core activity involved students collaborating as \"forensic geneticists\" to prove the actor's innocence (or guilt) with blood-typing rules. This required them to apply critical thinking and problem-solving skills to connect real-life drama with genetic principles." }
    ],
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
    activities: [
        { "title": "Inquiry Fun", "description": "Discussions were prompted by questions like, \"Why do birds excrete paste-like urine?\" which bridged a familiar observation to the complex physiology of nitrogenous waste." },
        { "title": "Hands-On Learning", "description": "Students conducted a goat kidney dissection, providing a direct, tactile experience of the organ's structure and function." },
        { "title": "Critical Thinking & Calculation", "description": "Students calculated and analyzed the kidney's efficiency, discovering the massive filtration volume (180L/day) versus the small urine output (1.5L), leading to a deep understanding of selective reabsorption." },
        { "title": "Roleplay as Nephrologists", "description": "The unit culminated in a mock panel discussion where students took on the roles of medical experts to answer public queries about kidney health, transplants, and stones, solidifying their applied knowledge." }
    ],
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
    overview: "This Cambridge Primary Science unit on the Digestive System was rooted in Inquiry-based teaching and integrated Social-Emotional Learning (SEL). The lesson transformed the traditional study of physiology into a creative exercise in empathy by asking students to narrate the journey of their lunch (\"Idli\") from the perspective of the food itself. This innovative approach brilliantly intertwined core science concepts with SEL principles.",
    learningObjectives: [
      "Accurately sequence and describe the process of digestion using correct scientific terminology (e.g., esophagus, small intestine).",
      "Develop creative writing skills by adopting an anthropomorphic perspective (empathy).",
      "Foster an inclusive space where every child's thoughts and feelings are valued and expressed."
    ],
    activities: [
        { "title": "Inquiry Hook", "description": "Students were prompted with the question, \"How might food feel during digestion?\". This spurred active discussion and imaginative thinking." },
        { "title": "The \"IDLY-DAIRY\" Artifact", "description": "Students composed a \"diary\" from the perspective of the food, requiring them to accurately map the journey through the body—from the mouth and saliva down to the small intestine and anus." },
        { "title": "Creative Expression", "description": "The narrative format fostered creativity and ensured that even complex vocabulary was naturally integrated into an engaging story, demonstrating conceptual understanding." }
    ],
    reflection: "The success of the \"Steaming Stories\" activity confirms that fostering imagination alongside core science concepts enhances learning. This approach not only ensures that students meet scientific grade expectations but also builds confidence and social-emotional awareness. By encouraging students to delve into the realm of imagination, the lesson achieved a remarkable impact on their learning experience, making science come alive.",
    tags: ["IGCSE", "Inquiry-based lesson design"],
    artifacts: [
        { type: "image", url: "#", label: "IDLY-DAIRY Artifact" },
        { type: "pdf", url: "#", label: "Assessment Rubric" }
    ],
    published: true,
    order: 3
  },
  {
    title: "Biopesticide Creation: STEM for Social Impact",
    course: "STEM Project",
    grade: "4",
    drivingQuestion: "What if young scientists could fight pests and protect pollinators?”",
    whatStudentsDid: "Punnett simulations; ethics discussion; newsletter for families.",
    assessment: "Students, in groups, designed and marketed a 'pollinator-friendly' pest control solution. They created a poster and a short presentation arguing why their method was effective and safe for the environment. They were assessed on their scientific reasoning, creativity, and communication skills.",
    overview: "This unit transformed the study of environmental science into a Problem-Based Learning (PBL) challenge. It was launched using a compelling, local Phenomenon: the impact of chemical pesticides on pollinators and the ethical case of Endosulfan in Kasaragod, Kerala. This approach bridged core Cambridge Primary Science lessons with immediate social and environmental issues, fostering empathy and accountability among Grade 4 students.",
    learningObjectives: [
      "Analyze the negative effects of chemical pesticides on pollinators and the environment.",
      "Design and synthesize sustainable, natural biopesticides as an effective alternative.",
      "Demonstrate environmental stewardship by applying science to drive positive social change."
    ],
    activities: [
        { "title": "Problem Identification", "description": "Students researched the environmental hazards of chemical pesticides, which fueled their motivation to find solutions." },
        { "title": "Formulation & Synthesis", "description": "In a hands-on activity, students actively crafted various natural solutions, including: neem oil spray, garlic chili spray, tobacco spray, and baking soda fungicide." },
        { "title": "Application & Evaluation", "description": "Students learned the science behind these biopesticides, understanding how natural solutions effectively target pests while preserving ecological balance." }
    ],
    reflection: "This integrated STEM activity successfully cultivated core 21st-century competencies:\n\nProblem-Solving: Students moved from analyzing a severe real-world problem to synthesizing a sustainable, responsible solution.\n\nEnvironmental Stewardship: The unit fostered a deep sense of responsibility, proving that young minds can use science to drive positive change for a better future.\n\nResponsible Innovation: The activity highlighted the importance of choosing environmentally sound methods, linking scientific literacy directly to ethical decision-making.",
    tags: ["IGCSE", "Differentiated Instruction"],
    artifacts: [
        { type: "pdf", url: "#", label: "Problem Set" },
        { type: "pdf", url: "#", label: "Newsletter Example" }
    ],
    published: true,
    order: 4
  },
  {
    title: "Forensic Files Unveiled: DNA Profiling and STEM Literacy",
    course: "STEM Project",
    grade: "4",
    drivingQuestion: "“What makes every living organism as unique as a zebra’s stripes?”",
    whatStudentsDid: "Students designed and conducted experiments with bean seeds, manipulating variables like light, water, and soil. They documented growth daily in journals.",
    assessment: "Students analyzed a mock 'crime scene' where a plant was 'stolen'. They used chromatography to separate the 'ink' from a ransom note and compared fingerprints left at the scene. The final assessment was a 'forensic report' where they documented their findings and identified the 'culprit' from a list of suspects.",
    overview: "As the STEM Program Coordinator, this engaging unit was designed to introduce the intricate concept of DNA profiling by transforming the classroom into a crime lab. The lesson was launched using a compelling Phenomenon-Driven hook: the real-life 1980s case from England that pioneered DNA profiling. By framing the start as a \"crime thriller,\" the activity immediately sparked curiosity and engagement among all students.",
    learningObjectives: [
        "Explain the principle of individual uniqueness using metaphors (e.g., zebra patterns) as an accessible anchor.",
        "Introduce the fundamental purpose of forensic science and its application in real-world scenarios.",
        "Foster critical thinking and problem-solving through mock investigation and evidence analysis."
    ],
    activities: [
      {
        "title": "Conceptual Bridging",
        "description": "The uniqueness of organisms was introduced using zebra patterns as a visual metaphor, simplifying the complex idea of individual genetic profiles."
      },
      {
        "title": "Hands-On Simulation",
        "description": "A mock crime scene was meticulously set up, complete with teachers acting as suspects, making the activity interactive and memorable for the students."
      },
      {
        "title": "Scaffolding & Accessibility",
        "description": "A clear and precise worksheet was created to guide the investigation, effectively differentiating instruction to ensure accessibility and success for all learners, including those who may process information more slowly."
      }
    ],
    reflection: "The success of this large-scale STEM activity confirmed that planning, innovative ideas, and organized execution can make complex topics like forensic science accessible and exciting for a wide range of students. The high levels of student enthusiasm and the practical application of scientific concepts demonstrated the power of experiential learning in enhancing scientific literacy and critical thinking across grade levels.",
    tags: ["Inquiry-based lesson design", "5E model lesson planning"],
    artifacts: [
        { type: "image", url: "#", label: "Student Journal" },
        { type: "pdf", url: "#", label: "Experiment Guide" }
    ],
    published: true,
    order: 5
  },
  {
    title: "Assembly Spotlight: Critical Thinking & Citizenship",
    course: "SEL",
    grade: "4",
    drivingQuestion: "“How early should we start teaching road safety?”",
    whatStudentsDid: "Used pipe cleaners, beads, and paper cutouts to model the stages of meiosis, focusing on crossing over and independent assortment.",
    assessment: "The debate was followed by an interactive session on traffic rules and a clarifying quiz, reinforcing essential road safety guidelines.",
    overview: "This Grade 4 assembly project transformed the topic of road safety into a Problem-Based Learning (PBL) exercise. The lesson was integrated into the Social-Emotional Learning (SEL) curriculum, using the high-stakes issue of underage driving to facilitate a meaningful conversation about moral values and civic responsibility. The debate format was specifically designed to promote ethical reflection and responsible decision-making.",
    learningObjectives: [
      "Analyze the ethical and safety implications of traffic rules and responsible citizenship.",
      "Develop critical thinking skills by constructing and defending arguments for opposing viewpoints.",
      "Foster empathy and respect for diverse perspectives through structured debate."
    ],
    activities: [
      { "title": "Lively Debate", "description": "Students were divided into two groups: the \"pro-freedom\" side and the \"pro-safety\" side. This differentiated instruction method gave every student a clear role and platform for expression." },
      { "title": "Active Engagement", "description": "The exchange of ideas required students to articulate their reasoning, showcasing their ability to make informed decisions and reflect on their choices as responsible citizens." },
      { "title": "Application & Assessment", "description": "The debate was followed by an interactive session on traffic rules and a clarifying quiz, reinforcing essential road safety guidelines." }
    ],
    reflection: "The success of the assembly validated the power of using real-life scenarios and ethical dilemmas to teach SEL principles. By creating a collaborative environment, the project ensured that these young minds were learning the significance of making informed, safety-conscious decisions from an early age, fostering respect and responsibility in an inclusive classroom culture.",
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
        quote: "It gives me immense pleasure to share my appreciation for Ms. Nanda Devadas, who has been an integral part of AIMEE International School’s Science Faculty for the past two years.  Nanda joined AIMEE as a fresher, and the way she quickly embraced our inquiry-based teaching philosophy is truly commendable. From the very beginning, she demonstrated an exceptional ability to transform abstract scientific ideas into engaging, visual, and student-friendly learning experiences. Her dedication to preparing high-quality lesson slides and teaching materials reflects both her deep understanding of the subject and her commitment to ensuring conceptual mastery among students.  What distinguishes Nanda is her genuine passion for learning and teaching. She goes beyond delivering lessons, she designs inquiry-driven question papers that stimulate reasoning and logical thinking, helping students connect concepts to real-life situations. Parents have often expressed how her thoughtful assessment design helped their children think scientifically and independently.  Two moments beautifully capture who Nanda is as an educator:  Her students still ask to connect with her on video calls, even after she moved on, just to share their joy and learning, an unmistakable sign of the bond she created.  Parents from her sections continue to ask about her well-being, remembering her warmth, consistency, and personal attention to every child.  As a director, I consider Nanda one of the finest members of our team, a teacher whose sincerity, curiosity, and professional growth embody AIMEE’s spirit of innovation in education. She leaves behind a strong legacy of excellence, compassion, and scientific curiosity.  Omkara Dantu Director, AIMEE International School",
        author: "Omkara Dantu",
        affiliation: "Principal, AIMEE International School",
        order: 1,
        published: true
    },
    {
        quote: "Nanda's teaching style is a masterful blend of heart and intellect, where emotional connections pave the way for profound learning. With a keen eye on each student's unique needs, she crafts personalized learning journeys, deviating from traditional one-size-fits-all approaches. Her experiential learning methodology ignites scientific curiosity, as students engage in hands-on experiments that spark wonder and discovery. What sets her apart is her unwavering commitment to the holistic development of every child, meeting them where they are, and gently nudging them forward. With a perfect balance of scientific temperament and emotional intelligence, Nanda creates a safe, inclusive, and stimulating environment that inspires students to grow, explore, and thrive.",
        author: "Alekhya Bellapu",
        affiliation: "Science Department Lead",
        order: 2,
        published: true
    },
    {
        quote: "Nanda mam was a biology teacher, it's the subject with an enormous amount of realistic theories and information and she was the right teacher for me to make it in a smoother way, she has made each and every concept so clear for the whole class and gave us practical knowledge. No matter how hard the topic is, she is the excellent teacher to detangle the difficulty and give a nice representation of the respective topic",
        author: "Sana",
        affiliation: "Grade 10 Student",
        order: 4,
        published: true
    },
    {
        quote: "My experience with Ms. Nanda has always been very clear and explanatory. She has an excellent grasp of the sciences, and I consider myself lucky to have learned biology from her for my grade 10 IGCSE examinations. She is very supportive, explains practicals clearly, and dedicates ample time to clarifying doubts. I am always grateful to her, as she is a wonderfully passionate teacher.",
        author: "Mitravindha",
        affiliation: "Grade 10 Student",
        order: 5,
        published: true
    },
    {
        quote: "You have taught me much more than academics. You explained each topic clearly. Your passion for teaching is contagious and has inspired me to become a better student. I will always remember the lessons you have taught me and our shared memories in your tuition.",
        author: "Sanathana",
        affiliation: "Grade 5 Student",
        order: 6,
        published: true
    },
    {
        quote: "Dear Ms. Nanda mam,  I want to express my heartfelt gratitude for everything you’ve done. You have been incredibly supportive and kind, always there to help and encourage me. Your friendly nature and warm approach have made learning so enjoyable. I especially appreciate how you use experiments to make concepts come alive and how you trusted me with the main role in the assembly. That meant a lot to me and showed how much you believe in your students.  Thank you for being such a wonderful teacher and mentor 🫂 😍",
        author: "Vihaan",
        affiliation: "Grade 4 Student",
        order: 7,
        published: true
    },
    {
        quote: "Nanda maam, She is the Science teacher for my son Arjun in grade 3 and 4 , she made learning both exciting and meaningful with clear explanations, hands-on activities, she inspire curiosity in every child. Complex concepts are taught in a simple, easy-to-understand way. She used to help students in making projects where students can understand concepts easily. Her patience, dedication, and passion for science have created a love for the subject in young learners. We are truly grateful for the positive impact she has on the students’ academic growth and confidence. Thank you Nanda maam 😍",
        author: "Sindhu Mukkamala",
        affiliation: "Parent (Grade 4)",
        order: 8,
        published: true
    },
    {
        quote: "Dear Nanda Ma'am,  Thank you so much for being an exceptional teacher and guiding star in my child's (Jaya Nandhan) educational,social and emotional journey. Beyond lessons and textbooks, you have nurtured curiosity, confidence and a love for learning in a way that only a passionate teacher can. Your kindness, patience, and inspiration have touched not just my child's education but also his outlook towards knowledge and growth. I will remain deeply grateful. Your lessons are my child's world. Once again thank you so much ma'am for helping my child become a better person and excel in education , especially in Science.  With Warm Regards, Y Hymavathi",
        author: "Hymavathi",
        affiliation: "Parent (Grade 4)",
        order: 9,
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

