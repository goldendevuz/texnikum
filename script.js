// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if(navLinks) navLinks.classList.remove('nav-active');
        }
    });
});

// Yo'nalishlar ma'lumotlari
const directionData = {
    comp: {
        title: "Kompyuter tarmoq dasturchisi",
        content: "📚 Davomiyligi: 2 yil 10 oy\n\n💻 O'tiladigan fanlar:\n• Tarmoq texnologiyalari (Cisco)\n• Python dasturlash\n• Linux administratsiya\n• Tarmoq xavfsizligi\n• Serverlarni sozlash\n\n🎓 Bitiruvchi: Tarmoq muhandisi, Dasturchi"
    },
    seller: {
        title: "Sotuvchi",
        content: "📚 Davomiyligi: 1 yil 6 oy\n\n💻 O'tiladigan fanlar:\n• Savdo psixologiyasi\n• Marketing asoslari\n• Mijozlar bilan ishlash\n• Kassaviy operatsiyalar\n• Tovar yuritish\n\n🎓 Bitiruvchi: Savdo bo'yicha mutaxassis"
    },
    sewing: {
        title: "Tikuvchi",
        content: "📚 Davomiyligi: 1 yil 6 oy\n\n💻 O'tiladigan fanlar:\n• Tikuv mashinalari\n• Modellashtirish\n• Materiallar texnologiyasi\n• Zamonaviy tikuv uslublari\n• Dizayn asoslari\n\n🎓 Bitiruvchi: Tikuvchi-moda dizayner"
    },
    electric: {
        title: "Elektrik",
        content: "📚 Davomiyligi: 2 yil\n\n💻 O'tiladigan fanlar:\n• Elektr sxemalari\n• Avtomatika\n• Xavfsizlik qoidalari\n• Elektr ta'minoti\n• Sanoat elektronikasi\n\n🎓 Bitiruvchi: Elektr muhandisi"
    },
    welder: {
        title: "Payvandchi",
        content: "📚 Davomiyligi: 1 yil 6 oy\n\n💻 O'tiladigan fanlar:\n• Argon payvand\n• Elektr payvand\n• Gaz payvand\n• Metall konstruksiyalar\n• Xavfsizlik texnikasi\n\n🎓 Bitiruvchi: Payvandchi (5-toifa)"
    },
    auto: {
        title: "AVTO (Avtomobil diagnostikasi)",
        content: "📚 Davomiyligi: 2 yil\n\n💻 O'tiladigan fanlar:\n• Avtomobil tuzilishi\n• Diagnostika uskunalari\n• Elektron tizimlar\n• Remont texnologiyasi\n• Motorlarni ta'mirlash\n\n🎓 Bitiruvchi: Avto-mexanik, Diagnost"
    }
};

// Modal
const modal = document.getElementById('directionModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.direction-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if(e.target.classList.contains('more-btn') || e.target.classList.contains('direction-card')) {
            const dir = this.dataset.direction;
            const data = directionData[dir];
            if(data) {
                modalTitle.textContent = data.title;
                modalContent.innerHTML = data.content.replace(/\n/g, '<br>');
                modal.style.display = 'block';
            }
        }
    });
});

if(closeModal) {
    closeModal.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };
}

// Teachers data
const teachersData = [
    { name: "Alimov Bekzod", role: "Kompyuter tarmoqlari", img: "https://randomuser.me/api/portraits/men/32.jpg", tg: "https://t.me/bek", ig: "https://instagram.com/bek" },
    { name: "Karimova Nilufar", role: "Dasturlash", img: "https://randomuser.me/api/portraits/women/68.jpg", tg: "https://t.me/nil", ig: "https://instagram.com/nil" },
    { name: "Rahmatullayev Javlon", role: "Elektrik", img: "https://randomuser.me/api/portraits/men/45.jpg", tg: "https://t.me/jav", ig: "https://instagram.com/jav" },
    { name: "Toshmatova Gulnora", role: "Tikuvchilik", img: "https://randomuser.me/api/portraits/women/44.jpg", tg: "https://t.me/gul", ig: "https://instagram.com/gul" },
    { name: "Usmonov Sardor", role: "Payvandchilik", img: "https://randomuser.me/api/portraits/men/22.jpg", tg: "https://t.me/sard", ig: "https://instagram.com/sard" },
    { name: "Xolmatova Surayyo", role: "AVTO", img: "https://randomuser.me/api/portraits/women/25.jpg", tg: "https://t.me/sura", ig: "https://instagram.com/sura" },
    { name: "Rahimov Shuhrat", role: "Sotuvchi", img: "https://randomuser.me/api/portraits/men/15.jpg", tg: "https://t.me/shuh", ig: "https://instagram.com/shuh" }
];

