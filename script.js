/* =========================================================
   Mokdad Anas — Portfolio
   Vanilla JS: i18n, theme, loader, navigation, animations
   ========================================================= */
'use strict';

/* ---------------------------------------------------------
   1. Translations — single source of truth (EN / FR)
   Every visible string in index.html carries one of:
     data-i18n="key"         -> textContent
     data-i18n-html="key"    -> innerHTML (trusted, static)
     data-i18n-attr="attr:key;attr:key"
   --------------------------------------------------------- */
const I18N = {
  "en": {
    "meta.title": "Anas Mokdad — Full-Stack Developer & Cybersecurity Engineering Student",
    "meta.description": "Portfolio of Anas Mokdad: full-stack developer and cybersecurity engineering student at TEK-UP, working across web platforms, AI tools and vision-guided robotics.",
    "ui.showDetails": "Show details",
    "ui.hideDetails": "Hide details",
    "ui.copied": "Copied",
    "ui.copyFailed": "Copy failed",
    "ui.openMenu": "Open menu",
    "ui.closeMenu": "Close menu",
    "ui.toLight": "Switch to light mode",
    "ui.toDark": "Switch to dark mode",
    "hero.role0": "Full-Stack Developer",
    "hero.role1": "Cybersecurity Engineering",
    "hero.role2": "Robotics & Computer Vision",
    "hero.badge": "Cybersecurity Engineering Student · TEK‑UP",
    "hero.description": "I build secure, scalable software — from full-stack web platforms and AI tools to vision-guided robotics. I care about clean architecture and systems that are secure by design.",
    "hero.pill1": "Hackathon competitor",
    "hero.pill2": "Freelancer",
    "hero.pill3": "CTF player",
    "hero.viewWork": "View my work",
    "hero.getInTouch": "Get in touch",
    "hero.downloadCV": "Download CV",
    "stats.projects": "Projects",
    "stats.internships": "Internships",
    "stats.tech": "Technologies",
    "about.card.endToEnd.title": "End-to-end ownership",
    "about.card.endToEnd.desc": "From architecture design and requirement gathering to containerized deployment — I own the full lifecycle.",
    "about.card.security.title": "Security-first mindset",
    "about.card.security.desc": "Integrating enterprise-grade auth (Azure AD/SSO), secure CRUD, and cloud-ready infrastructure by default.",
    "about.card.international.title": "International collaboration",
    "about.card.international.desc": "Technical point-of-contact for international clients, with C2-level English proficiency (EF SET 74/100).",
    "about.card.data.title": "Data-driven solutions",
    "about.card.data.desc": "Bridging Big Data, ETL pipelines, and visualization to turn raw data into actionable insights.",
    "about.card.hardware.title": "From code to hardware",
    "about.card.hardware.desc": "Took a vision-guided ROS 2 system from RViz simulation to a physical 6-DOF industrial arm, with safety limits built in.",
    "about.card.competitive.title": "Competitive mindset",
    "about.card.competitive.desc": "Hackathons and CTFs keep me sharp: shipping under pressure, thinking like an attacker, and learning fast.",
    "about.label": "About",
    "about.title": "About me.",
    "about.subtitle": "The developer behind the projects.",
    "about.p1": "I'm <strong>Mokdad Anas</strong>, a Full-Stack Developer and Cybersecurity Engineering student at <strong>TEK-UP University</strong> in Tunisia, with a Licence in Information Technology from ISET Charguia.",
    "about.p2": "Across four internships, I went from building my first Node.js backend to leading a containerized React and Django/FastAPI platform with Azure AD single sign-on and an AI chatbot, acting as technical point of contact for international clients. Most recently at <strong>Tekonsult</strong>, I started with no robotics background and built a vision-guided control system for a JAKA Mini 2 industrial arm using ROS 2, OpenCV and MediaPipe — validated in simulation first, then on the real hardware.",
    "about.p3": "My engineering studies push everything I build toward security by design: web application security, network security and cryptography. Outside class, I compete in hackathons and CTFs, take on freelance projects, and build AI tools with LangChain and RAG.",
    "about.p4": "What ties it together: I like owning a system end to end — understanding the need, designing the architecture, writing the code, and making sure it's secure when it ships.",
    "exp.tekonsult.b0": "Designed and built a <strong>vision-guided control system</strong> for a JAKA Mini 2 6-DOF industrial robotic arm using <strong>ROS 2 Humble and Python</strong>, starting with no prior robotics experience.",
    "exp.tekonsult.b1": "Built a ROS 2 pipeline of independent nodes (vision, hand tracking, control, simulation) communicating over topics and services.",
    "exp.tekonsult.b2": "Developed real-time perception with <strong>OpenCV</strong> (HSV color tracking) and <strong>MediaPipe</strong> hand tracking, where an open hand previews a target and a closed fist triggers the arm.",
    "exp.tekonsult.b3": "Implemented <strong>inverse kinematics</strong> from the JAKA URDF with ikpy, using TF2 for live TCP tracking, so all six joints move together to reach each target.",
    "exp.tekonsult.b4": "Added safety features: workspace limits, joint-jump protection, singularity detection, and status overlays on the live camera feed.",
    "exp.tekonsult.b5": "Validated everything in <strong>RViz simulation</strong> first, then connected to the physical arm through the JAKA driver and tested joint motion on hardware.",
    "exp.tekonsult.b6": "Documented and versioned the project on GitHub.",
    "exp.tekonsult.role": "Robotics & Computer Vision Intern",
    "exp.tekonsult.company": "Tekonsult · Hybrid, Tunis",
    "exp.tekonsult.date": "Jul 2026 – Sep 2026 · 3 mos",
    "exp.tekonsult.chip.0": "ROS 2 Humble",
    "exp.tekonsult.chip.1": "Python",
    "exp.tekonsult.chip.2": "OpenCV",
    "exp.tekonsult.chip.3": "MediaPipe",
    "exp.tekonsult.chip.4": "ikpy",
    "exp.tekonsult.chip.5": "TF2",
    "exp.tekonsult.chip.6": "URDF",
    "exp.tekonsult.chip.7": "RViz",
    "exp.transcom.b0": "Handled customer inquiries professionally in a <strong>fast-paced international call center</strong> environment.",
    "exp.transcom.b1": "Strengthened <strong>English communication skills</strong> through daily interaction with international customers.",
    "exp.transcom.b2": "Developed adaptability, problem-solving, and professional teamwork skills under pressure.",
    "exp.transcom.role": "Customer Service Agent",
    "exp.transcom.company": "Transcom Tunisia · On-site",
    "exp.transcom.date": "Summer 2025",
    "exp.transcom.chip.0": "English Communication",
    "exp.transcom.chip.1": "Problem Solving",
    "exp.transcom.chip.2": "Teamwork",
    "exp.avaxiaFs.b0": "Led end-to-end development of a <strong>containerized web application</strong> for international scalability with Azure cloud identity management and generative AI features.",
    "exp.avaxiaFs.b1": "Engineered a decoupled architecture: <strong>React frontend + Django/FastAPI backend</strong> with Docker deployment.",
    "exp.avaxiaFs.b2": "Integrated <strong>Azure Active Directory (Entra ID)</strong> for enterprise-level SSO and role-based access control.",
    "exp.avaxiaFs.b3": "Designed and deployed an <strong>AI Chatbot</strong> to enhance user support efficiency.",
    "exp.avaxiaFs.b4": "Acted as technical point-of-contact for international clients — requirement gathering &amp; multicultural presentation.",
    "exp.avaxiaFs.role": "Software Engineering Intern – Full-Stack",
    "exp.avaxiaFs.company": "Avaxia Group · On-site, Tunis",
    "exp.avaxiaFs.date": "Feb 2025 – Jun 2025 · 5 mos",
    "exp.avaxiaFs.chip.0": "React",
    "exp.avaxiaFs.chip.1": "Django",
    "exp.avaxiaFs.chip.2": "FastAPI",
    "exp.avaxiaFs.chip.3": "Azure AD",
    "exp.avaxiaFs.chip.4": "Docker",
    "exp.avaxiaFs.chip.5": "AI",
    "exp.avaxiaFs.chip.6": "Chatbot",
    "exp.avaxiaBe.b0": "Built a functional web application using <strong>PHP and SQL</strong>, focusing on secure CRUD operations and session management.",
    "exp.avaxiaBe.b1": "Optimized existing codebase for better performance and improved database query efficiency.",
    "exp.avaxiaBe.b2": "Deep-dived into MVC architectural patterns and the Request-Response lifecycle.",
    "exp.avaxiaBe.role": "Web Development Intern – Backend Focused",
    "exp.avaxiaBe.company": "Avaxia Group · On-site, Tunis",
    "exp.avaxiaBe.date": "Feb 2024 – Mar 2024 · 2 mos",
    "exp.avaxiaBe.chip.0": "PHP",
    "exp.avaxiaBe.chip.1": "SQL",
    "exp.avaxiaBe.chip.2": "MVC",
    "exp.avaxiaBe.chip.3": "Session Management",
    "exp.avaxiaJr.b0": "First professional immersion: developed a lightweight <strong>Node.js backend application</strong>.",
    "exp.avaxiaJr.b1": "Mastered asynchronous programming concepts and foundational API structures.",
    "exp.avaxiaJr.role": "Junior Developer Intern",
    "exp.avaxiaJr.company": "Avaxia Group · On-site, Tunis",
    "exp.avaxiaJr.date": "Feb 2023 – Mar 2023 · 2 mos",
    "exp.avaxiaJr.chip.0": "Node.js",
    "exp.avaxiaJr.chip.1": "JavaScript",
    "exp.avaxiaJr.chip.2": "REST",
    "exp.avaxiaJr.chip.3": "APIs",
    "exp.avaxiaJr.chip.4": "Async Programming",
    "experience.label": "Experience",
    "experience.title": "Experience.",
    "experience.subtitle": "Professional experience and key achievements.",
    "projects.link.demo": "Live demo",
    "projects.link.code": "View code",
    "projects.link.post": "View post",
    "projects.featured": "Featured",
    "projects.filter.all": "All",
    "projects.filter.ai": "AI / ML",
    "projects.filter.web": "Full-Stack / Web",
    "projects.filter.robotics": "Robotics",
    "projects.filter.data": "Data",
    "projects.filter.sys": "Systems",
    "proj.jaka.cat": "Robotics · ROS 2 · CV",
    "proj.jaka.title": "JAKA Visual Servoing",
    "proj.jaka.desc": "Real-time visual servoing system for JAKA Mini 2 robotic arm using camera-based detection. Features OpenCV color tracking and MediaPipe hand gesture control with inverse kinematics simulation in RViz.",
    "proj.jaka.chip.0": "ROS 2",
    "proj.jaka.chip.1": "Python",
    "proj.jaka.chip.2": "OpenCV",
    "proj.jaka.chip.3": "MediaPipe",
    "proj.sentinel.cat": "AI · Security · Banking",
    "proj.sentinel.title": "Sentinel",
    "proj.sentinel.desc": "Autonomous AI compliance system for NORDA Bank with multi-agent architecture. Handles AML transaction monitoring and KYC client onboarding through specialized agents, featuring zero-trust validation and EU AI Act compliance.",
    "proj.sentinel.chip.0": "Python",
    "proj.sentinel.chip.1": "LangGraph",
    "proj.sentinel.chip.2": "Streamlit",
    "proj.sentinel.chip.3": "Security",
    "proj.evalapp.cat": "AI · Full-Stack",
    "proj.evalapp.title": "AI-Powered Employee Evaluation Platform",
    "proj.evalapp.desc": "End-to-end intelligent HR platform for AVAXIA Group. Replaces manual evaluation with a data-driven, AI-guided system. Features Azure SSO, LLM-powered personalized career feedback, and Agile Scrum delivery across 4 sprints.",
    "proj.evalapp.chip.0": "React",
    "proj.evalapp.chip.1": "Django",
    "proj.evalapp.chip.2": "FastAPI",
    "proj.evalapp.chip.3": "Azure AD",
    "proj.evalapp.chip.4": "LLM / AI",
    "proj.evalapp.chip.5": "MySQL",
    "proj.evalapp.chip.6": "Docker",
    "proj.pathfinder.cat": "AI · RAG · Career",
    "proj.pathfinder.title": "PathFinder TN",
    "proj.pathfinder.desc": "Agentic RAG system providing personalized career guidance through CV analysis. Built with LangChain agents powered by Llama 3.1, featuring FastAPI backend and interactive frontend for TEK-UP's AI module.",
    "proj.pathfinder.chip.0": "Python",
    "proj.pathfinder.chip.1": "LangChain",
    "proj.pathfinder.chip.2": "FAISS",
    "proj.pathfinder.chip.3": "FastAPI",
    "proj.mp21.cat": "AI · Robotics · Control",
    "proj.mp21.title": "Hand Robot Control (MP21)",
    "proj.mp21.desc": "AI-powered hand tracking system controlling 6-DOF robotic arm in real-time. Uses MediaPipe for 21-landmark detection, gesture recognition, and coordinate transformation pipeline with safety enforcement and PyQt5 dashboard.",
    "proj.mp21.chip.0": "ROS 2",
    "proj.mp21.chip.1": "MediaPipe",
    "proj.mp21.chip.2": "PyQt5",
    "proj.mp21.chip.3": "Computer Vision",
    "proj.workout.cat": "Full-Stack · Real-Time",
    "proj.workout.title": "Workout Tracking Application",
    "proj.workout.desc": "Comprehensive fitness app with dynamic dashboards, a custom recommendation engine analyzing past performance, real-time notifications, and a dedicated communication channel for user collaboration.",
    "proj.workout.chip.0": "Angular",
    "proj.workout.chip.1": "Node.js",
    "proj.workout.chip.2": "Express",
    "proj.workout.chip.3": "MongoDB",
    "proj.workout.chip.4": "Real-Time",
    "proj.imdb.cat": "Big Data · Analytics",
    "proj.imdb.title": "IMDB Movie Analytics Dashboard",
    "proj.imdb.desc": "Transformed a raw IMDB dataset into a fully interactive multi-page Power BI dashboard. Used Talend Open Studio for ETL, designed a star schema data model, and uncovered trends in revenue, ratings, and genre popularity.",
    "proj.imdb.chip.0": "Talend ETL",
    "proj.imdb.chip.1": "Power BI",
    "proj.imdb.chip.2": "Star Schema",
    "proj.imdb.chip.3": "Data Modeling",
    "proj.imdb.chip.4": "Big Data",
    "proj.rms.cat": "Systems · C Programming",
    "proj.rms.title": "Robot Management System (RMS)",
    "proj.rms.desc": "Console-based C application simulating management of a robot fleet. Features per-user data isolation via structured text files, robot CRUD, battery/temperature monitoring, activity history, and basic diagnostics — all without external frameworks.",
    "proj.rms.chip.0": "C",
    "proj.rms.chip.1": "Structured Programming",
    "proj.rms.chip.2": "File Handling",
    "proj.rms.chip.3": "Custom Data Structures",
    "proj.tribotics.cat": "AI · Game · Frontend",
    "proj.tribotics.title": "Tribotics",
    "proj.tribotics.desc": "A gamified frontend app where users design autonomous robots for extreme environments, backed by an AI chatbot. Players earn a score, receive AI-powered feedback on their design choices, and can share results with friends.",
    "proj.tribotics.chip.0": "Frontend",
    "proj.tribotics.chip.1": "AI Chatbot",
    "proj.tribotics.chip.2": "Gamification",
    "proj.tribotics.chip.3": "Netlify",
    "proj.souqai.cat": "AI · Hackathon · Frontend",
    "proj.souqai.title": "SouqAI",
    "proj.souqai.desc": "A frontend prototype built during a hackathon that helps Tunisian artisans promote their handcrafted products using AI. Designed to bridge the gap between traditional craft culture and digital markets.",
    "proj.souqai.chip.0": "Frontend",
    "proj.souqai.chip.1": "AI",
    "proj.souqai.chip.2": "Hackathon",
    "proj.souqai.chip.3": "Netlify",
    "proj.binomy.cat": "Web · Platform · PHP",
    "proj.binomy.title": "Binomy",
    "proj.binomy.desc": "Student housing platform connecting Tunisian students with compatible roommates and affordable housing. Features matching system based on preferences, real-time messaging, and secure authentication with PDO.",
    "proj.binomy.chip.0": "PHP",
    "proj.binomy.chip.1": "MySQL",
    "proj.binomy.chip.2": "JavaScript",
    "proj.binomy.chip.3": "REST API",
    "proj.shoc.cat": "Web · E-commerce · Frontend",
    "proj.shoc.title": "SHOC Energy Drinks",
    "proj.shoc.desc": "Functional e-commerce website with authentication system, shopping cart with localStorage persistence, product catalog, and responsive checkout. Clean frontend implementation with form validation and order summary.",
    "proj.shoc.chip.0": "HTML",
    "proj.shoc.chip.1": "CSS",
    "proj.shoc.chip.2": "JavaScript",
    "proj.shoc.chip.3": "localStorage",
    "proj.pcap.cat": "Web · Education · Quiz",
    "proj.pcap.title": "PCAP Questions",
    "proj.pcap.desc": "Interactive quiz application for Python certification preparation. Features question bank with multiple-choice format, score tracking, and responsive interface for studying PCAP exam topics.",
    "proj.pcap.chip.0": "JavaScript",
    "proj.pcap.chip.1": "HTML",
    "proj.pcap.chip.2": "CSS",
    "proj.pcap.chip.3": "Quiz Engine",
    "projects.label": "Projects",
    "projects.title": "Selected work.",
    "projects.subtitle": "A selection of my recent work and personal projects.",
    "projects.filterLabel": "Filter projects",
    "projects.empty": "No projects in this category yet.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.0": "React.js",
    "skills.frontend.1": "Angular",
    "skills.frontend.2": "HTML5 / CSS3",
    "skills.frontend.3": "Bootstrap",
    "skills.frontend.4": "JavaScript",
    "skills.frontend.5": "Flutter",
    "skills.backend.title": "Backend",
    "skills.backend.0": "Django",
    "skills.backend.1": "FastAPI",
    "skills.backend.2": "Node.js",
    "skills.backend.3": "Spring Boot",
    "skills.backend.4": "Symfony / PHP",
    "skills.backend.5": "SOAP / SOA",
    "skills.security.title": "Cybersecurity",
    "skills.security.0": "OWASP Top 10 / Web pentesting",
    "skills.security.1": "Network security & ACLs (GNS3, Cisco IOS)",
    "skills.security.2": "Wireshark",
    "skills.security.3": "Nmap",
    "skills.security.4": "Scapy",
    "skills.security.5": "Cryptography fundamentals",
    "skills.security.6": "Red Hat Linux",
    "skills.robotics.title": "Robotics & Computer Vision",
    "skills.robotics.0": "ROS 2 Humble (nodes, topics, services)",
    "skills.robotics.1": "RViz simulation",
    "skills.robotics.2": "OpenCV",
    "skills.robotics.3": "MediaPipe",
    "skills.robotics.4": "Hand gesture recognition",
    "skills.robotics.5": "Inverse kinematics (ikpy)",
    "skills.robotics.6": "URDF",
    "skills.robotics.7": "TF2",
    "skills.robotics.8": "JAKA Mini 2 (ROS 2 driver)",
    "skills.robotics.9": "Hardware integration",
    "skills.robotics.10": "PyQt5",
    "skills.data.title": "Data & AI",
    "skills.data.0": "Python",
    "skills.data.1": "Big Data Analytics",
    "skills.data.2": "Talend ETL",
    "skills.data.3": "Power BI",
    "skills.data.4": "SQL",
    "skills.data.5": "AI Chatbot Integration",
    "skills.data.6": "LangChain",
    "skills.data.7": "LangGraph",
    "skills.data.8": "RAG / FAISS",
    "skills.cloud.title": "Cloud & DevOps",
    "skills.cloud.0": "Microsoft Azure",
    "skills.cloud.1": "Azure AD / SSO",
    "skills.cloud.2": "Docker",
    "skills.databases.title": "Databases",
    "skills.databases.0": "MySQL",
    "skills.databases.1": "MongoDB",
    "skills.databases.2": "SQL (advanced)",
    "skills.databases.3": "MVC Patterns",
    "skills.tools.title": "Tools & Methods",
    "skills.tools.0": "Java / OOP",
    "skills.tools.1": "C",
    "skills.tools.2": "UML / Architecture",
    "skills.tools.3": "Agile Scrum",
    "skills.tools.4": "Git",
    "skills.tools.5": "English (C2)",
    "skills.label": "Skills",
    "skills.title": "What I work with.",
    "skills.subtitle": "A toolbox across web development, security, data, AI and robotics.",
    "education.label": "Education",
    "education.title": "Academic path.",
    "education.subtitle": "Degrees and certificates.",
    "edu.tekup.degree": "Engineer's Degree — Cybersecurity & Computer Science",
    "edu.tekup.school": "TEK-UP University of Digital Sciences",
    "edu.tekup.years": "Sep 2025 – Jun 2027 · In Progress",
    "edu.iset.degree": "Licence — Information Technology",
    "edu.iset.school": "ISET Charguia · Higher Institute of Technological Studies",
    "edu.iset.years": "Sep 2022 – Jun 2025 · Graduated",
    "edu.certsTitle": "Certificates & achievements",
    "cert.efset.title": "EF SET English Certificate",
    "cert.efset.sub": "74/100 · C2 Proficient",
    "cert.scrum.title": "Agile Scrum Methodology",
    "cert.scrum.sub": "Practiced across 4 professional sprints",
    "cert.azure.title": "Azure Active Directory / SSO",
    "cert.azure.sub": "Enterprise-level implementation · Avaxia",
    "cert.congress.title": "TEK-UP Digital Congress",
    "cert.congress.sub": "Certificate of Participation · Apr–May 2026",
    "ui.copy": "Copy",
    "contact.label": "Contact",
    "contact.title": "Let's talk.",
    "contact.subtitle": "Let's discuss projects and collaborations.",
    "contact.description": "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!",
    "contact.reply": "I usually reply within 24 hours.",
    "contact.sendEmail": "Send an email",
    "contact.copyEmail": "Copy email address",
    "contact.email": "Email",
    "contact.copyPhone": "Copy phone number",
    "contact.phone": "Phone",
    "contact.copyGithub": "Copy GitHub link",
    "contact.github": "GitHub",
    "contact.copyLinkedin": "Copy LinkedIn link",
    "contact.linkedin": "LinkedIn",
    "contact.locationValue": "Tunis-Ariana, Tunisia",
    "contact.location": "Location",
    "ui.mainNav": "Main navigation",
    "ui.home": "Mokdad Anas — back to top",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "ui.language": "Language",
    "nav.cv": "Download CV",
    "nav.getInTouch": "Get in touch",
    "footer.copyright": "© 2024 Mokdad Anas. All rights reserved.",
    "footer.made": "Made with passion & caffeine",
    "contact.email.aria": "Send an email",
    "footer.top": "Back to top",
    "ui.loading": "Loading",
    "ui.skip": "Skip to content"
  },
  "fr": {
    "meta.title": "Anas Mokdad — Développeur Full-Stack & Étudiant Ingénieur en Cybersécurité",
    "meta.description": "Portfolio d'Anas Mokdad : développeur full-stack et étudiant ingénieur en cybersécurité à TEK-UP, entre plateformes web, outils IA et robotique guidée par la vision.",
    "ui.showDetails": "Voir les détails",
    "ui.hideDetails": "Masquer les détails",
    "ui.copied": "Copié",
    "ui.copyFailed": "Échec de la copie",
    "ui.openMenu": "Ouvrir le menu",
    "ui.closeMenu": "Fermer le menu",
    "ui.toLight": "Passer en mode clair",
    "ui.toDark": "Passer en mode sombre",
    "hero.role0": "Développeur Full-Stack",
    "hero.role1": "Ingénierie en cybersécurité",
    "hero.role2": "Robotique & Vision par ordinateur",
    "hero.badge": "Étudiant ingénieur en cybersécurité · TEK‑UP",
    "hero.description": "Je conçois des logiciels sécurisés et évolutifs — des plateformes web full-stack et outils IA jusqu'à la robotique guidée par la vision. J'accorde une grande importance à une architecture propre et à la sécurité dès la conception.",
    "hero.pill1": "Compétiteur de hackathons",
    "hero.pill2": "Freelance",
    "hero.pill3": "Joueur de CTF",
    "hero.viewWork": "Voir mes projets",
    "hero.getInTouch": "Me contacter",
    "hero.downloadCV": "Télécharger le CV",
    "stats.projects": "Projets",
    "stats.internships": "Stages",
    "stats.tech": "Technologies",
    "about.card.endToEnd.title": "Maîtrise de bout en bout",
    "about.card.endToEnd.desc": "De la conception de l'architecture et du recueil des besoins jusqu'au déploiement conteneurisé : je prends en charge tout le cycle de vie.",
    "about.card.security.title": "Sécurité avant tout",
    "about.card.security.desc": "Authentification d'entreprise (Azure AD/SSO), CRUD sécurisé et infrastructure prête pour le cloud, intégrés par défaut.",
    "about.card.international.title": "Collaboration internationale",
    "about.card.international.desc": "Interlocuteur technique de clients internationaux, avec un niveau d'anglais C2 (EF SET 74/100).",
    "about.card.data.title": "Solutions orientées données",
    "about.card.data.desc": "Big Data, pipelines ETL et visualisation pour transformer des données brutes en informations exploitables.",
    "about.card.hardware.title": "Du code au matériel",
    "about.card.hardware.desc": "Un système ROS 2 guidé par la vision, de la simulation RViz jusqu'à un vrai bras industriel 6 axes, avec des limites de sécurité intégrées.",
    "about.card.competitive.title": "Esprit de compétition",
    "about.card.competitive.desc": "Les hackathons et les CTF me gardent affûté : livrer sous pression, penser comme un attaquant et apprendre vite.",
    "about.label": "À propos",
    "about.title": "À propos.",
    "about.subtitle": "Le développeur derrière les projets.",
    "about.p1": "Je suis <strong>Mokdad Anas</strong>, développeur Full-Stack et étudiant en ingénierie de la cybersécurité à <strong>l'Université TEK-UP</strong> en Tunisie, titulaire d'une Licence en Technologies de l'Information de l'ISET Charguia.",
    "about.p2": "Au fil de quatre stages, je suis passé de mon premier backend Node.js à la conduite d'une plateforme conteneurisée React et Django/FastAPI avec authentification unique Azure AD et chatbot IA, en tant qu'interlocuteur technique de clients internationaux. Plus récemment chez <strong>Tekonsult</strong>, parti de zéro en robotique, j'ai construit un système de contrôle guidé par la vision pour un bras industriel JAKA Mini 2 avec ROS 2, OpenCV et MediaPipe — validé d'abord en simulation, puis sur le matériel réel.",
    "about.p3": "Mes études d'ingénieur orientent tout ce que je construis vers la sécurité dès la conception : sécurité des applications web, sécurité réseau et cryptographie. En dehors des cours, je participe à des hackathons et des CTF, je réalise des projets en freelance et je développe des outils IA avec LangChain et le RAG.",
    "about.p4": "Le fil conducteur : j'aime maîtriser un système de bout en bout — comprendre le besoin, concevoir l'architecture, écrire le code et m'assurer qu'il est sécurisé à sa mise en production.",
    "exp.tekonsult.b0": "Conception et réalisation d'un <strong>système de contrôle guidé par la vision</strong> pour un bras robotique industriel JAKA Mini 2 à 6 axes, avec <strong>ROS 2 Humble et Python</strong>, sans expérience préalable en robotique.",
    "exp.tekonsult.b1": "Mise en place d'un pipeline ROS 2 de nœuds indépendants (vision, suivi de la main, contrôle, simulation) communiquant via des topics et des services.",
    "exp.tekonsult.b2": "Développement de la perception temps réel avec <strong>OpenCV</strong> (suivi de couleur HSV) et le suivi de la main <strong>MediaPipe</strong> : une main ouverte prévisualise la cible, un poing fermé déclenche le bras.",
    "exp.tekonsult.b3": "Implémentation de la <strong>cinématique inverse</strong> à partir de l'URDF JAKA avec ikpy, et de TF2 pour le suivi du TCP en direct, afin que les six articulations bougent ensemble pour atteindre chaque cible.",
    "exp.tekonsult.b4": "Ajout de fonctions de sécurité : limites de l'espace de travail, protection contre les sauts d'articulation, détection des singularités et indicateurs d'état sur le flux caméra.",
    "exp.tekonsult.b5": "Validation complète en <strong>simulation RViz</strong>, puis connexion au bras réel via le driver JAKA et tests des mouvements articulaires sur le matériel.",
    "exp.tekonsult.b6": "Documentation et versionnement du projet sur GitHub.",
    "exp.tekonsult.role": "Stagiaire Robotique & Vision par ordinateur",
    "exp.tekonsult.company": "Tekonsult · Hybride, Tunis",
    "exp.tekonsult.date": "Juil. 2026 – Sept. 2026 · 3 mois",
    "exp.tekonsult.chip.0": "ROS 2 Humble",
    "exp.tekonsult.chip.1": "Python",
    "exp.tekonsult.chip.2": "OpenCV",
    "exp.tekonsult.chip.3": "MediaPipe",
    "exp.tekonsult.chip.4": "ikpy",
    "exp.tekonsult.chip.5": "TF2",
    "exp.tekonsult.chip.6": "URDF",
    "exp.tekonsult.chip.7": "RViz",
    "exp.transcom.b0": "Traitement professionnel des demandes clients dans un <strong>centre d'appels international</strong> au rythme soutenu.",
    "exp.transcom.b1": "Renforcement de mes <strong>compétences de communication en anglais</strong> grâce aux échanges quotidiens avec des clients internationaux.",
    "exp.transcom.b2": "Développement de l'adaptabilité, de la résolution de problèmes et du travail en équipe sous pression.",
    "exp.transcom.role": "Agent du service client",
    "exp.transcom.company": "Transcom Tunisie · Sur site",
    "exp.transcom.date": "Été 2025",
    "exp.transcom.chip.0": "Communication en anglais",
    "exp.transcom.chip.1": "Résolution de problèmes",
    "exp.transcom.chip.2": "Travail en équipe",
    "exp.avaxiaFs.b0": "Pilotage du développement de bout en bout d'une <strong>application web conteneurisée</strong> conçue pour l'international, avec gestion d'identité Azure et fonctionnalités d'IA générative.",
    "exp.avaxiaFs.b1": "Conception d'une architecture découplée : <strong>frontend React + backend Django/FastAPI</strong>, déployée avec Docker.",
    "exp.avaxiaFs.b2": "Intégration d'<strong>Azure Active Directory (Entra ID)</strong> pour le SSO d'entreprise et le contrôle d'accès basé sur les rôles.",
    "exp.avaxiaFs.b3": "Conception et déploiement d'un <strong>chatbot IA</strong> pour améliorer l'efficacité du support utilisateur.",
    "exp.avaxiaFs.b4": "Interlocuteur technique pour des clients internationaux : recueil des besoins et présentations multiculturelles.",
    "exp.avaxiaFs.role": "Stagiaire Ingénierie Logicielle – Full-Stack",
    "exp.avaxiaFs.company": "Avaxia Group · Sur site, Tunis",
    "exp.avaxiaFs.date": "Févr. 2025 – Juin 2025 · 5 mois",
    "exp.avaxiaFs.chip.0": "React",
    "exp.avaxiaFs.chip.1": "Django",
    "exp.avaxiaFs.chip.2": "FastAPI",
    "exp.avaxiaFs.chip.3": "Azure AD",
    "exp.avaxiaFs.chip.4": "Docker",
    "exp.avaxiaFs.chip.5": "IA",
    "exp.avaxiaFs.chip.6": "Chatbot",
    "exp.avaxiaBe.b0": "Développement d'une application web fonctionnelle en <strong>PHP et SQL</strong>, axée sur des opérations CRUD sécurisées et la gestion des sessions.",
    "exp.avaxiaBe.b1": "Optimisation du code existant pour de meilleures performances et des requêtes base de données plus efficaces.",
    "exp.avaxiaBe.b2": "Approfondissement de l'architecture MVC et du cycle requête-réponse.",
    "exp.avaxiaBe.role": "Stagiaire Développement Web – Orienté Backend",
    "exp.avaxiaBe.company": "Avaxia Group · Sur site, Tunis",
    "exp.avaxiaBe.date": "Févr. 2024 – Mars 2024 · 2 mois",
    "exp.avaxiaBe.chip.0": "PHP",
    "exp.avaxiaBe.chip.1": "SQL",
    "exp.avaxiaBe.chip.2": "MVC",
    "exp.avaxiaBe.chip.3": "Gestion des sessions",
    "exp.avaxiaJr.b0": "Première immersion professionnelle : développement d'une <strong>application backend Node.js</strong> légère.",
    "exp.avaxiaJr.b1": "Maîtrise des concepts de programmation asynchrone et des bases de la structure d'une API.",
    "exp.avaxiaJr.role": "Stagiaire Développeur Junior",
    "exp.avaxiaJr.company": "Avaxia Group · Sur site, Tunis",
    "exp.avaxiaJr.date": "Févr. 2023 – Mars 2023 · 2 mois",
    "exp.avaxiaJr.chip.0": "Node.js",
    "exp.avaxiaJr.chip.1": "JavaScript",
    "exp.avaxiaJr.chip.2": "REST",
    "exp.avaxiaJr.chip.3": "APIs",
    "exp.avaxiaJr.chip.4": "Programmation asynchrone",
    "experience.label": "Expérience",
    "experience.title": "Expérience.",
    "experience.subtitle": "Expérience professionnelle et réalisations clés.",
    "projects.link.demo": "Démo en ligne",
    "projects.link.code": "Voir le code",
    "projects.link.post": "Voir la publication",
    "projects.featured": "À la une",
    "projects.filter.all": "Tous",
    "projects.filter.ai": "IA / ML",
    "projects.filter.web": "Full-Stack / Web",
    "projects.filter.robotics": "Robotique",
    "projects.filter.data": "Données",
    "projects.filter.sys": "Systèmes",
    "proj.jaka.cat": "Robotique · ROS 2 · Vision",
    "proj.jaka.title": "JAKA Visual Servoing",
    "proj.jaka.desc": "Système d'asservissement visuel en temps réel pour le bras robotique JAKA Mini 2, basé sur la détection par caméra : suivi de couleur OpenCV, contrôle par gestes de la main avec MediaPipe et simulation de cinématique inverse dans RViz.",
    "proj.jaka.chip.0": "ROS 2",
    "proj.jaka.chip.1": "Python",
    "proj.jaka.chip.2": "OpenCV",
    "proj.jaka.chip.3": "MediaPipe",
    "proj.sentinel.cat": "IA · Sécurité · Banque",
    "proj.sentinel.title": "Sentinel",
    "proj.sentinel.desc": "Système autonome de conformité IA pour NORDA Bank avec une architecture multi-agents. Il gère la surveillance des transactions AML et l'onboarding KYC via des agents spécialisés, avec validation zero-trust et conformité à l'AI Act européen.",
    "proj.sentinel.chip.0": "Python",
    "proj.sentinel.chip.1": "LangGraph",
    "proj.sentinel.chip.2": "Streamlit",
    "proj.sentinel.chip.3": "Sécurité",
    "proj.evalapp.cat": "IA · Full-Stack",
    "proj.evalapp.title": "Plateforme d'évaluation des employés propulsée par l'IA",
    "proj.evalapp.desc": "Plateforme RH intelligente de bout en bout pour AVAXIA Group. Elle remplace l'évaluation manuelle par un système guidé par les données et l'IA : SSO Azure, retours de carrière personnalisés générés par LLM et livraison Agile Scrum sur 4 sprints.",
    "proj.evalapp.chip.0": "React",
    "proj.evalapp.chip.1": "Django",
    "proj.evalapp.chip.2": "FastAPI",
    "proj.evalapp.chip.3": "Azure AD",
    "proj.evalapp.chip.4": "LLM / IA",
    "proj.evalapp.chip.5": "MySQL",
    "proj.evalapp.chip.6": "Docker",
    "proj.pathfinder.cat": "IA · RAG · Carrière",
    "proj.pathfinder.title": "PathFinder TN",
    "proj.pathfinder.desc": "Système RAG agentique qui fournit une orientation professionnelle personnalisée à partir de l'analyse de CV. Construit avec des agents LangChain propulsés par Llama 3.1, un backend FastAPI et un frontend interactif pour le module IA de TEK-UP.",
    "proj.pathfinder.chip.0": "Python",
    "proj.pathfinder.chip.1": "LangChain",
    "proj.pathfinder.chip.2": "FAISS",
    "proj.pathfinder.chip.3": "FastAPI",
    "proj.mp21.cat": "IA · Robotique · Contrôle",
    "proj.mp21.title": "Contrôle robot par la main (MP21)",
    "proj.mp21.desc": "Système de suivi de la main propulsé par l'IA qui contrôle un bras robotique 6 axes en temps réel : détection de 21 points avec MediaPipe, reconnaissance de gestes, pipeline de transformation de coordonnées avec contraintes de sécurité et tableau de bord PyQt5.",
    "proj.mp21.chip.0": "ROS 2",
    "proj.mp21.chip.1": "MediaPipe",
    "proj.mp21.chip.2": "PyQt5",
    "proj.mp21.chip.3": "Vision par ordinateur",
    "proj.workout.cat": "Full-Stack · Temps réel",
    "proj.workout.title": "Application de suivi d'entraînement",
    "proj.workout.desc": "Application fitness complète avec tableaux de bord dynamiques, moteur de recommandation basé sur les performances passées, notifications en temps réel et canal de communication dédié à la collaboration entre utilisateurs.",
    "proj.workout.chip.0": "Angular",
    "proj.workout.chip.1": "Node.js",
    "proj.workout.chip.2": "Express",
    "proj.workout.chip.3": "MongoDB",
    "proj.workout.chip.4": "Temps réel",
    "proj.imdb.cat": "Big Data · Analytique",
    "proj.imdb.title": "Tableau de bord d'analyse de films IMDB",
    "proj.imdb.desc": "Transformation d'un jeu de données IMDB brut en tableau de bord Power BI interactif sur plusieurs pages. ETL avec Talend Open Studio, modèle de données en étoile et analyse des tendances de revenus, de notes et de popularité des genres.",
    "proj.imdb.chip.0": "Talend ETL",
    "proj.imdb.chip.1": "Power BI",
    "proj.imdb.chip.2": "Schéma en étoile",
    "proj.imdb.chip.3": "Modélisation de données",
    "proj.imdb.chip.4": "Big Data",
    "proj.rms.cat": "Systèmes · Programmation C",
    "proj.rms.title": "Système de gestion de robots (RMS)",
    "proj.rms.desc": "Application console en C simulant la gestion d'une flotte de robots : isolation des données par utilisateur via des fichiers texte structurés, CRUD des robots, surveillance batterie et température, historique d'activité et diagnostics de base — sans aucun framework externe.",
    "proj.rms.chip.0": "C",
    "proj.rms.chip.1": "Programmation structurée",
    "proj.rms.chip.2": "Gestion de fichiers",
    "proj.rms.chip.3": "Structures de données personnalisées",
    "proj.tribotics.cat": "IA · Jeu · Frontend",
    "proj.tribotics.title": "Tribotics",
    "proj.tribotics.desc": "Une application frontend gamifiée où les utilisateurs conçoivent des robots autonomes pour des environnements extrêmes, assistés par un chatbot IA. Les joueurs obtiennent un score, des retours IA sur leurs choix de conception, et peuvent partager leurs résultats.",
    "proj.tribotics.chip.0": "Frontend",
    "proj.tribotics.chip.1": "Chatbot IA",
    "proj.tribotics.chip.2": "Gamification",
    "proj.tribotics.chip.3": "Netlify",
    "proj.souqai.cat": "IA · Hackathon · Frontend",
    "proj.souqai.title": "SouqAI",
    "proj.souqai.desc": "Un prototype frontend réalisé lors d'un hackathon pour aider les artisans tunisiens à promouvoir leurs produits artisanaux grâce à l'IA. Conçu pour faire le pont entre la culture artisanale traditionnelle et les marchés numériques.",
    "proj.souqai.chip.0": "Frontend",
    "proj.souqai.chip.1": "IA",
    "proj.souqai.chip.2": "Hackathon",
    "proj.souqai.chip.3": "Netlify",
    "proj.binomy.cat": "Web · Plateforme · PHP",
    "proj.binomy.title": "Binomy",
    "proj.binomy.desc": "Plateforme de logement étudiant qui met en relation des étudiants tunisiens avec des colocataires compatibles et des logements abordables : matching selon les préférences, messagerie en temps réel et authentification sécurisée avec PDO.",
    "proj.binomy.chip.0": "PHP",
    "proj.binomy.chip.1": "MySQL",
    "proj.binomy.chip.2": "JavaScript",
    "proj.binomy.chip.3": "REST API",
    "proj.shoc.cat": "Web · E-commerce · Frontend",
    "proj.shoc.title": "SHOC Energy Drinks",
    "proj.shoc.desc": "Site e-commerce fonctionnel avec système d'authentification, panier persistant via localStorage, catalogue produits et paiement responsive. Implémentation frontend propre avec validation des formulaires et récapitulatif de commande.",
    "proj.shoc.chip.0": "HTML",
    "proj.shoc.chip.1": "CSS",
    "proj.shoc.chip.2": "JavaScript",
    "proj.shoc.chip.3": "localStorage",
    "proj.pcap.cat": "Web · Éducation · Quiz",
    "proj.pcap.title": "PCAP Questions",
    "proj.pcap.desc": "Application de quiz interactive pour préparer la certification Python PCAP : banque de questions à choix multiples, suivi du score et interface responsive pour réviser les sujets de l'examen.",
    "proj.pcap.chip.0": "JavaScript",
    "proj.pcap.chip.1": "HTML",
    "proj.pcap.chip.2": "CSS",
    "proj.pcap.chip.3": "Moteur de quiz",
    "projects.label": "Projets",
    "projects.title": "Projets sélectionnés.",
    "projects.subtitle": "Une sélection de mes travaux récents et projets personnels.",
    "projects.filterLabel": "Filtrer les projets",
    "projects.empty": "Aucun projet dans cette catégorie pour le moment.",
    "skills.frontend.title": "Frontend",
    "skills.frontend.0": "React.js",
    "skills.frontend.1": "Angular",
    "skills.frontend.2": "HTML5 / CSS3",
    "skills.frontend.3": "Bootstrap",
    "skills.frontend.4": "JavaScript",
    "skills.frontend.5": "Flutter",
    "skills.backend.title": "Backend",
    "skills.backend.0": "Django",
    "skills.backend.1": "FastAPI",
    "skills.backend.2": "Node.js",
    "skills.backend.3": "Spring Boot",
    "skills.backend.4": "Symfony / PHP",
    "skills.backend.5": "SOAP / SOA",
    "skills.security.title": "Cybersécurité",
    "skills.security.0": "OWASP Top 10 / Pentest web",
    "skills.security.1": "Sécurité réseau & ACL (GNS3, Cisco IOS)",
    "skills.security.2": "Wireshark",
    "skills.security.3": "Nmap",
    "skills.security.4": "Scapy",
    "skills.security.5": "Bases de la cryptographie",
    "skills.security.6": "Red Hat Linux",
    "skills.robotics.title": "Robotique & Vision par ordinateur",
    "skills.robotics.0": "ROS 2 Humble (nœuds, topics, services)",
    "skills.robotics.1": "Simulation RViz",
    "skills.robotics.2": "OpenCV",
    "skills.robotics.3": "MediaPipe",
    "skills.robotics.4": "Reconnaissance de gestes",
    "skills.robotics.5": "Cinématique inverse (ikpy)",
    "skills.robotics.6": "URDF",
    "skills.robotics.7": "TF2",
    "skills.robotics.8": "JAKA Mini 2 (driver ROS 2)",
    "skills.robotics.9": "Intégration matérielle",
    "skills.robotics.10": "PyQt5",
    "skills.data.title": "Données & IA",
    "skills.data.0": "Python",
    "skills.data.1": "Analyse Big Data",
    "skills.data.2": "Talend ETL",
    "skills.data.3": "Power BI",
    "skills.data.4": "SQL",
    "skills.data.5": "Intégration de chatbots IA",
    "skills.data.6": "LangChain",
    "skills.data.7": "LangGraph",
    "skills.data.8": "RAG / FAISS",
    "skills.cloud.title": "Cloud & DevOps",
    "skills.cloud.0": "Microsoft Azure",
    "skills.cloud.1": "Azure AD / SSO",
    "skills.cloud.2": "Docker",
    "skills.databases.title": "Bases de données",
    "skills.databases.0": "MySQL",
    "skills.databases.1": "MongoDB",
    "skills.databases.2": "SQL (avancé)",
    "skills.databases.3": "Patrons MVC",
    "skills.tools.title": "Outils & Méthodes",
    "skills.tools.0": "Java / POO",
    "skills.tools.1": "C",
    "skills.tools.2": "UML / Architecture",
    "skills.tools.3": "Agile Scrum",
    "skills.tools.4": "Git",
    "skills.tools.5": "Anglais (C2)",
    "skills.label": "Compétences",
    "skills.title": "Mes outils.",
    "skills.subtitle": "Une boîte à outils entre développement web, sécurité, données, IA et robotique.",
    "education.label": "Formation",
    "education.title": "Parcours académique.",
    "education.subtitle": "Diplômes et certificats.",
    "edu.tekup.degree": "Diplôme d'ingénieur — Cybersécurité & Informatique",
    "edu.tekup.school": "Université TEK-UP des Sciences Numériques",
    "edu.tekup.years": "Sept. 2025 – Juin 2027 · En cours",
    "edu.iset.degree": "Licence — Technologies de l'Information",
    "edu.iset.school": "ISET Charguia · Institut Supérieur des Études Technologiques",
    "edu.iset.years": "Sept. 2022 – Juin 2025 · Diplômé",
    "edu.certsTitle": "Certificats & réalisations",
    "cert.efset.title": "Certificat d'anglais EF SET",
    "cert.efset.sub": "74/100 · Niveau C2",
    "cert.scrum.title": "Méthodologie Agile Scrum",
    "cert.scrum.sub": "Pratiquée sur 4 sprints professionnels",
    "cert.azure.title": "Azure Active Directory / SSO",
    "cert.azure.sub": "Implémentation en entreprise · Avaxia",
    "cert.congress.title": "Congrès Digital TEK-UP",
    "cert.congress.sub": "Certificat de participation · Avr.–Mai 2026",
    "ui.copy": "Copier",
    "contact.label": "Contact",
    "contact.title": "Discutons.",
    "contact.subtitle": "Parlons projets et collaborations.",
    "contact.description": "Je suis toujours ouvert à discuter de nouveaux projets, d'idées créatives ou d'opportunités de contribuer à votre vision. Une question, ou simplement envie de dire bonjour ? N'hésitez pas à me contacter !",
    "contact.reply": "Je réponds généralement sous 24 heures.",
    "contact.sendEmail": "Envoyer un e-mail",
    "contact.copyEmail": "Copier l'adresse e-mail",
    "contact.email": "E-mail",
    "contact.copyPhone": "Copier le numéro de téléphone",
    "contact.phone": "Téléphone",
    "contact.copyGithub": "Copier le lien GitHub",
    "contact.github": "GitHub",
    "contact.copyLinkedin": "Copier le lien LinkedIn",
    "contact.linkedin": "LinkedIn",
    "contact.locationValue": "Tunis-Ariana, Tunisie",
    "contact.location": "Localisation",
    "ui.mainNav": "Navigation principale",
    "ui.home": "Mokdad Anas — retour en haut",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "ui.language": "Langue",
    "nav.cv": "Télécharger le CV",
    "nav.getInTouch": "Me contacter",
    "footer.copyright": "© 2024 Mokdad Anas. Tous droits réservés.",
    "footer.made": "Fait avec passion & caféine",
    "contact.email.aria": "Envoyer un e-mail",
    "footer.top": "Retour en haut",
    "ui.loading": "Chargement",
    "ui.skip": "Aller au contenu"
  }
};

