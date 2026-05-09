const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzg6RRGEMXsJW72mRlR-GmupMG3M_hcbBzIp8Btp-lKZ0hEbgiJD7aJt2EdZuQMxnar/exec';

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('myForm');
  const status = document.getElementById('status');
  const courseSelect = document.getElementById('courseSelect');
  const levelTestBtn = document.getElementById('levelTestBtn');

  /* показать кнопку теста */
  courseSelect?.addEventListener('change', () => {
    levelTestBtn.style.display =
      courseSelect.value === 'Английский язык' ? 'inline-flex' : 'none';
  });

  /* тест */
  levelTestBtn?.addEventListener('click', () => {

    const questions = [
      { q: "I ___ a student.", options: ["am", "is", "are"], correct: "am" },
      { q: "He ___ to school yesterday.", options: ["go", "went", "gone"], correct: "went" },
      { q: "I have ___ apples.", options: ["some", "any", "many"], correct: "some" },
      { q: "She ___ like coffee.", options: ["don't", "doesn't", "not"], correct: "doesn't" },
      { q: "We ___ football on Sundays.", options: ["play", "plays", "playing"], correct: "play" }
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
      const ans = prompt(
        questions[i].q + "\n" + questions[i].options.join(", ")
      );

      if (ans === null) {
        alert('Тест отменён');
        return;
      }

      if (ans.trim().toLowerCase() === questions[i].correct) {
        score++;
      }
    }

    let level = 'A1';
    if (score >= 4) level = 'B1';
    else if (score >= 2) level = 'A2';

    alert(`Ваш уровень английского: ${level}`);

    let inputLevel = document.getElementById('levelInput');

    if (!inputLevel) {
      inputLevel = document.createElement('input');
      inputLevel.type = 'hidden';
      inputLevel.name = 'level';
      inputLevel.id = 'levelInput';
      form.appendChild(inputLevel);
    }

    inputLevel.value = level;
  });

  /* отправка формы */
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    status.textContent = 'Заявка отправлена ✅';
    status.style.color = '#22c55e';

    const formData = new FormData(form);
    form.reset();

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData
    }).catch(() => {
      status.textContent = 'Ошибка отправки ❌';
      status.style.color = '#ef4444';
    });
  });

});


const wrapper = document.querySelector('.testimonials-wrapper');
const track = document.querySelector('.testimonials');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateCarousel() {
  const cardWidth = track.querySelector('blockquote').offsetWidth + 16; // gap 16px
  track.style.transform = `translateX(${-index * cardWidth}px)`;
}

// Кнопки вперед/назад
nextBtn.addEventListener('click', () => {
  if (index < track.children.length - 1) index++;
  else index = 0;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  else index = track.children.length - 1;
  updateCarousel();
});

// Автопрокрутка каждые 4 секунды
setInterval(() => {
  index++;
  if(index >= track.children.length) index = 0;
  updateCarousel();
}, 4000);




