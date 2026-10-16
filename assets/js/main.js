const DEFAULT_LANGUAGE = "es";
const STORAGE_KEY = "matveiPortfolioLanguage";

const texts = {
    es: {
        navHome: "Inicio",
        navProfile: "Perfil",
        navProjects: "Proyectos",
        navContact: "Contacto",
        viewProjects: "Ver proyectos",
        categoryGames: "Juegos",
        viewCaseStudy: "Ver proyecto",
        caseLabel: "Proyecto de videojuego",
        caseBack: "Volver a proyectos",
        caseOverviewTitle: "Resumen",
        caseProcessTitle: "Mi aportacion ",
         caseProcessTitle: "Mi aportacion ",
        caseAboutGameTitle: "Sobre el Juego",
        casePlay: "Jugar",
        caseDocumentation: "Ver documentación PDF"
    },
    en: {
        navHome: "Home",
        navProfile: "Profile",
        navProjects: "Projects",
        navContact: "Contact",
        caseAboutGameTitle: "About the Game",
        viewProjects: "View projects",
        categoryGames: "Games",
        viewCaseStudy: "View project",
        caseLabel: "Game project",
        caseBack: "Back to projects",
        caseOverviewTitle: "Overview",
        caseProcessTitle: "My participation",
        caseOutcomeTitle: "Outcome",
        casePlay: "Play",
        caseDocumentation: "View project PDF"
        
        
    }
};

function applyLanguage(language) {
    const lang = texts[language] ? language : DEFAULT_LANGUAGE;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const content = texts[lang][element.dataset.i18n];
        if (content !== undefined) element.textContent = content;
    });

    document.querySelectorAll("[data-text-es], [data-text-en]").forEach((element) => {
        const content = element.getAttribute("data-text-" + lang) ?? element.getAttribute("data-text-es");
        if (content === null) return;
        if (element.tagName === "META") element.setAttribute("content", content);
        else element.textContent = content;
    });

    const button = document.getElementById("langToggle");
    if (button) {
        button.textContent = lang === "es" ? "English" : "Español";
        button.setAttribute("aria-label", lang === "es" ? "Change language to English" : "Cambiar idioma a español");
    }

    const title = document.getElementById("caseTitle");
    const summary = document.getElementById("caseSummary");
    const description = document.querySelector('meta[name="description"]');
    document.title = title ? title.textContent + " - Portafolio Matvei" : "Portafolio Matvei";
    if (summary && description) description.content = summary.textContent;
}

function initLanguage() {
    let lang = DEFAULT_LANGUAGE;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (texts[saved]) lang = saved;
    } catch {
        // Las páginas locales también funcionan con el almacenamiento bloqueado.
    }

    applyLanguage(lang);
    document.getElementById("langToggle")?.addEventListener("click", () => {
        lang = lang === "es" ? "en" : "es";
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // El cambio de idioma sigue disponible durante la visita.
        }
        applyLanguage(lang);
    });
}

function initYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
}

function initProjectCount() {
    const counter = document.getElementById("projectCount");
    if (counter) counter.textContent = document.querySelectorAll("#projects .card").length;
}

function initCanvas() {
    const canvas = document.getElementById("binaryCanvas");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = Array.from({ length: 42 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: (Math.random() * 1.5 + .45) * (Math.random() < .5 ? 1 : -1),
            value: Math.random() < .5 ? "0" : "1",
            alpha: Math.random() * .5 + .18
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "700 16px monospace";
        ctx.fillStyle = "#42f59b";
        ctx.shadowColor = "#42f59b";
        ctx.shadowBlur = 8;
        particles.forEach((particle) => {
            ctx.globalAlpha = particle.alpha;
            ctx.fillText(particle.value, particle.x, particle.y);
            particle.x += particle.speed;
            if (particle.x < -50 || particle.x > canvas.width + 50) particle.speed *= -1;
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
}

function initReveal() {
    const items = document.querySelectorAll(".card, .case-layout article");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .12 });
    items.forEach((item) => observer.observe(item));
}

initYear();
initLanguage();
initProjectCount();
initCanvas();
initReveal();