const teachersSwiperWrapper = document.getElementById('teachersSwiperWrapper');
if(teachersSwiperWrapper && teachersData.length > 0) {
    teachersData.forEach(teacher => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `
            <div class="teacher-card">
                <img src="${teacher.img}" alt="${teacher.name}">
                <h3>${teacher.name}</h3>
                <p>${teacher.role}</p>
                <div class="student-social">
                    <a href="${teacher.tg}" target="_blank"><i class="fab fa-telegram"></i></a>
                    <a href="${teacher.ig}" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;
        teachersSwiperWrapper.appendChild(slide);
    });
}

// Initialize Swipers (tugmalarsiz)
if(typeof Swiper !== 'undefined') {
    // Teachers Swiper - tugmalar yo'q
    new Swiper('.teachers-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Achievements Swiper
    new Swiper('.achievements-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Testimonials Swiper
    new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

// Yoshingizni hisoblash
const birthdateInput = document.getElementById('birthdate');
const ageInput = document.getElementById('age');

if(birthdateInput) {
    birthdateInput.addEventListener('change', function() {
        const birthDate = new Date(this.value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        if(ageInput) ageInput.value = age;
    });
}

// ========== TELEGRAM BOT ==========
const BOT_TOKEN = "8785456517:AAG4JDnuNokhB95kqGhG1sJN5ztaVe10AJE";
const ADMIN_CHAT_ID = "5856575656";
const GROUP_CHAT_ID = "-1003839063572";

const form = document.getElementById('applicationForm');
const messageDiv = document.getElementById('formMessage');

async function sendToTelegram(chatId, message) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: "HTML"
            })
        });
        return await response.json();
    } catch(error) {
        console.error('Xatolik:', error);
        return { ok: false };
    }
}

async function sendToBoth(message) {
    const personal = await sendToTelegram(ADMIN_CHAT_ID, message);
    const group = await sendToTelegram(GROUP_CHAT_ID, message);
    return { personal: personal.ok, group: group.ok };
}

if(form) {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const birthdate = document.getElementById('birthdate').value;
        const age = document.getElementById('age').value;
        const region = document.getElementById('region').value;
        const district = document.getElementById('district').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const documentNumber = document.getElementById('documentNumber').value.trim();
        const school = document.getElementById('school').value.trim();
        const direction = document.getElementById('directionSelect').value;
        const telegramUsername = document.getElementById('telegramUsername').value.trim();

        if(!fullname || !birthdate || !region || !district || !phone || !email || !documentNumber || !school || !direction) {
            messageDiv.innerHTML = '<span style="color:red;">❌ Barcha majburiy maydonlarni to\'ldiring!</span>';
            return;
        }

        const tgUser = telegramUsername ? `\n💬 <b>Telegram:</b> ${telegramUsername}` : '';

        const message = `
📢 <b>YANGI ARIZA!</b> 📢
━━━━━━━━━━━━━━━━━━━
👤 <b>Ism:</b> ${fullname}
🎂 <b>Tug'ilgan sana:</b> ${birthdate}
📊 <b>Yoshi:</b> ${age}
📍 <b>Viloyat:</b> ${region}
🏠 <b>Tuman:</b> ${district}
📞 <b>Telefon:</b> ${phone}
✉️ <b>Email:</b> ${email}
🆔 <b>Hujjat raqami:</b> ${documentNumber}
🏫 <b>Maktab:</b> ${school}
🎓 <b>Yo‘nalish:</b> ${direction}${tgUser}
━━━━━━━━━━━━━━━━━━━
🕐 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
        `;

        messageDiv.innerHTML = '<span style="color:blue;">⏳ Arizangiz yuborilmoqda...</span>';

        try {
            const result = await sendToBoth(message);

            if(result.personal && result.group) {
                messageDiv.innerHTML = '<span style="color:green;">✅ Arizangiz qabul qilindi! Tez orada bog\'lanamiz.</span>';
                form.reset();
                if(ageInput) ageInput.value = '';
            } else if(result.personal && !result.group) {
                messageDiv.innerHTML = '<span style="color:orange;">⚠️ Arizangiz qabul qilindi, lekin guruhga yuborishda xatolik.</span>';
                form.reset();
            } else {
                messageDiv.innerHTML = '<span style="color:red;">❌ Xatolik yuz berdi. Qaytadan urinib ko\'ring.</span>';
            }
        } catch(error) {
            messageDiv.innerHTML = '<span style="color:red;">❌ Tarmoq xatosi!</span>';
        }
    });
}

console.log('Sayt ishga tushdi!');