const SUPPORTED_LANGS = ['en', 'fr'];
const ROLE_KEYS = ['hero.role0', 'hero.role1', 'hero.role2'];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const store = {
  get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }
};

let currentLang = SUPPORTED_LANGS.includes(store.get('lang')) ? store.get('lang') : 'en';

/** Returns the translation for a key, falling back to English, never "undefined". */
function tr(key) {
  const dict = I18N[currentLang] || I18N.en;
  if (dict[key] !== undefined) return dict[key];
  if (I18N.en[key] !== undefined) {
    console.warn('[i18n] missing "' + currentLang + '" translation for', key);
    return I18N.en[key];
  }
  console.warn('[i18n] unknown key', key);
  return '';
}

function applyTranslations(root) {
  const scope = root || document;
  scope.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = tr(el.dataset.i18n);
  });
  scope.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = tr(el.dataset.i18nHtml);
  });
  scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (attr && key) el.setAttribute(attr.trim(), tr(key.trim()));
    });
  });
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
  currentLang = lang;
  store.set('lang', lang);
  document.documentElement.lang = lang;
  document.title = tr('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', tr('meta.description'));

  applyTranslations();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });

  // Dynamic UI that depends on state
  updateThemeLabel();
  updateMenuLabel();
  document.querySelectorAll('.exp-toggle').forEach(updateExpToggleLabel);
  Typewriter.restart();
}

