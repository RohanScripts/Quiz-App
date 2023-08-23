const questions = [
  {
    que: "which of the following is a markup language ?",
    a: "HTML",
    b: "CSS",
    c: "JAVASCRIPT",
    d: "BOOTSTRAP",
    correct: "a",
  },
  {
    que: "which of the following is a scripting language ?",
    a: "HTML",
    b: "CSS",
    c: "JAVASCRIPT",
    d: "BOOTSTRAP",
    correct: "c",
  },
  {
    que: "What is the smallest header in HTML?",
    a: "H1",
    b: "H2",
    c: "H6",
    d: "H4",
    correct: "c",
  },
  {
    que: "A queue follows _________.",
    a: "LIFO principle",
    b: "FIFO principle",
    c: "Linear tree",
    d: "Ordered array",
    correct: "b",
  },
  {
    que: "How can we select an element with a specific ID in CSS?",
    a: "#",
    b: ".",
    c: "*",
    d: "None of the above",
    correct: "a",
  },
  {
    que: "which of the following tag is used to include external css code inside your html document.",
    a: "link",
    b: "href",
    c: "src",
    d: "rel",
    correct: "a",
  },
  {
    que: "Which of the following is not attribute in HTML?",
    a: "src",
    b: "link",
    c: "rel",
    d: "id",
    correct: "id",
  },
  {
    que: "Can a C program be compiled and executed in the absence of a main()?",
    a: "yes",
    b: "no",
    c: "none of the above",
    d: "all of the above",
    correct: "b",
  },
  {
    que: "What is %c in C language?",
    a: "It is a datatype format specifier used to print and scan an integer value",
    b: "It is a datatype format specifier used to print and scan a string.",
    c: "It is a datatype format specifier used to display and scan a character value",
    d: "It is a datatype format specifier used to display and scan a float value.",
    correct: "c",
  },
  {
    que: "Which of the following is the location of a resource on internet? ",
    a: "IP",
    b: "EMAIL",
    c: "PROTOCOL",
    d: "URL",
    correct: "d",
  },
  {
    que: "Which data structure is used in hierarchical model records?",
    a: "Graph",
    b: "Tree",
    c: "Queue",
    d: "Stack",
    correct: "b",
  },
  {
    que: "Using update without the WHERE clause will",
    a: "Result in syntax error ",
    b: "Update all the records in a table",
    c: "Update the first record only",
    d: "Not updating any record",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  queBox.innerText = ` (${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h2> quiz is completed </h2>
        <h3> your score is ${right} / ${total} </h3>
    </div>
    `;
};

loadQuestion();
