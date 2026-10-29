const GH = "https://github.com/teningthiam";
const L = (n) => `assets/logos/${n}.svg`;

const T = {
  fr: {
    nav: ["Accueil", "À propos", "Compétences", "Projets", "Contact"],
    cta: "Me contacter", badge: "Développeuse Full-Stack", hi: "Bonjour, je suis", h1b: "Je construis des solutions pour le web.",
    intro: "Développeuse full-stack passionnée, je conçois des API REST et des applications web performantes avec des technologies modernes.",
    b1: "Voir mes projets", b2: "Télécharger mon CV", tech_l: "Technologies que j’utilise",
    about_l: "À propos", about_t: "Je suis passionnée par la création de solutions digitales",
    about_p: "Étudiante en Licence 3, avec des stages chez Webgram (2025) et à l’IPG-ISTI (2026), je conçois des applications concrètes, performantes et adaptées aux besoins des utilisateurs.",
    stats: [["2", "Stages réalisés"], ["6", "Projets réalisés"], ["L3", "En cours à l’IPG-ISTI"], ["100%", "Motivation"]],
    sk_l: "Mes compétences", sk_t: "Technologies que je maîtrise",
    pr_l: "Projets en vedette", pr_t: "Quelques-unes de mes réalisations récentes", all: "Voir tous les projets",
    pr_l2: "Mes projets", pr_t2: "Tout ce que j’ai réalisé", demo: "Live demo", code: "GitHub",
    ct_l: "Travaillons ensemble", ct_t: "Un projet en tête ?", ct_p: "Je suis toujours ouverte à discuter de nouveaux projets et d’opportunités.",
    ct_b: "Ouverte aux opportunités de stage, d’alternance, de freelance ou de CDI. Je réponds généralement sous 24h.",
    avail: "Disponible pour stage / CDI", follow: "Suivez-moi", made: "Fait avec ♥ par Tening Thiam", rights: "© 2026 Tening Thiam. Tous droits réservés.",
    projects: [
      ["E-commerce", "BichriTech", "Boutique en ligne de matériel informatique au Sénégal : catalogue, fiches produits, préparation de l’achat et livraison adaptée au marché local (Wave, Orange Money, Free Money)."],
      ["Stage · Full stack", "Gestion de salle de sport – IPG-ISTI", "Application web full-stack qui digitalise la gestion des adhérents, des abonnements et des paiements d’une salle de sport. Espace membre, tableau de bord administrateur, API REST sécurisée avec JWT et base de données relationnelle."],
      ["FinTech", "Gestion bancaire : portefeuille numérique", "Application de gestion de comptes et d’opérations financières inspirée de Wave. Architecture full stack : Angular, Spring Boot et MySQL."],
      ["Stage · Full stack", "Gestion des agents – Webgram", "Application d’administration du personnel réalisée chez Webgram : ajout d’agents, liste paginée avec recherche, et rubriques départements, compétences et bulletins de paie. Opérations CRUD, API backend et base de données relationnelle."],
      ["HealthTech", "DiabèteCare", "Application d’accompagnement des personnes vivant avec le diabète : centralisation du suivi et chatbot d’information. Elle ne remplace pas une consultation."],
      ["Stage", "Gestion de contenu avec Blogger – Webgram", "Lors de mon stage chez Webgram, j’ai participé à la gestion de contenu sur Blogger : structuration des contenus, rédaction et publication d’articles. Cette expérience m’a permis de découvrir le fonctionnement d’une plateforme de blogging et de développer mes compétences en gestion de contenu web."]
    ]
  },
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Contact"],
    cta: "Contact me", badge: "Full-Stack Developer", hi: "Hello, I’m", h1b: "I build solutions for the web.",
    intro: "A passionate full-stack developer, I design REST APIs and high-performance web applications with modern technologies.",
    b1: "View my projects", b2: "Download my CV", tech_l: "Technologies I use",
    about_l: "About", about_t: "I’m passionate about building digital solutions",
    about_p: "A third-year student with internships at Webgram (2025) and IPG-ISTI (2026), I build practical, high-performance applications that fit users’ needs.",
    stats: [["2", "Internships completed"], ["6", "Projects built"], ["L3", "In progress at IPG-ISTI"], ["100%", "Motivation"]],
    sk_l: "My skills", sk_t: "Technologies I master",
    pr_l: "Featured projects", pr_t: "A few of my recent work", all: "View all projects",
    pr_l2: "My projects", pr_t2: "Everything I’ve built", demo: "Live demo", code: "GitHub",
    ct_l: "Let’s work together", ct_t: "Got a project in mind?", ct_p: "I’m always open to discussing new projects and opportunities.",
    ct_b: "Open to internship, work-study, freelance or full-time opportunities. I usually reply within 24h.",
    avail: "Available for internship / full-time", follow: "Follow me", made: "Made with ♥ by Tening Thiam", rights: "© 2026 Tening Thiam. All rights reserved.",
    projects: [
      ["E-commerce", "BichriTech", "Online store for computer hardware in Senegal: catalogue, product pages, purchase preparation and delivery suited to the local market (Wave, Orange Money, Free Money)."],
      ["Internship · Full stack", "Gym management – IPG-ISTI", "Full-stack web application that digitises the management of members, subscriptions and payments for a gym. Member area, admin dashboard, REST API secured with JWT and a relational database."],
      ["FinTech", "Banking: digital wallet", "Account and transaction management app inspired by Wave. Full stack architecture: Angular, Spring Boot and MySQL."],
      ["Internship · Full stack", "Agent management – Webgram", "Staff administration app built at Webgram: add agents, browse a paginated list with search, plus sections for departments, skills and payslips. CRUD operations, a backend API and a relational database."],
      ["HealthTech", "DiabèteCare", "App supporting people living with diabetes: centralised follow-up and an information chatbot. It does not replace a consultation."],
      ["Internship", "Content management with Blogger – Webgram", "During my internship at Webgram, I took part in content management on Blogger: structuring content, writing and publishing articles. This experience let me discover how a blogging platform works and build my web content management skills."]
    ]
  }
};