/* ---------------------------------------------------------
   2. Theme (dark by default)
   --------------------------------------------------------- */
const themeToggle = document.getElementById('themeToggle');

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function updateThemeLabel() {
  if (!themeToggle) return;
  themeToggle.setAttribute('aria-label', tr(currentTheme() === 'dark' ? 'ui.toLight' : 'ui.toDark'));
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  store.set('theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#121418' : '#F7F7F5');
  updateThemeLabel();
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => setTheme(currentTheme() === 'dark' ? 'light' : 'dark'));
}

/* ---------------------------------------------------------
   3. Loader
   --------------------------------------------------------- */
(function initLoader() {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loaderProgress');
  if (!loader) return;

  const finish = () => {
    if (bar) bar.style.transform = 'scaleX(1)';
    setTimeout(() => {
      loader.classList.add('is-hidden');
      document.body.classList.add('is-loaded');
      setTimeout(() => loader.remove(), 600);
    }, reducedMotion.matches ? 0 : 250);
  };

  if (reducedMotion.matches) { finish(); return; }

  let progress = 0;
  const tick = setInterval(() => {
    progress = Math.min(progress + Math.random() * 0.22, 0.9);
    if (bar) bar.style.transform = 'scaleX(' + progress + ')';
  }, 120);

  const done = () => { clearInterval(tick); finish(); };
  if (document.readyState === 'complete') setTimeout(done, 500);
  else window.addEventListener('load', () => setTimeout(done, 300), { once: true });
  setTimeout(done, 2500); // safety net
})();

