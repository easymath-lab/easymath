// Барлық сөздердің толық екі тілдегі аударма базасы
const translations = {
   kk: {
      // Nav & Hero
      nav_about: "Біз туралы",
      nav_how: "Қалай өтеді",
      nav_pricing: "Тарифтер",
      nav_cta: "Жазылу",
      hero_badge: "10-сынып Сыртқы Емтиханы",
      hero_title: "Қиын емтиханды оңай A*-ға айналдыр",
      hero_desc: "143/160 (A*) және 128/160 (A) жинаған сарапшылардан 7-10 сынып математикасын оңай меңгер.",
      hero_btn_main: "Курсты таңдау",
      hero_btn_demo: "Демо сабақ",

      // About Section
      about_badge: "Команда",
      about_title: "Біз күрделі тақырыптарды жеңілдеткіміз келеді",
      about_subtitle: "Емтиханнан жоғары балл жинаған және оқытуда визуализацияны қолданатын сарапшылар",

      // Mentors
      bauyrzhan_name: "Бауыржан ағай",
      bauyrzhan_li1: "2 жылдық репетиторлық тәжірибе",
      bauyrzhan_li2: "Визуализациямен түсіндіру",
      bauyrzhan_li3: "Соңғы 2 жылдағы математика балым: 97%",
      bauyrzhan_proj_label: "Жоба:",
      quote_about_proj: "Жоба туралы:",
      bauyrzhan_quote: "«Math Beyond Borders» жобасы — бұл математикалық дайындық деңгейін арттырып, МЭСК емтиханына сенімді келуге бағытталған. Жоба жүйелі жұмыс істеуге және стандартты мектеп бағдарламасынан тыс күрделі есептерді шешуге дайын оқушыларға арналған.",

      alinur_name: "Әлинұр ағай",
      alinur_li1: "Визуализация сарапшысы",
      alinur_li2: "Интерактив арқылы түсіндіру",
      alinur_li3: "Соңғы 2 жылдағы математика балым: 97%",
      alinur_proj_label: "Жоба:",
      quote_mission: "Жоба миссиясы:",
      alinur_quote: "Kelmenger — қазақ тілді аудиторияға математика бойынша сапалы визуализациялар мен терең контент ұсынып, жастардың математикаға болған құштарлығын ояту үшін ашылған жоба.",

      daniyar_name: "Данияр ағай",
      daniyar_li1: "2 жылдық репетиторлық тәжірибе",
      daniyar_li2: "Шынайы өмірдегі мысалдармен түсіндіру",
      daniyar_li3: "Соңғы 2 жылдағы математика балым: 92%",
      quote_teaching_style: "Оқыту тәсілі:",
      daniyar_quote: "Математика — құрғақ формулалар емес. Кез келген күрделі теореманы күнделікті өмірдегі заттармен шендестіріп түсіндіргенде, оқушы тақырыпты жаттамайды, оны сезінеді.",

      adilet_name: "Әділет ағай",
      adilet_sub: "Куратор",
      adilet_li1: "Оқу процесін толық бақылау мен қолдау",
      adilet_li2: "Жүйелі тәртіп пен бақылау",
      adilet_li3: "Соңғы 2 жылдағы математика балым: 89%",
      adilet_quote: "Біздің мақсат — тек формула жаттату емес, оқушыға жүйелі тәртіп пен сенімділік ұялату. Әр оқушының нәтижесі мен тәртібі менің жеке бақылауымда болады.",

      // Course Format Section
      format_badge: "Оқу форматы",
      format_title: "Курс қалай өтеді?",
      format_desc: "Максималды нәтижеге жетуге арналған жүйелі білім беру форматы",
      card1_title: "7-10 сынып PDF материалдары",
      card1_desc: "Әр тақырып бойынша арнайы дайындалған конспектілер, формулалар жинағы және конспект-дәптерлер.",
      card2_title: "Тақырыпты түсіндіру видеолары",
      card2_desc: "Күрделі теориялық материалдарды қарапайым әрі түсінікті тілде талдайтын қысқа видео-сабақтар.",
      card3_title: "Есеп талдау видео сабақтары",
      card3_desc: "Әртүрлі деңгейдегі есептердің практикалық шешу жолдары мен лайфхактары көрсетілген бейнежазбалар.",
      card4_title: "Аптасына 3 рет онлайн сабақ",
      card4_desc: "Куратормен тікелей эфирде сұрақ-жауап, күрделі тақырыптарды ашу және кері байланыс жасау.",
      card5_title: "Прогресс бақылау мен кеңестер",
      card5_desc: "Үнемі тест тапсырмаларын тексеру, даму динамикасын қадағалау және жеке рекомендациялар беру.",
      card6_title: "Жеке тәлімгерлік (Менторлық)",
      card6_desc: "Оқу барысында пайда болған кез келген сұрақ бойынша жеке көмек көрсететін тәжірибелі тәлімгер.",

      // Demo Block
      demo_title: "🎁 Демо сабақты көріп, сапасын тексеріңіз",
      demo_subtitle: "Сабақты қай тілде көргіңіз келеді? Тілді таңдаңыз:",
      demo_pdf_btn: "📄 Демо PDF конспекті жүктеу",
      demo_wa_btn: "💬 Демо бойынша сұрақ қою (WhatsApp)",

      // Pricing Section
      pricing_badge: "Тарифтер",
      pricing_title: "Өзіңе қолайлы пакетті таңда",
      pricing_desc: "Дайындық деңгейіңе және мақсатыңа сай тарифті таңдап, оқуды қазірден баста",
      tariff_lite_title: "Өздігінен",
      tariff_lite_desc: "Тек өз бетінше дайындалғысы келетіндерге",
      t1_f1: "7-10 сынып барлық PDF материалдар",
      t1_f2: "Формулалар мен конспектілер",
      t1_f3: "Видео сабақтар",
      t1_f4: "Онлайн сабақтар & Менторлық",
      btn_choose: "Таңдау",

      popular_tag: "Ең өтімді",
      tariff_std_title: "Стандарт",
      tariff_std_desc: "Теория мен практиканы қатар меңгеруге",
      t2_f1: "Барлық PDF материалдар",
      t2_f2: "Тақырыпты түсіндіру видеолары",
      t2_f3: "Есеп талдау видео сабақтары",
      t2_f4: "Аптасына 3 рет онлайн сабақ",
      btn_start: "Бастау",

      tariff_vip_title: "Менторлық",
      tariff_vip_desc: "Толық бақылау мен максимум нәтиже",
      per_month: "₸ / ай",
      limit_warning: "⚠️ Орын саны шектеулі",
      t3_f1: "Барлық PDF материалдар + Видеолар",
      t3_f2: "Аптасына 3 рет онлайн сабақ",
      t3_f3: "Жеке тәлімгер (Ментор) қолдауы",
      t3_f4: "Прогресс бақылау & Жеке кеңестер",
      btn_take_seat: "Орын алу",

      // Register Section
      reg_badge: "Тіркелу",
      reg_title: "Курсқа жазылу",
      reg_desc: "Тариф пен оқу тілін таңдап, менеджерге тікелей жазыңыз",
      label_lang: "Оқу тілін таңдаңыз:",
      opt_kk: "Қазақ тілі",
      opt_ru: "Русский язык",
      label_tariff: "Тарифті таңдаңыз:",
      opt_lite: "Өздігінен (Lite) — 3 900 ₸",
      opt_std: "Интенсив (Standard) — 5 900 ₸",
      opt_vip: "Менторлық (VIP) — 28 000 ₸/ай",
      btn_whatsapp: "WhatsApp арқылы жазылу",

      // Footer
      footer_brand_desc: "10-сынып Сыртқы емтиханына сапалы дайындық платформасы.",
      footer_socials_title: "Әлеуметтік желілер:",
      footer_copy: "Барлық құқықтар қорғалған."
   },

   ru: {
      // Nav & Hero
      nav_about: "О нас",
      nav_how: "Как проходит",
      nav_pricing: "Тарифы",
      nav_cta: "Записаться",
      hero_badge: "Внешний Экзамен 10 Класса",
      hero_title: "Преврати сложный экзамен в легкую A*",
      hero_desc: "Освой математику 7-10 классов с экспертами, набравшими 143/160 (A*) и 128/160 (A).",
      hero_btn_main: "Выбрать курс",
      hero_btn_demo: "Демо урок",

      // About Section
      about_badge: "Команда",
      about_title: "Мы хотим сделать сложные темы простыми",
      about_subtitle: "Эксперты с высокими баллами, использующие визуализацию в обучении",

      // Mentors
      bauyrzhan_name: "Бауыржан агай",
      bauyrzhan_li1: "2 года опыта репетиторства",
      bauyrzhan_li2: "Объяснение через визуализацию",
      bauyrzhan_li3: "Балл по математике за 2 года: 97%",
      bauyrzhan_proj_label: "Проект:",
      quote_about_proj: "О проекте:",
      bauyrzhan_quote: "Проект «Math Beyond Borders» — это возможность значительно повысить уровень математической подготовки и уверенно подойти к МЭСК. Проект рассчитан на мотивированных учеников, готовых решать сложные задачи за рамками школьной программы.",

      alinur_name: "Алинур агай",
      alinur_li1: "Эксперт визуализации",
      alinur_li2: "Объяснение через интерактив",
      alinur_li3: "Балл по математике за 2 года: 97%",
      alinur_proj_label: "Проект:",
      quote_mission: "Миссия проекта:",
      alinur_quote: "Kelmenger — проект, созданный для предоставления качественных визуализаций по математике на казахском языке и пробуждения интереса к предмету.",

      daniyar_name: "Данияр агай",
      daniyar_li1: "2 года опыта репетиторства",
      daniyar_li2: "Объяснение на примерах из реальной жизни",
      daniyar_li3: "Балл по математике за 2 года: 92%",
      quote_teaching_style: "Подход к обучению:",
      daniyar_quote: "Математика — это не сухие формулы. Когда объясняешь сложные теоремы на жизненных примерах, ученик переключается с зубрежки на осознанное понимание.",

      adilet_name: "Адилет агай",
      adilet_sub: "Куратор",
      adilet_li1: "Полный контроль и сопровождение обучения",
      adilet_li2: "Системная дисциплина и контроль",
      adilet_li3: "Балл по математике за 2 года: 89%",
      adilet_quote: "Наша цель — не просто давать знания, а прививать дисциплину и уверенность. Результаты и прогресс каждого ученика находятся под моим личным контролем.",

      // Course Format Section
      format_badge: "Формат обучения",
      format_title: "Как проходит курс?",
      format_desc: "Системный формат обучения для достижения максимального результата",
      card1_title: "PDF материалы 7-10 классов",
      card1_desc: "Специально разработанные конспекты, сборники формул и рабочей тетради по каждой теме.",
      card2_title: "Видео-уроки с объяснением тем",
      card2_desc: "Короткие видео-уроки, разбирающие сложный теоретический материал простым языком.",
      card3_title: "Разборы задач в видео формате",
      card3_desc: "Видеозаписи с практическим решением и лайфхаками для задач разного уровня.",
      card4_title: "Онлайн-уроки 3 раза в неделю",
      card4_desc: "Прямые эфиры с куратором для вопросов и ответов, разбора сложных тем и обратной связи.",
      card5_title: "Контроль прогресса и советы",
      card5_desc: "Регулярная проверка тестов, отслеживание динамики развития и личные рекомендации.",
      card6_title: "Персональное менторство",
      card6_desc: "Опытный наставник, оказывающий индивидуальную помощь по любым возникающим вопросам.",

      // Demo Block
      demo_title: "🎁 Посмотрите демо-урок и оцените качество",
      demo_subtitle: "На каком языке вы хотите посмотреть урок? Выберите язык:",
      demo_pdf_btn: "📄 Скачать демо PDF конспект",
      demo_wa_btn: "💬 Задать вопрос по демо (WhatsApp)",

      // Pricing Section
      pricing_badge: "Тарифы",
      pricing_title: "Выберите подходящий пакет",
      pricing_desc: "Выберите тариф в соответствии с вашим уровнем подготовки и целями",
      tariff_lite_title: "Самостоятельный",
      tariff_lite_desc: "Для тех, кто хочет готовиться сам",
      t1_f1: "Все PDF материалы 7-10 классов",
      t1_f2: "Формулы и конспекты",
      t1_f3: "Видео-уроки",
      t1_f4: "Онлайн-уроки & Менторство",
      btn_choose: "Выбрать",

      popular_tag: "Популярный",
      tariff_std_title: "Стандарт",
      tariff_std_desc: "Для освоения теории и практики параллельно",
      t2_f1: "Все PDF материалы",
      t2_f2: "Видео-уроки с объяснением тем",
      t2_f3: "Видеозаписи с разбором задач",
      t2_f4: "Онлайн-уроки 3 раза в неделю",
      btn_start: "Начать",

      tariff_vip_title: "Менторство",
      tariff_vip_desc: "Полный контроль и максимальный результат",
      per_month: "₸ / мес",
      limit_warning: "⚠️ Количество мест ограничено",
      t3_f1: "Все PDF материалы + Видео",
      t3_f2: "Онлайн-уроки 3 раза в неделю",
      t3_f3: "Поддержка личного наставника (Ментора)",
      t3_f4: "Контроль прогресса & Советы",
      btn_take_seat: "Занять место",

      // Register Section
      reg_badge: "Регистрация",
      reg_title: "Записаться на курс",
      reg_desc: "Выберите тариф и язык обучения, затем напишите менеджеру",
      label_lang: "Выберите язык обучения:",
      opt_kk: "Казахский язык",
      opt_ru: "Русский язык",
      label_tariff: "Выберите тариф:",
      opt_lite: "Самостоятельный (Lite) — 3 900 ₸",
      opt_std: "Интенсив (Standard) — 5 900 ₸",
      opt_vip: "Менторство (VIP) — 28 000 ₸/мес",
      btn_whatsapp: "Записаться через WhatsApp",

      // Footer
      footer_brand_desc: "Платформа качественной подготовки к Внешнему экзамену 10 класса.",
      footer_socials_title: "Социальные сети:",
      footer_copy: "Все права защищены."
   }
};

