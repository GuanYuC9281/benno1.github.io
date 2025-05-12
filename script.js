// -- 視窗大小調整科技感縮放 --
window.addEventListener("resize", function() {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
        if (window.innerWidth < 1200) {
            mainContent.style.transform = "scale(0.9)";
        } else {
            mainContent.style.transform = "scale(1)";
        }
    }
});

// -- 地球語言選單功能 --
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    const languageMenu = document.getElementById("language-menu");

    if (languageToggle && languageMenu) {
        languageToggle.addEventListener("click", function () {
            languageMenu.style.display = (languageMenu.style.display === "block") ? "none" : "block";
        });

        document.querySelectorAll("#language-menu a").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetHref = this.getAttribute("href");
                if (targetHref) {
                    window.location.href = targetHref;
                }
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    const languageMenu = document.getElementById("language-menu");

    if (languageToggle && languageMenu) {
        // 先設定手機點擊開關
        languageToggle.addEventListener("click", function (e) {
            e.preventDefault();
            if (window.innerWidth <= 768) {
                // 只針對手機版點擊
                languageMenu.classList.toggle("show-menu");
            }
        });

        // 手機版點空白地方收合
        document.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
                if (!languageToggle.contains(e.target) && !languageMenu.contains(e.target)) {
                    languageMenu.classList.remove("show-menu");
                }
            }
        });

        // 選擇語言時直接跳轉
        document.querySelectorAll("#language-menu a").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetHref = this.getAttribute("href");
                if (targetHref) {
                    window.location.href = targetHref;
                }
            });
        });
    }
});

// -- 打字機效果 --
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector(".typing");
    let words = [];
    let wordIndex = 0;
    let charIndex = 0;
    let typingInterval;
    let isErasing = false;

    function setWords(language) {
        switch (language) {
            case "zh":
                words = ["網頁前端開發者", "AI 技術愛好者", "ESG永續經營分析者"];
                break;
            case "en":
                words = ["Frontend Developer", "AI Technology Enthusiast", "ESG Sustainability Analyst"];
                break;
            case "ja":
                words = ["フロントエンド開発者", "AI技術愛好家", "ESG持続可能性分析者"];
                break;
            case "de":
                words = ["Frontend-Entwickler", "KI-Technologie-Enthusiast", "ESG-Nachhaltigkeitsanalyst"];
                break;
            case "vi":
                words = ["Nhà phát triển Frontend", "Người yêu thích Công nghệ AI", "Nhà phân tích ESG Bền vững"];
                break;
            case "es":
                words = ["Desarrollador Frontend", "Entusiasta de la Tecnología AI", "Analista de Sostenibilidad ESG"];
                break;
            default:
                words = ["網頁前端開發者", "AI 技術愛好者", "ESG永續經營分析者"];
        }
    }

    function type() {
        const currentWord = words[wordIndex];
        if (!isErasing) {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isErasing = true;
                setTimeout(type, 1000);
                return;
            }
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isErasing = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }
        typingInterval = setTimeout(type, isErasing ? 100 : 150);
    }

    function restartTyping(language) {
        clearTimeout(typingInterval);
        setWords(language);
        typingElement.textContent = "";
        wordIndex = 0;
        charIndex = 0;
        isErasing = false;
        type();
    }

    if (typingElement) {
        if (typeof defaultLanguage !== "undefined") {
            restartTyping(defaultLanguage);
        } else {
            restartTyping("zh");
        }
    }

    // 語言選單切換時
    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            const selectedLanguage = languageSelect.value;
            restartTyping(selectedLanguage);
        });
    }
});
// -- 背景粒子動畫 --
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("backgroundCanvas");
    if (canvas) {
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
    }
});

// -- nav滾動至目標區塊 --
document.querySelectorAll("nav ul li a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// -- 滾動時區塊動畫出現 --
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
                section.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

// -- 瀏覽次數統計 --
document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount");
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem("visitCount", visitCount);

    const counterElement = document.getElementById("visit-counter");
    if (counterElement) {
        counterElement.textContent = `瀏覽次數: ${visitCount}`;
    }
});

// -- 關於我內容出現動畫 --
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".additional-content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
});

// -- 工作經驗區塊出現動畫 --
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

// -- 作品展示區塊動畫&語音介紹（TTS） --
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

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

    // AI語音介紹
    document.querySelectorAll(".voice-button").forEach(button => {
        button.addEventListener("click", function () {
            const text = button.getAttribute("data-text");
            if (text) {
                const utterance = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(utterance);
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
    // -- 手機版點擊卡片翻轉 --
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });
});

    // 點選選單項目後收起
    const menuLinks = navbarMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });
});