/* ---------------------------------------------------------
   4. Header state, active link, mobile menu
   --------------------------------------------------------- */
const header = document.getElementById('siteHeader');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function onScrollHeader() {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
}
window.addEventListener('scroll', onScrollHeader, { passive: true });
onScrollHeader();

function isMenuOpen() { return menuToggle && menuToggle.getAttribute('aria-expanded') === 'true'; }

function updateMenuLabel() {
  if (menuToggle) menuToggle.setAttribute('aria-label', tr(isMenuOpen() ? 'ui.closeMenu' : 'ui.openMenu'));
}

function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
  if (open) {
    mobileMenu.hidden = false;
    requestAnimationFrame(() => mobileMenu.classList.add('is-open'));
  } else {
    mobileMenu.classList.remove('is-open');
    setTimeout(() => { if (!isMenuOpen()) mobileMenu.hidden = true; }, 300);
  }
  updateMenuLabel();
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => setMenu(!isMenuOpen()));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isMenuOpen()) { setMenu(false); menuToggle.focus(); }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 1080 && isMenuOpen()) setMenu(false); });
}

(function initActiveLinks() {
  const links = Array.from(document.querySelectorAll('.nav-links a, .mobile-links a'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  if (!('IntersectionObserver' in window) || !sections.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach(a => {
        const active = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-active', active);
        if (active) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
})();

/* ---------------------------------------------------------
   5. Language buttons
   --------------------------------------------------------- */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* ---------------------------------------------------------
   6. Typewriter (rotating role)
   --------------------------------------------------------- */
const Typewriter = (function () {
  const el = document.getElementById('typewriter');
  let timer = null;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function roles() { return ROLE_KEYS.map(tr); }

  function tick() {
    const list = roles();
    const word = list[roleIndex % list.length];
    if (reducedMotion.matches) {
      el.textContent = word;
      roleIndex = (roleIndex + 1) % list.length;
      timer = setTimeout(tick, 3000);
      return;
    }
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex >= word.length) { deleting = true; timer = setTimeout(tick, 2200); return; }
      timer = setTimeout(tick, 65);
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex <= 0) { deleting = false; roleIndex = (roleIndex + 1) % list.length; timer = setTimeout(tick, 350); return; }
      timer = setTimeout(tick, 32);
    }
  }

  function restart() {
    if (!el) return;
    clearTimeout(timer);
    roleIndex = reducedMotion.matches ? 1 : 0;
    const first = roles()[0];
    el.textContent = first;
    charIndex = first.length;
    deleting = false;
    timer = setTimeout(() => { deleting = !reducedMotion.matches; tick(); }, 2200);
  }

  return { restart };
})();

/* ---------------------------------------------------------
   7. Reveal on scroll + stat counters
   --------------------------------------------------------- */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => obs.observe(el));
})();

