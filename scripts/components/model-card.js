import { create_response_section } from "./response-section.js";

const response_question_card = (question, options, correctAnswer) => {
    const optionStr = options.map((option, idx) => {
        return `<div class="option ${option === correctAnswer ? 'crt-ans' : 'wrong-ans'}">${String.fromCharCode(65 + idx)}) ${option}</div>`
    }).join('');
    return (`
    <div class="card">
        <div class="card-header">
            <h4>Question & Options</h4>
        </div>
        <div class="card-body">
        <div>
            <h5>Question</h5>
            <p class="ml-2">${question}</p>
        </div>
        <div>
            <h5>Options</h5>
            <div class="options">
                ${optionStr}
            </div>
        </div>
        </div>
    </div>
    `)
}

const response_model_cmp_card = (model_name, answer, isCrtAnswer, explanation) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = (`
        <div class="card-header">
            <h4>${model_name}</h4>
        </div>
        <div class="card-body">
        <div>
            <h5>Answer</h5>
            <p class="ml-2">${answer}</p>
        </div>
        ${isCrtAnswer ?
            `<div>
                <h5>Is Answer Correct</h5>
                <p class="ml-2">${isCrtAnswer}</p>
            </div>` :
            ''
        }
        <div>
            <h5>Explanation</h5>
            <p class="ml-2">${explanation}</p>
        </div>
        </div>
    `)
    return cardDiv;
}

export const generate_response_section = (parentElem, question, options, correctAnswer, modelOutput) => {
    const { quesCardDiv, h3, modelCmpDiv } = create_response_section();

    quesCardDiv.innerHTML = response_question_card(question, options, correctAnswer);

    h3.innerText = "Model Comparision";

    modelOutput.forEach(output => {
        modelCmpDiv.appendChild(response_model_cmp_card(output.model_name, output.correct_answer || output.cop, output.is_answer_correct, output.why_correct))
    });

    parentElem.appendChild(quesCardDiv);
    parentElem.appendChild(h3);
    parentElem.appendChild(modelCmpDiv);
}
