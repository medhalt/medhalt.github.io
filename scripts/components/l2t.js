import { create_response_section } from "./response-section.js";

const response_input_data_card = (paperLink, paperTitle, isPaperExist) => {

    return (`
    <div class="card">
        <div class="card-header">
            <h4>Input Data</h4>
        </div>
        <div class="card-body">
        <div>
            <h5>URL</h5>
            <a href=${paperLink} class="ml-2">${paperLink}</a>
        </div>
        <div>
            <h5>Is Paper Exist</h5>
            <div class="options">
                ${isPaperExist}
            </div>
        </div>
        <div>
            <h5>Paper Ttile</h5>
            <div class="options">
                ${paperTitle}
            </div>
        </div>
        </div>
    </div>
    `)
}

const response_model_cmp_card = (model_name, isPaperExist, isCrtAnswer, explanation) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = (`
        <div class="card-header">
            <h4>${model_name}</h4>
        </div>
        <div class="card-body">
        <div>
            <h5>Is Paper Exist</h5>
            <p class="ml-2">${isPaperExist}</p>
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
