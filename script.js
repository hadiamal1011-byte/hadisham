// ======================================
// Для Хадишки ❤️
// script.js
// Часть 1
// ======================================

// ---------------------
// Язык
// ---------------------

let language = "ru";

// ---------------------
// Ответы
// ---------------------

const answers = {
    food: "",
    transport: "",
    payment: "",
    love: 100
};

// ---------------------
// Текущий экран
// ---------------------

let currentScreen = 1;

// ---------------------
// Элементы
// ---------------------

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const buttons = document.getElementById("buttons");

const ruBtn = document.getElementById("ruBtn");
const kzBtn = document.getElementById("kzBtn");

// ---------------------
// Тексты
// ---------------------

const text = {

ru:{

screen1:{

title:"Хадишка,",

subtitle:"Ты пойдёшь со мной на свидание? ❤️",

yes:"Да! 💖",

no:"Нет 🙈"

},

screen2:{

title:"Отлично! 🥳",

subtitle:"А чем будем радовать вкусовые рецепторы? 🍕🍔🥂"

},

screen3:{

title:"Как поедем? 🚕",

subtitle:"Выбирай, как тебе комфортнее ✨"

},

screen4:{

title:"Важный момент 🤔",

subtitle:"А кто платит? 👉👈"

},

screen5:{

title:"И последний вопрос 🥹",

subtitle:"Насколько сильно ты ждёшь нашу встречу?"

},

screen6:{

title:"Урааа! 🎉",

subtitle:"Жду не дождусь.<br>Дата и время за мной.<br><br>❤️❤️❤️"

}

},

kz:{

screen1:{

title:"Хадишка,",

subtitle:"Менімен кездесуге шығасың ба? ❤️",

yes:"Иә! 💖",

no:"Жоқ 🙈"

},

screen2:{

title:"Керемет! 🥳",

subtitle:"Не жейміз? 🍕🍔🥂"

},

screen3:{

title:"Қалай барамыз? 🚕",

subtitle:"Өзіңе ыңғайлысын таңда ✨"

},

screen4:{

title:"Маңызды сұрақ 🤔",

subtitle:"Кім төлейді? 👉👈"

},

screen5:{

title:"Соңғы сұрақ 🥹",

subtitle:"Кездесуді қаншалықты күтесің?"

},

screen6:{

title:"Урааа! 🎉",

subtitle:"Күтіп жүрмін.<br>Күні мен уақыты менде ❤️"

}

}

};

// ---------------------
// Переключение языка
// ---------------------

ruBtn.onclick = () => {

language = "ru";

ruBtn.classList.add("active");
kzBtn.classList.remove("active");

updateScreen();

};

kzBtn.onclick = () => {

language = "kz";

kzBtn.classList.add("active");
ruBtn.classList.remove("active");

updateScreen();

};

// ---------------------
// Обновление экрана
// ---------------------

function updateScreen(){

const page =
text[language]["screen"+currentScreen];

title.innerHTML = page.title;

subtitle.innerHTML = page.subtitle;

}

// ---------------------
// Первый запуск
// ---------------------

updateScreen();
// ======================================
// ЧАСТЬ 2
// Первый экран
// ======================================

// Кнопки
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Тексты убегающей кнопки

const noRu = [
"🥺 Ты уверена?",
"💕 Подумай ещё",
"❤️ Ну пожалуйста",
"🥹 Я обещаю хороший вечер",
"🌹 Хотя бы один шанс",
"🙈 Не туда нажала",
"😏 Попробуй ещё раз",
"💖 Всё равно соглашусь"
];

const noKz = [
"🥺 Сенімдісің бе?",
"💕 Тағы ойланшы",
"❤️ Өтінемін",
"🥹 Бір мүмкіндік берші",
"🌹 Жақсы кеш болады",
"🙈 Басқа батырманы бас",
"😏 Тағы бір рет",
"💖 Келісесің ғой"
];

let noIndex = 0;

// -------------------------
// Убегающая кнопка
// -------------------------

function moveNoButton(){

    const card = document.getElementById("card");

    const maxX =
        card.clientWidth -
        noBtn.offsetWidth -
        30;

    const maxY =
        card.clientHeight -
        noBtn.offsetHeight -
        30;

    noBtn.style.position = "absolute";

    noBtn.style.left =
        Math.random()*maxX + "px";

    noBtn.style.top =
        Math.random()*maxY + "px";

    if(language==="ru"){

        noBtn.innerHTML =
        noRu[
            noIndex %
            noRu.length
        ];

    }else{

        noBtn.innerHTML =
        noKz[
            noIndex %
            noKz.length
        ];

    }

    noIndex++;

}

// -------------------------
// Да
// -------------------------

yesBtn.addEventListener("click",()=>{

    currentScreen = 2;

    renderFood();

});

// -------------------------
// Нет
// -------------------------

noBtn.addEventListener("click",moveNoButton);

// ======================================
// Выбор еды
// ======================================

