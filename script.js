/* script.js - 科技感動畫效果 */

document.addEventListener("DOMContentLoaded", function () {
    // 打字機效果
    const typingElement = document.querySelector(".typing");
    const words = ["前端開發者", "AI 技術愛好者", "數據分析師"];
    let wordIndex = 0;
    let charIndex = 0;
    function typeEffect() {
        if (charIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            setTimeout(eraseEffect, 1000);
        }
    }
    function eraseEffect() {
        if (charIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }
    typeEffect();

    // 背景動畫
    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x >= canvas.width || this.x <= 0) this.speedX *= -1;
            if (this.y >= canvas.height || this.y <= 0) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = "#0ff";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let particle of particlesArray) {
            particle.update();
            particle.draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();
// 翻譯功能
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        zh: {
            about: "關於我",
            education: "學歷",
            workexperience: "工作經驗",
            certificates: "證照",
            portfolio: "作品展示",
            contact: "聯絡方式",
            welcome: "歡迎來到陳冠宇的個人形象網站",
            welcomeSub: "Welcome to GuanYuC personal image website !!",
            description: "專注於前端開發、AI技術與數據分析"
        },
        en: {
            about: "About Me",
            education: "Education",
            workexperience: "Work Experience",
            certificates: "Certificates",
            portfolio: "Portfolio",
            contact: "Contact",
            welcome: "Welcome to GuanYuC's Personal Website",
            welcomeSub: "Welcome to GuanYuC personal image website !!",
            description: "Focus on Frontend Development, AI Technology, and Data Analysis"
        },
        de: {
            about: "Über Mich",
            education: "Bildung",
            workexperience: "Berufserfahrung",
            certificates: "Zertifikate",
            portfolio: "Portfolio",
            contact: "Kontakt",
            welcome: "Willkommen auf GuanYuCs persönlicher Website",
            welcomeSub: "Welcome to GuanYuC personal image website !!",
            description: "Konzentration auf Frontend-Entwicklung, KI-Technologie und Datenanalyse"
        },
        vi: {
            about: "Về Tôi",
            education: "Học Vấn",
            workexperience: "Kinh Nghiệm Làm Việc",
            certificates: "Chứng Chỉ",
            portfolio: "Danh Mục Đầu Tư",
            contact: "Liên Hệ",
            welcome: "Chào mừng bạn đến với trang web cá nhân của GuanYuC",
            welcomeSub: "Welcome to GuanYuC personal image website !!",
            description: "Tập trung vào Phát triển Frontend, Công nghệ AI và Phân tích Dữ liệu"
        }
    };

    const translation = translations[language];
    document.querySelector("nav ul li a[href='#about']").textContent = translation.about;
    document.querySelector("nav ul li a[href='#education']").textContent = translation.education;
    document.querySelector("nav ul li a[href='#workexperience']").textContent = translation.workexperience;
    document.querySelector("nav ul li a[href='#certificates']").textContent = translation.certificates;
    document.querySelector("nav ul li a[href='#portfolio']").textContent = translation.portfolio;
    document.querySelector("nav ul li a[href='#contact']").textContent = translation.contact;
    document.querySelector("#hello h1").textContent = translation.welcome;
    document.querySelector("#hello h2").textContent = translation.welcomeSub;
    document.querySelector("#about p").textContent = translation.description;
}
});