// Compétences : [nom, logo, niveau %]. Ajustez les pourcentages à votre niveau réel.
const S = [
  ["Java", "java", 80], ["Spring Boot / Security", "spring", 80], ["API REST / Swagger", "swagger", 75],
  ["MySQL", "mysql", 80], ["PostgreSQL", "postgresql", 70], ["Angular", "angular", 75],
  ["JavaScript", "javascript", 75], ["TypeScript", "typescript", 70], ["HTML & CSS", "html5", 85],
  ["PHP", "php", 65], ["Laravel", "laravel", 60], ["Python", "python", 55],
  ["Django", "django", 50], ["React", "react", 60], ["Git & GitHub", "git", 75],
  ["Postman", "postman", 80], ["IntelliJ IDEA", "intellij", 80], ["VS Code", "vscode", 85]
];
const STRIP = ["java", "spring", "angular", "python", "laravel", "postgresql", "mysql"];

// Projets : pour ajouter des captures, mettez-les dans assets/ et listez-les dans "imgs".
const P = [
  { stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PostgreSQL"], imgs: ["bichritech-1", "bichritech-2", "bichritech-3"], gh: GH + "/bichritech-e-shop", demo: "https://bichri-tech.lovable.app" },
  { stack: ["Java", "Spring Boot", "Spring Security", "Angular", "MySQL", "Bootstrap", "JWT", "Maven", "Git/GitHub", "Swagger/OpenAPI", "Postman", "JUnit", "Mockito", "SonarQube", "Render", "Netlify"], imgs: ["salle-1", "salle-2", "salle-3", "salle-4", "salle-5", "salle-6"], gh: GH },
  { stack: ["Angular", "Java", "Spring Boot", "MySQL"], imgs: ["banque-1", "banque-2", "banque-3"], gh: GH },
  { stack: ["Java", "Spring Boot", "Angular", "MySQL"], imgs: ["agents-1", "agents-2", "agents-3", "agents-4"], gh: GH },
  { stack: ["Java", "Spring Boot", "Angular", "MySQL", "JWT"], imgs: [], gh: GH },
  { stack: ["Blogger"], imgs: [] }
];

const $ = (s) => document.querySelector(s);
const page = document.body.dataset.page;
let lang = "fr", theme = "dark";
try { lang = localStorage.getItem("lang") || "fr"; theme = localStorage.getItem("theme") || "dark"; } catch (e) {}
document.documentElement.dataset.theme = theme;

const head = $("#top");
head.className = "bar";
head.innerHTML = `<div class="wrap bar-in"><a class="logo" href="index.html"><b>&lt;/&gt;</b> Tening THIAM</a><nav id="nav"></nav>
<div class="tools"><a class="btn sm" href="index.html#contact"><span data-i="cta"></span> ↗</a><button class="icon" id="theme" aria-label="Thème clair / sombre">☀</button>
<div class="lang" role="group" aria-label="Langue"><button data-l="fr">FR</button><button data-l="en">ENG</button></div>
<button class="icon burger" id="burger" aria-label="Menu">☰</button></div></div>`;
$("#foot").className = "wrap foot";

function projectCard(p, i, t) {
  const [kind, name, desc] = t.projects[i];
  const shot = p.imgs.length
    ? `<img class="m" src="assets/${p.imgs[0]}.jpg" alt="${name}" loading="lazy"><div class="thumbs">${p.imgs.map((m, j) => `<button class="${j ? "" : "on"}" data-m="${m}" aria-label="${name} ${j + 1}"><img src="assets/${m}.jpg" alt=""></button>`).join("")}</div>`
    : `<div class="ph" aria-hidden="true">${name[0]}</div>`;
  const links = (p.gh ? `<a class="btn ghost" href="${p.gh}" target="_blank" rel="noopener">${t.code}</a>` : "") + (p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noopener">${t.demo} ↗</a>` : "");
  const c = document.createElement("article");
  c.className = "proj"; c.id = "p" + (i + 1);
  c.innerHTML = `<div class="shot">${shot}</div><div><div class="pk"><b>${kind}</b><span>#0${i + 1}</span></div><h3>${name}</h3><p>${desc}</p><div class="pt">${p.stack.map((x) => `<span>${x}</span>`).join("")}</div><div class="row">${links}</div></div>`;
  c.querySelectorAll(".thumbs button").forEach((b) => b.addEventListener("click", () => {
    c.querySelector("img.m").src = `assets/${b.dataset.m}.jpg`;
    c.querySelectorAll(".thumbs button").forEach((x) => x.classList.toggle("on", x === b));
  }));
  return c;
}

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i]").forEach((n) => (n.textContent = t[n.dataset.i]));
  document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.l === lang));
  const home = page === "home", pre = home ? "" : "index.html";
  const hrefs = [pre + "#accueil", pre + "#apropos", pre + "#competences", home ? "#projets" : "projects.html", pre + "#contact"];
  $("#nav").innerHTML = t.nav.map((n, i) => `<a href="${hrefs[i]}"${(home ? i === 0 : i === 3) ? ' class="on"' : ""}>${n}</a>`).join("");
  $("#foot").innerHTML = `<span>${t.rights}</span><span>${t.made.replace("♥", "<b>♥</b>")}</span>`;
  if (home) {
    $("#strip").innerHTML = STRIP.map((n) => `<div class="tile" title="${n}"><img src="${L(n)}" alt="${n}"></div>`).join("");
    $("#stats").innerHTML = t.stats.map(([n, l], i) => `<div class="stat"><u>${["◷", "</>", "▤", "⚡"][i]}</u><div><b>${n}</b><span>${l}</span></div></div>`).join("");
    $("#skills").innerHTML = S.map(([n, l, v]) => `<div class="sk"><div class="top"><div class="lg"><img src="${L(l)}" alt=""></div><b>${n}</b><span>${v}%</span></div><div class="bar2"><i style="width:${v}%"></i></div></div>`).join("");
    $("#feat").innerHTML = P.slice(0, 3).map((p, i) => {
      const [, name, desc] = t.projects[i];
      return `<a class="fc" href="projects.html#p${i + 1}"><div class="im">${p.imgs.length ? `<img src="assets/${p.imgs[0]}.jpg" alt="${name}" loading="lazy">` : `<div class="ph">${name[0]}</div>`}<em>0${i + 1}</em></div><div class="t"><h3>${name}</h3><p>${desc}</p></div></a>`;
    }).join("");
  } else {
    $("#all").replaceChildren(...P.map((p, i) => projectCard(p, i, t)));
  }
}

document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
  lang = b.dataset.l;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
}));
$("#theme").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("theme", theme); } catch (e) {}
});
$("#burger").addEventListener("click", () => $("#nav").classList.toggle("open"));
$("#nav").addEventListener("click", () => $("#nav").classList.remove("open"));
render();