function renderFood(){

title.innerHTML =
text[language].screen2.title;

subtitle.innerHTML =
text[language].screen2.subtitle;

buttons.innerHTML = "";

const foods = [

"🍣 Суши",

"🍔 Бургер",

"🍜 Рамен",

"🤍 На твой вкус"

];

foods.forEach(food=>{

const btn =
document.createElement("button");

btn.className="choice";

btn.innerHTML=food;

btn.onclick=()=>{

answers.food=food;

currentScreen=3;

renderTransport();

};

buttons.appendChild(btn);

});

}
// ======================================
// ЧАСТЬ 3
// Экран "Как поедем?"
// ======================================

const taxiRu = [
"🚕 Такси уехало 😅",
"🚖 Машин нет",
"🚦 Пробки...",
"🙈 Попробуй другое",
"😂 Не этот вариант"
];

const taxiKz = [
"🚕 Такси кетіп қалды 😅",
"🚖 Бос көлік жоқ",
"🚦 Кептеліс",
"🙈 Басқасын таңда",
"😂 Бұл емес"
];

const selfRu = [
"🚗 Машина на мойке 😂",
"⛽ Бензин закончился",
"🙈 Не угадала",
"😅 Почти",
"🤭 Попробуй ещё"
];

const selfKz = [
"🚗 Көлік жуылып жатыр",
"⛽ Бензин жоқ",
"🙈 Қате",
"😅 Аз қалды",
"🤭 Тағы көр"
];

let taxiIndex = 0;
let selfIndex = 0;

// --------------------
// Экран транспорта
// --------------------

function renderTransport(){

    title.innerHTML =
        text[language].screen3.title;

    subtitle.innerHTML =
        text[language].screen3.subtitle;

    buttons.innerHTML = "";

    const transport = [

        language=="ru"
        ? "🚕 Закажешь Комфорт+"
        : "🚕 Comfort+ шақырасың",

        language=="ru"
        ? "🚗 Заберёшь меня сам"
        : "🚗 Өзің алып кетесің",

        language=="ru"
        ? "💐 Пойдём пешком за ручку"
        : "💐 Қол ұстасып жаяу барамыз"

    ];

    transport.forEach((item,index)=>{

        const btn =
        document.createElement("button");

        btn.className="choice";

        btn.innerHTML=item;

        if(index===0){

            btn.onclick=()=>moveTaxi(btn);

        }

        else if(index===1){

            btn.onclick=()=>moveSelf(btn);

        }

        else{

            btn.onclick=walkSuccess;

        }

        buttons.appendChild(btn);

    });

}

// --------------------
// Убегает такси
// --------------------

function moveTaxi(btn){

    const card =
    document.getElementById("card");

    btn.style.position="absolute";

    btn.style.left=
    Math.random()*
    (card.clientWidth-220)+"px";

    btn.style.top=
    (170+
    Math.random()*180)+"px";

    if(language=="ru"){

        btn.innerHTML=
        taxiRu[
        taxiIndex%
        taxiRu.length
        ];

    }else{

        btn.innerHTML=
        taxiKz[
        taxiIndex%
        taxiKz.length
        ];

    }

    taxiIndex++;

}

// --------------------
// Убегает "Сам"
// --------------------

function moveSelf(btn){

    const card =
    document.getElementById("card");

    btn.style.position="absolute";

    btn.style.left=
    Math.random()*
    (card.clientWidth-220)+"px";

    btn.style.top=
    (170+
    Math.random()*180)+"px";

    if(language=="ru"){

        btn.innerHTML=
        selfRu[
        selfIndex%
        selfRu.length
        ];

    }else{

        btn.innerHTML=
        selfKz[
        selfIndex%
        selfKz.length
        ];

    }

    selfIndex++;

}

// --------------------
// Пешком 💐
// --------------------

function walkSuccess(){

    answers.transport =
    language=="ru"
    ? "💐 Пешком за ручку"
    : "💐 Қол ұстасып жаяу";

    const btn =
    event.target;

    btn.classList.add("glow");

    createHearts();

    createSparkles();

    setTimeout(()=>{

        currentScreen=4;

        renderPayment();

    },900);

}
// ======================================
// ЧАСТЬ 4
// Экран "Кто платит?"
// ======================================

const payRu = [
    "🤭 Размечтался!",
    "😼 Даже не надейся",
    "😂 Хорошая попытка",
    "🙈 Не-а",
    "💸 Кошелёк отдыхает",
    "🥹 Попробуй другую кнопку"
];

const payKz = [
    "🤭 Армандап кетіпсің",
    "😼 Үміттенбе",
    "😂 Жақсы әрекет",
    "🙈 Жоқ",
    "💸 Әмиян демалып жатыр",
    "🥹 Басқа батырманы бас"
];

let payIndex = 0;

// ======================================
// Экран оплаты
// ======================================

function renderPayment(){

    title.innerHTML = text[language].screen4.title;
    subtitle.innerHTML = text[language].screen4.subtitle;

    buttons.innerHTML = "";

    const pay1 = document.createElement("button");
    pay1.className = "choice";
    pay1.innerHTML = language=="ru"
        ? "💸 Ну да, я..."
        : "💸 Мен...";

    const pay2 = document.createElement("button");
    pay2.className = "choice";
    pay2.innerHTML = language=="ru"
        ? "😙 Конечно, ты, ты же пригласил!"
        : "😙 Әрине сен!";

    pay1.onclick = ()=>movePay(pay1);
    pay2.onclick = paySuccess;

    buttons.appendChild(pay1);
    buttons.appendChild(pay2);

}

