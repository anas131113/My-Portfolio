
// ================================================
// Translations
// ================================================
const translations = {
  en: {
    'nav.about':'About','nav.experience':'Experience','nav.projects':'Projects',
    'nav.skills':'Skills','nav.education':'Education','nav.contact':'Contact','nav.hire':'Hire Me',
    'hero.availability':'Available · Summer 2026 · Tunis & Remote',
    'hero.name':'Mokdad','hero.surname':'Anas.',
    'hero.titlePrefix':'Full-Stack Developer &',
    'hero.titleDefault':'Cybersecurity','hero.titleSuffix':'Engineering Student',
    'hero.description':'Building secure, scalable, production-ready systems. Passionate about turning complex challenges into clean, high-performance solutions — now expanding into Cybersecurity and Data Science.',
    'hero.internship':'Actively seeking a <strong>Summer 2026 internship</strong> in Software Engineering, Full-Stack Dev, or Cybersecurity',
    'hero.viewWork':'View My Work','hero.getInTouch':'Get In Touch','hero.downloadCV':'⬇ Download CV',
    'hero.expBadge':'Years Experience','hero.engBadge':'TEK-UP Student','hero.scroll':'Scroll to explore',
    'stats.projects':'Projects Completed','stats.tech':'Technologies','stats.passion':'Passion & Dedication','stats.availability':'Client Support',
    'about.sectionTag':'Who I Am','about.title':'About Me','about.subtitle':'A passionate developer crafting digital experiences',
    'about.p1':'I\'m <span class="text-highlight">Mokdad Anas</span>, a Full-Stack Developer and Cybersecurity Engineering Student at <span class="text-accent">TEK-UP University</span> in Tunisia. I thrive on building secure, scalable, and high-performance systems that make a real impact.',
    'about.p2':'My journey spans across modern web frameworks like <span class="text-highlight">React, Angular, and Django</span>, cloud platforms like <span class="text-accent">Azure and AWS</span>, and DevOps tools including <span class="text-highlight">Docker and CI/CD pipelines</span>. I\'m also diving deep into cybersecurity to ensure the systems I build are not just functional, but secure by design.',
    'about.p3':'When I\'m not coding, you\'ll find me exploring the latest in AI integration, contributing to open-source projects, or honing my skills in competitive programming. I believe in continuous learning and sharing knowledge with the community.',
    'about.cta':'Currently seeking Summer 2026 internship opportunities in Software Engineering or Cybersecurity',
    'about.card1.title':'Full-Stack Development','about.card1.desc':'Building end-to-end web applications with modern frameworks and best practices',
    'about.card2.title':'Cybersecurity','about.card2.desc':'Implementing security-first approach in all development projects',
    'about.card3.title':'Cloud & DevOps','about.card3.desc':'Deploying and managing applications on cloud platforms with CI/CD',
    'experience.sectionTag':'My Journey','experience.title':'Experience','experience.subtitle':'Professional experience and key achievements',
    'experience.job1.role':'Full-Stack Developer','experience.job1.date':'2024 - Present','experience.job1.company':'Freelance / Personal Projects',
    'experience.job1.desc':'Building production-ready web applications with React, Django, and Node.js. Implementing secure authentication, RESTful APIs, and responsive designs.',
    'experience.job2.role':'Cybersecurity Student','experience.job2.date':'2023 - Present','experience.job2.company':'TEK-UP University',
    'experience.job2.desc':'Learning network security, ethical hacking, cryptography, and secure software development. Participating in CTF competitions and security workshops.',
    'experience.job3.role':'Open Source Contributor','experience.job3.date':'2023 - Present','experience.job3.company':'GitHub Community',
    'experience.job3.desc':'Contributing to various open-source projects. Building developer tools, fixing bugs, and improving documentation for popular repositories.',
    'projects.sectionTag':'My Work','projects.title':'Featured Projects','projects.subtitle':'A selection of my recent work and personal projects',
    'projects.filter.all':'All','projects.filter.web':'Web Dev','projects.filter.ai':'AI/ML','projects.filter.security':'Security','projects.filter.cloud':'Cloud/DevOps',
    'projects.proj1.title':'AI-Powered Task Manager','projects.proj1.desc':'Intelligent task management with AI suggestions, automated prioritization, and smart scheduling powered by machine learning.',
    'projects.proj2.title':'Real-Time Collaboration Platform','projects.proj2.desc':'A collaborative workspace with real-time document editing, video conferencing, and project management features.',
    'projects.proj3.title':'Secure Authentication System','projects.proj3.desc':'Multi-factor authentication system with biometric verification, OAuth 2.0, and advanced encryption protocols.',
    'projects.proj4.title':'Cloud Infrastructure Monitor','projects.proj4.desc':'Real-time cloud resource monitoring and alerting system with customizable dashboards and automated scaling.',
    'projects.proj5.title':'E-Commerce Analytics Dashboard','projects.proj5.desc':'Business intelligence dashboard with sales forecasting, customer segmentation, and AI-powered recommendations.',
    'projects.proj6.title':'Penetration Testing Toolkit','projects.proj6.desc':'A comprehensive toolkit for ethical hacking and vulnerability assessment with automated scanning capabilities.',
    'skills.sectionTag':'Expertise','skills.title':'Skills & Technologies','skills.subtitle':'Technologies I work with to bring ideas to life',
    'skills.frontend':'Frontend Development','skills.backend':'Backend Development','skills.database':'Database',
    'skills.cloud':'Cloud & DevOps','skills.security':'Cybersecurity','skills.ai':'AI & Machine Learning',
    'education.sectionTag':'Learning','education.title':'Education','education.subtitle':'Academic background and continuous learning',
    'education.degree1.degree':'Engineering Degree - Cybersecurity & Software Engineering','education.degree1.school':'TEK-UP University',
    'education.degree1.years':'2023 - Present · Tunis, Tunisia','education.degree1.gpa':'Focus: Network Security, Secure Software Development, Cryptography',
    'education.degree2.degree':'Continuous Learning','education.degree2.school':'Online Certifications & Self-Learning',
    'education.degree2.years':'Ongoing','education.degree2.gpa':'Azure, AWS, Docker, React, Cybersecurity Certifications',
    'education.certTitle':'Certifications & Achievements','education.certs.cert1':'Azure Fundamentals','education.certs.issuer':'Microsoft',
    'education.certs.cert2':'Google Cybersecurity Certificate','education.certs.issuer2':'Google',
    'education.certs.cert3':'Docker Certified Associate','education.certs.issuer3':'Docker Inc.',
    'cta.badge':'Summer 2026 Opportunity','cta.title1':'Ready to Make an','cta.title2':'Impact?',
    'cta.description':'I\'m actively seeking a Summer 2026 internship where I can apply my skills in Full-Stack Development, Cybersecurity, or Cloud Engineering. Let\'s build something amazing together.',
    'cta.contactBtn':'Get In Touch','cta.linkedinBtn':'LinkedIn',
    'contact.sectionTag':'Get In Touch','contact.title':'Contact Me','contact.subtitle':'Let\'s discuss opportunities and collaborations',
    'contact.emailLabel':'Email','contact.githubLabel':'GitHub','contact.linkedinLabel':'LinkedIn','contact.locationLabel':'Location',
    'contact.description':'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, feel free to reach out!',
    'contact.availability':'Currently available for Summer 2026 internships',
    'footer.copyright':'© 2024 Mokdad Anas. All rights reserved.','footer.made':'Made with passion & caffeine ☕',
    'projects.tribotics.cat':'AI · Game · Frontend',
    'projects.tribotics.title':'Tribotics',
    'projects.tribotics.desc':'A gamified frontend app where users design autonomous robots for extreme environments, backed by an AI chatbot. Players earn a score, receive AI-powered feedback on their design choices, and can share results with friends.',
    'projects.souqai.cat':'AI · Hackathon · Frontend',
    'projects.souqai.title':'SouqAI',
    'projects.souqai.desc':'A frontend prototype built during a hackathon that helps Tunisian artisans promote their handcrafted products using AI. Designed to bridge the gap between traditional craft culture and digital markets.',
    'cert.digitalCongress.title':'TEK-UP Digital Congress',
    'cert.digitalCongress.sub':'Certificate of Participation · Apr–May 2026 ↗'
  },
  fr: {
    'nav.about':'À propos','nav.experience':'Expérience','nav.projects':'Projets',
    'nav.skills':'Compétences','nav.education':'Formation','nav.contact':'Contact','nav.hire':'Engagez-moi',
    'hero.availability':'Disponible · Été 2026 · Tunis & Remote',
    'hero.name':'Mokdad','hero.surname':'Anas.',
    'hero.titlePrefix':'Développeur Full-Stack &',
    'hero.titleDefault':'Cybersécurité','hero.titleSuffix':'Étudiant Ingénieur',
    'hero.description':'Je conçois des systèmes sécurisés, évolutifs et prêts pour la production. Passionné par la transformation de défis complexes en solutions propres et performantes — en expansion vers la Cybersécurité et la Science des Données.',
    'hero.internship':'À la recherche active d\'un <strong>stage été 2026</strong> en Ingénierie Logicielle, Développement Full-Stack ou Cybersécurité',
    'hero.viewWork':'Voir mes projets','hero.getInTouch':'Me contacter','hero.downloadCV':'⬇ Télécharger CV',
    'hero.expBadge':"Années d'expérience",'hero.engBadge':'Étudiant TEK-UP','hero.scroll':'Défiler pour explorer',
    'stats.projects':'Projets Réalisés','stats.tech':'Technologies','stats.passion':'Passion & Dévouement','stats.availability':'Support Client',
    'about.sectionTag':'Qui suis-je','about.title':'À propos de moi','about.subtitle':'Un développeur passionné qui crée des expériences numériques',
    'about.p1':'Je suis <span class="text-highlight">Mokdad Anas</span>, Développeur Full-Stack et Étudiant en Ingénierie de la Cybersécurité à <span class="text-accent">l\'Université TEK-UP</span> en Tunisie. Je m\'épanouis en construisant des systèmes sécurisés, évolutifs et à fort impact.',
    'about.p2':'Mon parcours couvre les frameworks web modernes comme <span class="text-highlight">React, Angular et Django</span>, les plateformes cloud comme <span class="text-accent">Azure et AWS</span>, et les outils DevOps incluant <span class="text-highlight">Docker et les pipelines CI/CD</span>.',
    'about.p3':'Quand je ne code pas, vous me trouverez en train d\'explorer les dernières innovations en intégration d\'IA, de contribuer à des projets open-source, ou d\'affiner mes compétences en programmation compétitive.',
    'about.cta':'À la recherche active de stages été 2026 en Ingénierie Logicielle ou Cybersécurité',
    'about.card1.title':'Développement Full-Stack','about.card1.desc':'Construction d\'applications web de bout en bout avec des frameworks modernes et les meilleures pratiques',
    'about.card2.title':'Cybersécurité','about.card2.desc':'Mise en œuvre d\'une approche sécurité en premier dans tous les projets de développement',
    'about.card3.title':'Cloud & DevOps','about.card3.desc':'Déploiement et gestion d\'applications sur des plateformes cloud avec CI/CD',
    'experience.sectionTag':'Mon Parcours','experience.title':'Expérience','experience.subtitle':'Expérience professionnelle et réalisations clés',
    'experience.job1.role':'Développeur Full-Stack','experience.job1.date':'2024 - Présent','experience.job1.company':'Freelance / Projets Personnels',
    'experience.job1.desc':'Construction d\'applications web prêtes pour la production avec React, Django et Node.js. Implémentation d\'authentification sécurisée, APIs RESTful et designs responsifs.',
    'experience.job2.role':'Étudiant Cybersécurité','experience.job2.date':'2023 - Présent','experience.job2.company':'Université TEK-UP',
    'experience.job2.desc':'Apprentissage de la sécurité réseau, du hacking éthique, de la cryptographie et du développement logiciel sécurisé.',
    'experience.job3.role':'Contributeur Open Source','experience.job3.date':'2023 - Présent','experience.job3.company':'Communauté GitHub',
    'experience.job3.desc':'Contribution à plusieurs projets open-source. Construction d\'outils pour développeurs, correction de bugs et amélioration de la documentation.',
    'projects.sectionTag':'Mon Travail','projects.title':'Projets Phares','projects.subtitle':'Une sélection de mes travaux récents et projets personnels',
    'projects.filter.all':'Tous','projects.filter.web':'Web','projects.filter.ai':'IA/ML','projects.filter.security':'Sécurité','projects.filter.cloud':'Cloud/DevOps',
    'projects.proj1.title':'Gestionnaire de Tâches IA','projects.proj1.desc':'Gestion intelligente des tâches avec suggestions IA, priorisation automatisée et planification intelligente.',
    'projects.proj2.title':'Plateforme de Collaboration Temps Réel','projects.proj2.desc':'Un espace de travail collaboratif avec édition de documents en temps réel, visioconférence et gestion de projet.',
    'projects.proj3.title':'Système d\'Authentification Sécurisé','projects.proj3.desc':'Système d\'authentification multi-facteurs avec vérification biométrique, OAuth 2.0 et protocoles de chiffrement avancés.',
    'projects.proj4.title':'Moniteur d\'Infrastructure Cloud','projects.proj4.desc':'Système de surveillance et d\'alerte des ressources cloud en temps réel avec tableaux de bord personnalisables.',
    'projects.proj5.title':'Tableau de Bord Analytique E-Commerce','projects.proj5.desc':'Tableau de bord décisionnel avec prévision des ventes, segmentation des clients et recommandations IA.',
    'projects.proj6.title':'Boîte à Outils Pentest','projects.proj6.desc':'Une boîte à outils complète pour le hacking éthique et l\'évaluation des vulnérabilités.',
    'skills.sectionTag':'Expertise','skills.title':'Compétences & Technologies','skills.subtitle':'Technologies avec lesquelles je travaille pour donner vie aux idées',
    'skills.frontend':'Développement Frontend','skills.backend':'Développement Backend','skills.database':'Base de Données',
    'skills.cloud':'Cloud & DevOps','skills.security':'Cybersécurité','skills.ai':'IA & Apprentissage Automatique',
    'education.sectionTag':'Formation','education.title':'Éducation','education.subtitle':'Formation académique et apprentissage continu',
    'education.degree1.degree':'Diplôme d\'Ingénieur - Cybersécurité & Ingénierie Logicielle','education.degree1.school':'Université TEK-UP',
    'education.degree1.years':'2023 - Présent · Tunis, Tunisie','education.degree1.gpa':'Spécialisation: Sécurité Réseau, Développement Sécurisé, Cryptographie',
    'education.degree2.degree':'Apprentissage Continu','education.degree2.school':'Certifications en Ligne & Auto-formation',
    'education.degree2.years':'En cours','education.degree2.gpa':'Azure, AWS, Docker, React, Certifications Cybersécurité',
    'education.certTitle':'Certifications & Réalisations','education.certs.cert1':'Azure Fundamentals','education.certs.issuer':'Microsoft',
    'education.certs.cert2':'Certificat Google Cybersécurité','education.certs.issuer2':'Google',
    'education.certs.cert3':'Docker Certified Associate','education.certs.issuer3':'Docker Inc.',
    'cta.badge':'Opportunité Été 2026','cta.title1':'Prêt à Créer un','cta.title2':'Impact ?',
    'cta.description':'Je recherche activement un stage été 2026 où je pourrai appliquer mes compétences en Développement Full-Stack, Cybersécurité ou Ingénierie Cloud.',
    'cta.contactBtn':'Me Contacter','cta.linkedinBtn':'LinkedIn',
    'contact.sectionTag':'Me Contacter','contact.title':'Contactez-moi','contact.subtitle':'Discutons des opportunités et collaborations',
    'contact.emailLabel':'Email','contact.githubLabel':'GitHub','contact.linkedinLabel':'LinkedIn','contact.locationLabel':'Localisation',
    'contact.description':'Je suis toujours ouvert à discuter de nouveaux projets, d\'idées créatives, ou d\'opportunités pour faire partie de votre vision.',
    'contact.availability':'Actuellement disponible pour des stages été 2026',
    'footer.copyright':'© 2024 Mokdad Anas. Tous droits réservés.','footer.made':'Fait avec passion & caféine ☕',
    'projects.tribotics.cat':'IA · Jeu · Frontend',
    'projects.tribotics.title':'Tribotics',
    'projects.tribotics.desc':'Une application frontend gamifiée où les utilisateurs conçoivent des robots autonomes pour des environnements extrêmes, assistés par un chatbot IA. Les joueurs obtiennent un score, des retours IA sur leurs choix de conception, et peuvent partager leurs résultats.',
    'projects.souqai.cat':'IA · Hackathon · Frontend',
    'projects.souqai.title':'SouqAI',
    'projects.souqai.desc':'Un prototype frontend réalisé lors d\'un hackathon pour aider les artisans tunisiens à promouvoir leurs produits artisanaux grâce à l\'IA. Conçu pour faire le pont entre la culture artisanale traditionnelle et les marchés numériques.',
    'cert.digitalCongress.title':'Congrès Digital TEK-UP',
    'cert.digitalCongress.sub':'Certificat de Participation · Avr–Mai 2026 ↗'
  }
};

