/* script.js - 科技感動畫效果 */

window.addEventListener("resize", function() {
    if (window.innerWidth < 1200) {
        document.querySelector(".main-content").style.transform = "scale(0.9)";
    } else {
        document.querySelector(".main-content").style.transform = "scale(1)";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // 打字機效果
    const typingElement = document.querySelector(".typing");
    const words = ["網頁前端開發者", "AI 技術愛好者", "ESG永續經營分析者"];
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
            future: "未來展望",
            contact: "聯絡方式",
            welcome: "勇於挑戰，成就卓越",
            welcomeSub: "您好~我是陳冠宇，歡迎來到我的個人形象網站!!",
            description: "專注於網頁前端開發、AI技術、數據分析與ESG永續經營理念"
        },
        en: {
            about: "About Me",
            education: "Education",
            workexperience: "Work Experience",
            certificates: "Certificates",
            portfolio: "Portfolio",
            future: "Future Outlook",
            contact: "Contact",
            welcome: "Dare to challenge, achieve excellence",
            welcomeSub: "Hello~ I'm GuanYuC Welcome to my personal image website !!",
            description: "Focus on Frontend Development, AI Technology, and Data Analysis"
        },
        de: {
            about: "Über Mich",
            education: "Bildung",
            workexperience: "Berufserfahrung",
            certificates: "Zertifikate",
            portfolio: "Portfolio",
            future: "Zukunftsaussichten",
            contact: "Kontakt",
            welcome: "Herausforderungen annehmen, Exzellenz erreichen",
            welcomeSub: "Hello~ I'm GuanYuC Welcome to my personal image website !!",
            description: "Konzentration auf Frontend-Entwicklung, KI-Technologie und Datenanalyse"
        },
        vi: {
            about: "Về Tôi",
            education: "Học Vấn",
            workexperience: "Kinh Nghiệm Làm Việc",
            certificates: "Chứng Chỉ",
            portfolio: "Danh Mục Đầu Tư",
            future: "Triển Vọng Tương Lai",
            contact: "Liên Hệ",
            welcome: "Dám thách thức, đạt được sự xuất sắc",
            welcomeSub: "Hello~ I'm GuanYuC Welcome to my personal image website !!",
            description: "Tập trung vào Phát triển Frontend, Công nghệ AI và Phân tích Dữ liệu"
        },
        ja: {
            about: "私について",
            education: "学歴",
            workexperience: "職務経験",
            certificates: "資格",
            portfolio: "ポートフォリオ",
            future: "将来展望",
            contact: "お問い合わせ",
            welcome: "挑戦し、卓越を達成する",
            welcomeSub: "Hello~ I'm GuanYuC Welcome to my personal image website !!",
            description: "フロントエンド開発、AI技術、データ分析、ESG持続可能経営の理念に注力"
        }
    };

    const translation = translations[language];
    document.querySelector("nav ul li a[href='#about']").textContent = translation.about;
    document.querySelector("nav ul li a[href='#education']").textContent = translation.education;
    document.querySelector("nav ul li a[href='#workexperience']").textContent = translation.workexperience;
    document.querySelector("nav ul li a[href='#certificates']").textContent = translation.certificates;
    document.querySelector("nav ul li a[href='#portfolio']").textContent = translation.portfolio;
    document.querySelector("nav ul li a[href='#future']").textContent = translation.future;
    document.querySelector("nav ul li a[href='#contact']").textContent = translation.contact;
    document.querySelector("#hello h1").textContent = translation.welcome;
    document.querySelector("#hello h2").textContent = translation.welcomeSub;
    document.querySelector("#about p").textContent = translation.description;
}
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.8;
        sections.forEach(section => {
            if (section.offsetTop < scrollPosition) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // 初始化檢查
});

document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // 預留空間
                behavior: "smooth"
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            
            if (scrollPosition > sectionTop && window.scrollY < sectionBottom) {
                section.classList.add("active");
            } else {
                section.classList.remove("active"); // 滾動回去時移除
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // 初始化檢查
});

// 取得計數
let visitCount = localStorage.getItem("visitCount");

// 如果是第一次訪問，初始化為 1
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}

// 存回 localStorage
localStorage.setItem("visitCount", visitCount);

// 顯示計數
document.getElementById("visit-counter").textContent = `瀏覽次數: ${visitCount}`;

//關於我內容動畫
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".additional-content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // 進入畫面 → 顯示
            } else {
                entry.target.classList.remove("show"); // 離開畫面 → 收回
            }
        });
    }, { threshold: 0.2 }); // 20% 進入畫面就觸發

    elements.forEach((el) => observer.observe(el));
});

/*工作經驗*/ 
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    items.forEach((el) => observer.observe(el));
});

/*作品展示*/
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    // 滾動動畫
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    projects.forEach((el) => observer.observe(el));

    // AI 語音介紹 (TTS)
    document.querySelectorAll(".voice-button").forEach(button => {
        button.addEventListener("click", () => {
            let text = button.getAttribute("data-text");
            let speech = new SpeechSynthesisUtterance(text);
            speech.lang = "zh-TW"; // 設定語言為中文
            window.speechSynthesis.speak(speech);
        });
    });
});



/*未來展望*/
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    items.forEach((el) => observer.observe(el));
});