// ======================================
// Убегающая кнопка
// ======================================

function movePay(btn){

    const card = document.getElementById("card");

    btn.style.position = "absolute";

    btn.style.left =
        Math.random()*(card.clientWidth-220)+"px";

    btn.style.top =
        (170+Math.random()*180)+"px";

    if(language=="ru"){

        btn.innerHTML =
            payRu[
                payIndex %
                payRu.length
            ];

    }else{

        btn.innerHTML =
            payKz[
                payIndex %
                payKz.length
            ];

    }

    payIndex++;

}

// ======================================
// Правильный ответ
// ======================================

function paySuccess(){

    answers.payment =
        language=="ru"
        ? "💳 Платишь ты 😙"
        : "💳 Сен төлейсің 😙";

    const btn = event.target;

    btn.classList.add("glow");

    createHearts();
    createSparkles();

    setTimeout(()=>{

        currentScreen = 5;

        renderLove();

    },900);

}

// ======================================
// Ползунок любви ❤️
// ======================================

function renderLove(){

    title.innerHTML = text[language].screen5.title;
    subtitle.innerHTML = text[language].screen5.subtitle;

    buttons.innerHTML = `

<div class="rangeValue" id="lovePercent">
100%
</div>

<div style="
display:flex;
justify-content:space-between;
color:#ff4f9b;
font-weight:600;
margin-bottom:8px;
">

<span>0%</span>
<span>100%</span>

</div>

<input
id="loveSlider"
type="range"
min="0"
max="100"
value="100"
>

<p id="loveText"
style="
text-align:center;
margin:20px 0;
font-size:18px;
font-weight:600;
color:#ff4f9b;
">

Вот это по-нашему! 💗

</p>

<button
class="btn pink"
id="finishBtn">

Подытожим! 🎀

</button>

`;

    const slider =
    document.getElementById("loveSlider");

    const percent =
    document.getElementById("lovePercent");

    slider.oninput = function(){

        answers.love = this.value;

        percent.innerHTML =
        this.value + "%";

        createHearts(2);

    };

    document
    .getElementById("finishBtn")
    .onclick = finishScreen;

}
// ======================================
// ЧАСТЬ 5
// Финальный экран
// ======================================

function finishScreen(){

    title.innerHTML =
        text[language].screen6.title;

    subtitle.innerHTML =
        text[language].screen6.subtitle;

    buttons.innerHTML = `

    <div class="plan">

        <h2>📋 План утверждён</h2>

        <p>${answers.food}</p>

        <p>${answers.transport}</p>

        <p>${answers.payment}</p>

        <p>❤️ Ждём встречу на ${answers.love}%</p>

    </div>

    `;

    createHearts(35);
    createSparkles(40);
    createConfetti();

}

// ======================================
// ❤️ Сердечки
// ======================================

function createHearts(count = 15){

    const container =
        document.querySelector(".hearts");

    if(!container) return;

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ];

    for(let i=0;i<count;i++){

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random()*hearts.length)];

        heart.style.left =
            Math.random()*100 + "vw";

        heart.style.fontSize =
            (18+Math.random()*18)+"px";

        heart.style.animationDuration =
            (3+Math.random()*2)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}

// ======================================
// ✨ Блёстки
// ======================================

function createSparkles(count = 20){

    const container =
        document.querySelector(".sparkles");

    if(!container) return;

    for(let i=0;i<count;i++){

        const spark =
            document.createElement("div");

        spark.className = "sparkle";

        spark.style.left =
            Math.random()*100+"%";

        spark.style.top =
            Math.random()*100+"%";

        container.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },1200);

    }

}

// ======================================
// 🎊 Конфетти
// ======================================

function createConfetti(){

    for(let i=0;i<40;i++){

        const c =
            document.createElement("div");

        c.style.position = "fixed";
        c.style.left = Math.random()*100+"vw";
        c.style.top = "-20px";
        c.style.width = "10px";
        c.style.height = "10px";
        c.style.borderRadius = "50%";

        const colors = [
            "#ff5ea8",
            "#d67dff",
            "#ffd54f",
            "#7ed6ff",
            "#8cffb5"
        ];

        c.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        c.style.transition =
            "4s linear";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.style.transform =
                "translateY(110vh) rotate(720deg)";

        },30);

        setTimeout(()=>{

            c.remove();

        },4200);

    }

}

// ======================================
// 🐱 Анимация котика
// ======================================

const cat =
    document.getElementById("catImg");

if(cat){

    setInterval(()=>{

        cat.style.transform =
            "scale(1.05)";

        setTimeout(()=>{

            cat.style.transform =
                "scale(1)";

        },250);

    },3000);

}

// ======================================
// ❤️ Постоянные сердечки
// ======================================

setInterval(()=>{

    createHearts(2);

},1000);