const typewriterTitles = {
  en:['Full-Stack Developer','Cybersecurity','Cloud Engineer','AI Integrator','Backend Architect'],
  fr:['Développeur Full-Stack','Cybersécurité','Ingénieur Cloud','Intégrateur IA','Architecte Backend']
};

let currentLang = localStorage.getItem('lang') || 'en';
let typewriterTimer = null;

// ================================================
// Loader
// ================================================
(function initLoader(){
  const loader = document.getElementById('loader');
  const progress = document.getElementById('loaderProgress');
  if(!loader) return;
  let w = 0;
  const iv = setInterval(()=>{
    w += Math.random()*30;
    if(w>=100){w=100;clearInterval(iv);setTimeout(()=>loader.classList.add('hidden'),300);}
    if(progress) progress.style.width=w+'%';
  },200);
})();

// ================================================
// Cursor glow
// ================================================
(function(){
  const g = document.getElementById('cursorGlow');
  if(!g) return;
  document.addEventListener('mousemove', e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';});
})();

// ================================================
// Theme
// ================================================
function initTheme(){
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}
function toggleTheme(){
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme', isDark?'light':'dark');
  localStorage.setItem('theme', isDark?'light':'dark');
}
initTheme();

// ================================================
// Language
// ================================================
function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[lang]&&translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.documentElement.lang = lang;
  document.getElementById('langEN').classList.toggle('active', lang==='en');
  document.getElementById('langFR').classList.toggle('active', lang==='fr');
  restartTypewriter();
}
document.getElementById('langEN').addEventListener('click',()=>setLanguage('en'));
document.getElementById('langFR').addEventListener('click',()=>setLanguage('fr'));
setLanguage(currentLang);