(function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  const render = (el, value) => { el.textContent = value + (el.dataset.suffix || ''); };

  function animate(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    if (reducedMotion.matches) { render(el, target); return; }
    const duration = 1600;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      render(el, Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) { nums.forEach(el => render(el, el.dataset.target)); return; }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animate(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  nums.forEach(el => obs.observe(el));
})();

/* ---------------------------------------------------------
   8. Experience — "Show details"
   --------------------------------------------------------- */
function updateExpToggleLabel(btn) {
  const label = btn.querySelector('.exp-toggle-label');
  const open = btn.getAttribute('aria-expanded') === 'true';
  if (label) label.textContent = tr(open ? 'ui.hideDetails' : 'ui.showDetails');
}

document.querySelectorAll('.exp-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (panel) panel.classList.toggle('is-open', open);
    btn.closest('.exp-card').classList.toggle('is-open', open);
    updateExpToggleLabel(btn);
  });
});

/* ---------------------------------------------------------
   9. Project filters
   --------------------------------------------------------- */
(function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.proj-card');
  const empty = document.querySelector('.proj-empty');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      cards.forEach(card => {
        const cats = (card.dataset.cats || '').split(' ');
        const match = filter === 'all' || cats.includes(filter);
        card.classList.toggle('is-hidden', !match);
        if (match) { shown++; card.classList.add('is-visible'); }
      });
      document.querySelectorAll('.proj-grid').forEach(grid => {
        grid.classList.toggle('is-empty', !grid.querySelector('.proj-card:not(.is-hidden)'));
      });
      if (empty) empty.hidden = shown > 0;
    });
  });
})();

