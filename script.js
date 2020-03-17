// 获取节点
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// 游戏单词
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving"
];

// 初始单词（随机）
let randomWord;

// 初始得分
let score = 0;

// 初始时间
let time = 10;

// 设置随机产生单词
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
// console.log(getRandomWord());

// 更新单词到DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// 更新得分
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

addWordToDOM();

// 设置text的事件监听
text.addEventListener("input", e => {
  const insertedText = e.target.value;
  //   console.log(insertedText);

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // 清空输入框
    e.target.value = "";
  }
});