// Демо сабақ дерекқоры
const demoData = {
   kk: {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      pdfUrl: "files/demo_kazakh.pdf",
      waText: "Саламатсыз ба! Демо сабақ бойынша сұрағым бар еді."
   },
   ru: {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      pdfUrl: "files/demo_russian.pdf",
      waText: "Здравствуйте! У меня есть вопрос по демо-уроку."
   }
};

// WhatsApp хабарламалар дерекқоры
const messages = {
   kk: {
      lite: 'Сәлеметсіз бе! Мен "Өздігінен" (Lite) пакеті бойынша жазып тұр едім.',
      standard: 'Сәлеметсіз бе! Мен "Интенсив" (Standard) пакеті бойынша жазып тұр едім.',
      vip: 'Сәлеметсіз бе! Мен "Менторлық" (VIP) пакеті бойынша жазып тұр едім. Бос орын бар ма?'
   },
   ru: {
      lite: 'Здравствуйте! Я пишу по поводу пакета "Самостоятельный" (Lite).',
      standard: 'Здравствуйте! Я пишу по поводу пакета "Интенсив" (Standard).',
      vip: 'Здравствуйте! Я пишу по поводу VIP-пакета "Менторство". Есть ли свободные места?'
   }
};

// Тілді өзгерту функциясы
function changeLanguage(lang) {
   const i18nElements = document.querySelectorAll('[data-i18n]');
   i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
         element.textContent = translations[lang][key];
      }
   });

   document.documentElement.lang = lang;

   // Header батырмалары стилін жаңарту
   const langButtons = document.querySelectorAll('.lang-switch .lang-btn');
   langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
         btn.classList.add('active');
      } else {
         btn.classList.remove('active');
      }
   });

   localStorage.setItem('selectedLang', lang);
}

