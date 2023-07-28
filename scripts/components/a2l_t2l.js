import { checkIc, wrongIc } from "./icons.js";
import { create_response_section } from "./response-section.js";

const response_input_data_card = (paperTitleOrAbstract, isPaperExist, paperUrl, isT2l) => {
    return (`
    <div class="card">
        <div class="card-header">
            <h4>Input Data</h4>
        </div>
        <div class="card-body">
        <div>
            <h5>${isT2l ? 'Title' : 'Abstract'}</h5>
            <p class="ml-2">${paperTitleOrAbstract}</p>
        </div>
        <div>
            <h5>Is Paper Exist</h5>
            <p class="ml-2">${isPaperExist}</p>
        </div>
        <div>
            <h5>Paper URL</h5>
            <p class="ml-2">${paperUrl === "Unknown" || paperUrl === "None" ? paperUrl : `<a href=${paperUrl} target="_blank">${paperUrl}</a>`}</p>
        </div>
        </div>
    </div>
    `)
}

const response_model_cmp_card = (model_name, isPaperExist, isCrtAnswer, paperUrl, isUrlCrt) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = (`
        <div class="card-header">
            <h4>${model_name}</h4>
        </div>
        <div class="card-body">
            <div>
                <h5>Is Paper Exist</h5>
                <p class="ml-2">
                    <span>${isPaperExist}<span>
                    <span class="mx-2 p-1 rounded ${isCrtAnswer? 'crt-ans' : 'wrong-ans'}" title=${isCrtAnswer ? 'Correct Answer' : 'Wrong Answer'}>${isCrtAnswer ?
                        checkIc
                        : 
                        wrongIc
                    }</span>
                </p>
            </div>
            <div>
                <h5>Paper URL</h5>
                <p class="ml-2">
                    <span>${paperUrl === "Unknown" || paperUrl === "None" ? paperUrl : `<a href=${paperUrl} target="_blank">${paperUrl}</a>`}<span>
                    <span class="mx-2 p-1 rounded ${isUrlCrt? 'crt-ans' : 'wrong-ans'}" title=${isUrlCrt ? 'Correct Answer' : 'Wrong Answer'}>${isUrlCrt ?
                        checkIc
                        : 
                        wrongIc
                    }</span>
                </p>
            </div>
        </div>
    `)
    return cardDiv;
}

export const generate_response_section = (parentElem, title, paperUrl, isPaperExist, modelOutput, isT2l = true) => {
    const { quesCardDiv, h3, modelCmpDiv } = create_response_section();

    quesCardDiv.innerHTML = response_input_data_card(title, isPaperExist, paperUrl, isT2l);

    h3.innerText = "Model Comparision";

    modelOutput.forEach(output => {
        modelCmpDiv.appendChild(response_model_cmp_card(output.model_name, output.is_paper_exists, output.is_crt, output.url, output.is_url_crt))
    });

    parentElem.appendChild(quesCardDiv);
    parentElem.appendChild(h3);
    parentElem.appendChild(modelCmpDiv);
}
