const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로"
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇"
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
        author: "앙드레 말로"
    },
    {
        quote: "행복은 습관이다, 그것을 몸에 지니라",
        author: "허버드"
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다",
        author: "괴테"
    },
    {
        quote: "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다",
        author: "톨스토이"
    },
    {
        quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
        author: "마크 트웨인"
    },
    {
        quote: "만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은 진실로 가난한 사람이다",
        author: "솔론"
    },
    {
        quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라",
        author: "호라티우스"
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈"
    },
    {
        quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자",
        author: "헨리포드"
    },
    {
        quote: "",
        author: ""
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayOffset = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[todayOffset];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;