// Демо сабақ тілін батырма арқылы ауыстыру
function switchDemoLang(lang, btnElement) {
   const buttons = document.querySelectorAll('.demo-lang-switch .lang-btn');
   buttons.forEach(btn => btn.classList.remove('active'));
   btnElement.classList.add('active');

   document.getElementById('demoVideo').src = demoData[lang].videoUrl;
   document.getElementById('demoPdfBtn').href = demoData[lang].pdfUrl;

   const waNumber = "77786713717";
   const encodedText = encodeURIComponent(demoData[lang].waText);
   document.getElementById('demoWaBtn').href = `https://wa.me/${waNumber}?text=${encodedText}`;
}

// Тариф картасынан таңдағанда формаға өту
function selectTariff(tariffKey) {
   const tariffSelect = document.getElementById('tariffSelect');
   if (tariffSelect) {
      tariffSelect.value = tariffKey;
   }
}

// DOM Жүктелгенде орындалатын логика
document.addEventListener('DOMContentLoaded', () => {
   // 1. Сақталған тілді орнату
   const savedLang = localStorage.getItem('selectedLang') || 'kk';
   changeLanguage(savedLang);

   // Header-дегі тіл ауыстыру батырмалары
   const langButtons = document.querySelectorAll('.lang-switch .lang-btn');
   langButtons.forEach(button => {
      button.addEventListener('click', () => {
         const selectedLang = button.getAttribute('data-lang');
         changeLanguage(selectedLang);
      });
   });

   // 2. WhatsApp батырмасымен форма жіберу
   const whatsappBtn = document.getElementById('whatsappBtn');
   const langSelect = document.getElementById('languageSelect');
   const tariffSelect = document.getElementById('tariffSelect');

   if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function () {
         const phoneNumber = "77786713717";
         const selectedLang = langSelect.value;
         const selectedTariff = tariffSelect.value;

         const textMessage = messages[selectedLang][selectedTariff];
         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

         window.open(whatsappUrl, '_blank');
      });
   }
});