/* ---------------------------------------------------------
   10. Copy to clipboard
   --------------------------------------------------------- */
function announce(message) {
  const live = document.getElementById('liveRegion');
  if (!live) return;
  live.textContent = '';
  setTimeout(() => { live.textContent = message; }, 30);
}

function fallbackCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
  area.remove();
  return ok;
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  let resetTimer = null;
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy;
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        ok = true;
      } else {
        ok = fallbackCopy(text);
      }
    } catch (e) {
      ok = fallbackCopy(text);
    }
    const tip = btn.querySelector('.copy-tip');
    if (tip) { tip.removeAttribute('data-i18n'); tip.textContent = tr(ok ? 'ui.copied' : 'ui.copyFailed'); }
    btn.classList.toggle('is-copied', ok);
    btn.classList.add('show-tip');
    announce(tr(ok ? 'ui.copied' : 'ui.copyFailed'));
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      btn.classList.remove('is-copied', 'show-tip');
      if (tip) { tip.setAttribute('data-i18n', 'ui.copy'); tip.textContent = tr('ui.copy'); }
    }, 1800);
  });
});

/* ---------------------------------------------------------
   11. Subtle cursor glow (fine pointers only)
   --------------------------------------------------------- */
(function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  if (reducedMotion.matches || !window.matchMedia('(pointer: fine)').matches) { glow.remove(); return; }
  let x = 0, y = 0, raf = null;
  window.addEventListener('pointermove', e => {
    x = e.clientX; y = e.clientY;
    if (!raf) raf = requestAnimationFrame(() => {
      glow.style.transform = 'translate(' + (x - 250) + 'px,' + (y - 250) + 'px)';
      glow.classList.add('is-active');
      raf = null;
    });
  }, { passive: true });
  document.addEventListener('pointerleave', () => glow.classList.remove('is-active'));
})();

/* ---------------------------------------------------------
   12. Boot
   --------------------------------------------------------- */
setLanguage(currentLang);