// ================================================
// Mobile menu
// ================================================
(function(){
  const toggle = document.getElementById('mobileMenuToggle');
  const overlay = document.getElementById('mobileNavOverlay');
  if(!toggle||!overlay) return;
  toggle.addEventListener('click',()=>{
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active')?'hidden':'';
  });
  overlay.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{overlay.classList.remove('active');document.body.style.overflow='';});
  });
})();

// ================================================
// Scroll reveal
// ================================================
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('visible');});
},{threshold:0.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal,.exp-item,.project-card').forEach(el=>revealObs.observe(el));

// ================================================
// Counters
// ================================================
function animateCounters(){
  document.querySelectorAll('.stat-num[data-target]').forEach(el=>{
    const target=parseInt(el.dataset.target);
    const suffix=el.dataset.suffix||'';
    let current=0;
    const step=target/(1800/16);
    const iv=setInterval(()=>{
      current=Math.min(current+step,target);
      el.textContent=Math.floor(current)+suffix;
      if(current>=target) clearInterval(iv);
    },16);
  });
}
const statsObs = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){animateCounters();statsObs.disconnect();}
},{threshold:.3});
const sb=document.querySelector('.stats-bar');
if(sb) statsObs.observe(sb);

// ================================================
// Project filter
// ================================================
function filterProjects(cat, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card=>{
    const cats=card.dataset.cat||'';
    if(cat==='all'||cats.includes(cat)){
      card.style.display='';
      setTimeout(()=>card.classList.add('visible'),50);
    } else {
      card.classList.remove('visible');
      setTimeout(()=>{card.style.display='none';},300);
    }
  });
}
document.querySelectorAll('.project-card').forEach(c=>c.classList.add('visible'));