const translations = {
  ru: {
    // 🔹 МЕНЮ
    "nav-courses": "Курсы",
    "nav-benefits": "Преимущества",
    "nav-teachers": "Преподаватели",
    "nav-contact": "Книги",
    "btn-sign": "ИИ Алфоз",
    "zap": "Записаться",
    "zap2": "3 раза в неделю · 90 мин",
    "zap3": "3 раза в неделю · 90 мин",
    "zap4": "3 раза в неделю · 90 мин",
    "zap5": "3 раза в неделю · 90 мин",
    "zap6": "3 раза в неделю · 90 мин",
    "zap7": "3 раза в неделю · 90 мин",
    "zap8": "3 раза в неделю · 90 мин",
    "zap9": "Python/JS · Проектный подход · Хакатоны",
    "zap10": "5–7 лет · Комплексное развитие",
    "zap11": "14+ лет",
    "zap12": "Детские программы",
    "zap13": "6–25+ лет",
    "zap14": "6-25+ лет",
    "zap15": "6-25+ лет",
    "zap16": "6-25+ лет",
    "zap17": "6-25+ лет",
    "zap18": "6-25+ лет",
    "zap19": "8–25+ лет",


    "infocurs1": "Коммуникативная методика, подготовка к IELTS/TOEFL, разговорные клубы по субботам.",
    "infocurs2": "Грамматика, разговорная практика и развитие письменной речи.",
    "infocurs3": "Алфавит хангыль, разговорная речь и понимание культуры.",
    "infocurs4": "Разговорная практика, иероглифы и основы делового общения.",
    "infocurs5": "Разговорная практика, грамматика и развитие письменной речи.",
    "infocurs6": "Грамматика, разговорный немецкий и подготовка к экзаменам.",
    "infocurs7": "Обучение чтению, письму, счёту и развитие логического мышления",
    "infocurs8": "Создание сайтов и ботов. Портфолио-проект к окончанию курса.",
    "infocurs9": "Разбор типовых задач и индивидуальная траектория для сильных учеников.",


   

    "yaz1": "Корейский язык",
    "yaz2": "Китайский язык",
    "yaz3": "Таджикский язык",
    "yaz4": "Немецкий язык",
    "yaz5": "Подготовка к школе",
    "yaz6": "Программирование",
    "yaz7": "Математика",

    "namepeople1": "Корейский язык",
    "namepeople2": "Китайский язык",
    "namepeople3": "Таджикский язык",
    "namepeople4": "Немецкий язык",
    "namepeople5": "Подготовка к школе",
    "namepeople6": "Программирование",
    "namepeople7": "Математика",
    "namepeople8": "",
    "namepeople9": "Английский язык",

    "ot": "Отзывы учеников",

    "menyvapros": "Частые вопросы",
    "menyvapros1": "Как записаться на пробный урок?",
    "menyvapros2": "Оставьте заявку в форме ниже, мы свяжемся в течение дня и подберём время.",

    "menyvapros3": "Какие уровни набора по английскому?",
    "menyvapros4": "От A1 до C1. Перед стартом проводим бесплатное тестирование уровня.",

    "menyvapros5": "Есть ли онлайн-занятия?",
    "menyvapros6": "Да, все курсы доступны онлайн в Zoom/Meet. Записи уроков сохраняем.",

    "menyvapros7": "Можно ли заморозить абонемент?",
    "menyvapros8": "Да, до 2 недель в семестр при наличии уважительной причины.",


    "contact1": "Контакты",
    "buttonTest": "Пройти тест на уровень",
    



    "tulbox": "Личная траектория обучения и отчёт для родителей каждый месяц.",
    "tulbox2": "Сертификаты CELTA/IELTS, призёры олимпиад, действующие разработчики.",
    "tulbox3": "Личный кабинет, домашки онлайн, записи уроков и прогресс-аналитика.",


    // 🔹 HERO
    "hero-title": "Образовательный центр для школьников и взрослых",
    "hero-desc": "Английский язык, математика, программирование и подготовка к экзаменам. Малые группы, сильные преподаватели, современная методика.",
    "btn-courses": "Смотреть курсы",
    "btn-free": "Бесплатное занятие",

    // 🔹 СТАТИСТИКА
    "stat1": "выпускников",
    "stat2": "сдали экзамены",
    "stat3": "рейтинг",

    // 🔹 КУРСЫ
    "courses-title": "Популярные курсы",
    "course-english": "Английский язык",
    "course-russian": "Русский язык",
    "course-korean": "Корейский язык",
    "course-chinese": "Китайский язык",
    "course-tajik": "Таджикский язык",
    "course-german": "Немецкий язык",
    "course-math": "Математика",
    "course-programming": "Программирование",
    "course-preschool": "Подготовка к школе",

    // 🔹 ПРЕИМУЩЕСТВА
    "benefits-title": "Почему выбирают нас",
    "benefit1": "Индивидуальные цели",
    "benefit2": "Опытные преподаватели",
    "benefit3": "Умные технологии",

    "benefit1-desc": "Личная траектория обучения и отчёт для родителей каждый месяц.",
    "benefit2-desc": "Сертификаты CELTA/IELTS, призёры олимпиад, действующие разработчики.",
    "benefit3-desc": "Личный кабинет, домашки онлайн, записи уроков и прогресс-аналитика.",

    // 🔹 ПРЕПОДАВАТЕЛИ
    "teachers-title": "Наши преподаватели",

    // 🔹 ОТЗЫВЫ
    "reviews-title": "Отзывы учеников",

    // 🔹 FAQ
    "faq-title": "Частые вопросы",
    "faq1": "Как записаться на пробный урок?",
    "faq1-desc": "Оставьте заявку в форме ниже, мы свяжемся в течение дня и подберём время.",
    "faq2": "Есть ли онлайн-занятия?",
    "faq2-desc": "Да, все курсы доступны онлайн.",
    "faq3": "Какие уровни по английскому?",
    "faq3-desc": "От A1 до C1.",
    "faq4": "Можно ли заморозить абонемент?",
    "faq4-desc": "Да, до 2 недель.",

    // 🔹 ФОРМА
    "contact-title": "Оставьте заявку",
    "form-title": "Запишитесь на бесплатный урок",
    "name-label": "Ваше имя",
    "phone-label": "Телефон",
    "course-label": "Курс",
    "message-label": "Комментарий",
    "submit-btn": "Отправить",

    // 🔹 КОНТАКТЫ
    "contacts-title": "Контакты",
    "address": "Наш адрес",
    "work-time": "Пн–Сб: 8:00–17:00",

    // 🔹 ФУТЕР
    "footer-text": "Все права защищены"
  },

  tj: {
    // 🔹 МЕНЮ
    "nav-courses": "Курсҳо",
    "nav-benefits": "Бартариҳо",
    "nav-teachers": "Омӯзгорон",
    "nav-contact": "Китобхо",
    "btn-sign": "ИИ Алфоз",
    "zap": "Сабти ном",
    "zap2": "3 маротиба дар як ҳафта · 90 дакика",
    "zap3": "3 маротиба дар як ҳафта · 90 дакика",
    "zap4": "3 маротиба дар як ҳафта · 90 дакика",
    "zap5": "3 маротиба дар як ҳафта · 90 дакика",
    "zap6": "3 маротиба дар як ҳафта · 90 дакика",
    "zap7": "3 маротиба дар як ҳафта · 90 дакика",
    "zap8": "3 маротиба дар як ҳафта · 90 дакика",
    "zap9": "Python/JS · Равиши лоиҳавӣ · Хакатонҳо",
    "zap10": "5–7 сола · Рушди ҳамаҷониба",
    "zap11": "14+ сола",
    "zap12": "Барномаҳои кӯдакона",
    "zap13": "6–25+ сола",
    "zap14": "6–25+ сола",
    "zap15": "6–25+ сола",
    "zap16": "6–25+ сола",
    "zap17": "6–25+ сола",
    "zap18": "6–25+ сола",
    "zap19": "8–25+ сола",


    "namepeople1": "Забони кореягӣ",

    "namepeople2": "Забони чинӣ",
    "namepeople3": "Забони тоҷикӣ",
    "namepeople4": "Забони олмонӣ",
    "namepeople5": "Омодагӣ ба мактаб",
    "namepeople6": "Барномасозӣ",
    "namepeople7": "Математика",
    "namepeople8": "рейтинги",
    "namepeople9": "Забони англисӣ",
    "namepeople10": "Забони англисӣ",
    "namepeople11": "Забони русӣ",

    "ot": "Фикру мулоҳизаҳои донишҷӯён",

    "menyvapros": "Саволҳои маъмул",
    "menyvapros1": "Чӣ тавр ба дарси озмоишӣ сабти ном шавем?",
    "menyvapros2": "Формаро пур кунед ва мо дар давоми рӯз бо шумо тамос мегирем ва вақтро интихоб мекунем.",

    "menyvapros3": "Сатҳҳои омӯзиши забони англисӣ кадомҳоянд?",
    "menyvapros4": "Аз A1 то C1. Пеш аз оғоз тестии ройгони сатҳ гузаронида мешавад.",

    "menyvapros5": "Оё дарсҳои онлайн ҳастанд?",
    "menyvapros6": "Бале, ҳамаи курсҳо дар Zoom/Meet онлайн дастрасанд. Сабти дарсҳо нигоҳ дошта мешавад.",

    "menyvapros7": "Оё мумкин аст обунаро муваққатан қатъ кард?",
    "menyvapros8": "Бале, то 2 ҳафта дар як семестр бо сабаби асоснок.",

    "contact1": "Тамос",
    "buttonTest": "Санҷиши сатҳро гузаронед",


    "tulbox": "Роҳи инфиродии омӯзиш ва ҳисобот барои волидон ҳар моҳ.",
    "tulbox2": "Сертификатҳои CELTA/IELTS, ғолибони олимпиадаҳо, барномасозони амалкунанда.",
    "tulbox3": "Кабинети шахсӣ, вазифаҳои хонагӣ онлайн, сабти дарсҳо ва таҳлили пешрафт.",

    "yaz1": "Забони кореягӣ",
    "yaz2": "Забони чинӣ",
    "yaz3": "Забони тоҷикӣ",
    "yaz4": "Забони олмонӣ",
    "yaz5": "Омодагӣ ба мактаб",
    "yaz6": "Барномасозӣ",
    "yaz7": "Математика",

  "infocurs1": "Методикаи коммуникативӣ, омодагӣ ба IELTS/TOEFL, клубҳои гуфтугӯӣ рӯзҳои шанбе.",
  "infocurs2": "Грамматика, машқи гуфтугӯӣ ва рушди нутқи хаттӣ.",
  "infocurs3": "Алифбои хангыль, нутқи гуфтугӯӣ ва фаҳмиши фарҳанг.",
  "infocurs4": "Машқи гуфтугӯӣ, иероглифҳо ва асосҳои муоширати тиҷоратӣ.",
  "infocurs5": "Машқи гуфтугӯӣ, грамматика ва рушди нутқи хаттӣ.",
  "infocurs6": "Грамматика, забони гуфтугӯии олмонӣ ва омодагӣ ба имтиҳонҳо.",
  "infocurs7": "Омӯзиши хондан, навиштан, ҳисоб ва рушди тафаккури мантиқӣ.",
  "infocurs8": "Сохтани сайтҳо ва ботҳо. Лоиҳаи портфолио то анҷоми курс.",
  "infocurs9": "Таҳлили масъалаҳои намунавӣ ва траекторияи инфиродӣ барои хонандагони қавӣ.",




    // 🔹 HERO
    "hero-title": "Маркази таълимӣ барои хонандагон ва калонсолон",
    "hero-desc": "Забони англисӣ, математика, барномасозӣ ва омодагӣ ба имтиҳонҳо. Гурӯҳҳои хурд ва омӯзгорони пуртаҷриба.",
    "btn-courses": "Дидани курсҳо",
    "btn-free": "Дарси ройгон",

    // 🔹 СТАТИСТИКА
    "stat1": "хатмкунандагон",
    "stat2": "имтиҳон супориданд",
    "stat3": "рейтинги",

    // 🔹 КУРСЫ
    "courses-title": "Курсҳои машҳур",
    "course-english": "Забони англисӣ",
    "course-russian": "Забони русӣ",
    "course-korean": "Забони кореягӣ",
    "course-chinese": "Забони чинӣ",
    "course-tajik": "Забони тоҷикӣ",
    "course-german": "Забони олмонӣ",
    "course-math": "Математика",
    "course-programming": "Барномасозӣ",
    "course-preschool": "Омодагӣ ба мактаб",

    // 🔹 ПРЕИМУЩЕСТВА
    "benefits-title": "Чаро моро интихоб мекунанд",
    "benefit1": "Ҳадафҳои инфиродӣ",
    "benefit2": "Омӯзгорони ботаҷриба",
    "benefit3": "Технологияҳои муосир",

    "benefit1-desc": "Барномаи шахсӣ ва ҳисобот ҳар моҳ.",
    "benefit2-desc": "Омӯзгорони сертификатдор ва мутахассис.",
    "benefit3-desc": "Платформаи онлайн ва назорати пешрафт.",

    // 🔹 ПРЕПОДАВАТЕЛИ
    "teachers-title": "Омӯзгорони мо",

    // 🔹 ОТЗЫВЫ
    "reviews-title": "Фикру мулоҳизаҳо",

    // 🔹 FAQ
    "faq-title": "Саволҳои маъмул",
    "faq1": "Чӣ тавр ба дарси озмоишӣ сабт шавем?",
    "faq1-desc": "Формаро пур кунед ва мо бо шумо тамос мегирем.",
    "faq2": "Оё дарсҳои онлайн ҳастанд?",
    "faq2-desc": "Бале, ҳамаи курсҳо онлайн ҳастанд.",
    "faq3": "Сатҳҳои англисӣ?",
    "faq3-desc": "Аз A1 то C1.",
    "faq4": "Оё обуна қатъ мешавад?",
    "faq4-desc": "Бале, то 2 ҳафта.",

    // 🔹 ФОРМА
    "contact-title": "Дархост фиристед",
    "form-title": "Барои дарси ройгон сабти ном кунед",
    "name-label": "Номи шумо",
    "phone-label": "Телефон",
    "course-label": "Курс",
    "message-label": "Шарҳ",
    "submit-btn": "Фиристодан",

    // 🔹 КОНТАКТЫ
    "contacts-title": "Тамос",
    "address": "Суроға",
    "work-time": "Дш–Шн: 8:00–17:00",

    // 🔹 ФУТЕР
    "footer-text": "Ҳамаи ҳуқуқҳо ҳифз шудаанд"
  }
};

function setLang(lang) {
  const dict = translations[lang];

  for (let key in dict) {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = dict[key];
    }
  }

  localStorage.setItem("lang", lang);
  
}

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  setLang(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ru";
  document.getElementById("languageSwitcher").value = savedLang;
  setLang(savedLang);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});