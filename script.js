const questions = [
{question: "People can obtain information _____ an article.",options: ["at", "from", "on", "with"], answer: "B"},
{question: "The meeting will be held _____ Monday.",options: ["in", "at", "on", "by"],answer: "C"},
{question: "She _____ to work every day.",options: ["go", "goes", "going", "gone"],answer: "B"},
{question: "Please submit the report _____ Friday.",options: ["at", "on", "by", "in"],answer: "C"},
{question: "The manager is _____ a meeting now.",options: ["attend", "attended", "attending", "attendance"],answer: "C"}
];


const quiz = document.getElementById("quiz");questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");questionDiv.innerHTML = `
        <h2>Câu ${index + 1}</h2>
        <p>${q.question}</p>
        <label><input type="radio" name="question${index}" value="A">A. ${q.options[0]}</label><br>
        <label><input type="radio" name="question${index}" value="B">B. ${q.options[1]}</label><br>
        <label><input type="radio" name="question${index}" value="C">C. ${q.options[2]}</label><br>
        <label><input type="radio" name="question${index}" value="D">D. ${q.options[3]}</label><hr>
    `;
    quiz.appendChild(questionDiv);
});


function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );
        if (selected && selected.value === q.answer) {
            score++;
        }
    });

    document.getElementById("result").textContent =
        `Bạn đúng ${score}/${questions.length} câu.`;
}