// ================================================
// Typewriter
// ================================================
function initTypewriter(){
  const titles = typewriterTitles[currentLang];
  let tIdx=0,cIdx=0,deleting=false;
  const el = document.getElementById('typewriterTitle');
  if(!el) return;
  function tick(){
    const cur = titles[tIdx];
    if(!deleting){
      el.textContent = cur.slice(0,cIdx+1);
      cIdx++;
      if(cIdx===cur.length){deleting=true;typewriterTimer=setTimeout(tick,2000);return;}
    } else {
      el.textContent = cur.slice(0,cIdx-1);
      cIdx--;
      if(cIdx===0){deleting=false;tIdx=(tIdx+1)%titles.length;}
    }
    typewriterTimer=setTimeout(tick,deleting?40:80);
  }
  if(titles[0]) el.textContent=titles[0].slice(0,1);
  cIdx=1;
  typewriterTimer=setTimeout(tick,600);
}
function restartTypewriter(){
  if(typewriterTimer) clearTimeout(typewriterTimer);
  initTypewriter();
}
initTypewriter();

// ================================================
// Nav active on scroll
// ================================================
(function(){
  const sections=document.querySelectorAll('section[id]');
  function update(){
    const sy=window.scrollY+150;
    sections.forEach(s=>{
      const id=s.getAttribute('id');
      const link=document.querySelector(`.nav-links a[href="#${id}"]`);
      if(link){
        if(sy>=s.offsetTop&&sy<s.offsetTop+s.offsetHeight){
          document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }
  window.addEventListener('scroll',update,{passive:true});
  update();
})();

// ================================================
// Particles
// ================================================
(function(){
  const c=document.getElementById('heroParticles');
  if(!c) return;
  for(let i=0;i<18;i++){
    const p=document.createElement('div');
    p.style.cssText=`position:absolute;width:${Math.random()*4+2}px;height:${Math.random()*4+2}px;background:var(--accent);border-radius:50%;opacity:${Math.random()*.4+.1};left:${Math.random()*100}%;top:${Math.random()*100}%;animation:pFloat ${Math.random()*10+10}s ease-in-out infinite;animation-delay:${Math.random()*5}s;pointer-events:none;`;
    c.appendChild(p);
  }
  const s=document.createElement('style');
  s.textContent='@keyframes pFloat{0%,100%{transform:translate(0,0) scale(1);opacity:.3;}25%{transform:translate(20px,-30px) scale(1.2);opacity:.6;}50%{transform:translate(-10px,-60px) scale(.8);opacity:.4;}75%{transform:translate(30px,-30px) scale(1.1);opacity:.5;}}';
  document.head.appendChild(s);
})();

const titles = [
  'Full-Stack Developer',
  'Software Student',
  'Future Cybersecurity Student'
  
];
let tIdx = 0, cIdx = 0, deleting = false;
const tw = document.querySelector('.hero-title');
if (tw) {
  function typeWrite() {
    const current = titles[tIdx];
    if (!deleting) {
      tw.innerHTML = current.slice(0, cIdx + 1) + ' <span style="color:var(--accent2);font-weight:500;">@</span> TEK-UP<span class="typewriter"> </span>';
      cIdx++;
      if (cIdx === current.length) { deleting = true; setTimeout(typeWrite, 1500); return; }
    } else {
      tw.innerHTML = current.slice(0, cIdx - 1) + ' <span style="color:var(--accent2);font-weight:500;">@</span> TEK-UP<span class="typewriter"> </span>';
      cIdx--;
      if (cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % titles.length; }
    }
    setTimeout(typeWrite, deleting ? 45 : 75);
  }
  typeWrite();
}