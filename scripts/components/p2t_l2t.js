import { checkIc, wrongIc } from "./icons.js";
import { create_response_section } from "./response-section.js";

const response_input_data_card = (pmid_or_url, paperTitle, isPaperExist, isP2t) => {

    return (`
    <div class="card">
        <div class="card-header">
            <h4>Input Data</h4>
        </div>
        <div class="card-body">
        <div>
            <h5>${isP2t ? 'PMID' : 'URL'}</h5>
            <p class="ml-2"> ${isP2t ? pmid_or_url : '<a href="' + pmid_or_url + '" target="_blank" >' + pmid_or_url + '</a>'}</p>
        </div>
        <div>
            <h5>Is Paper Exist</h5>
            <p class="ml-2">${isPaperExist}</p>
        </div>
        <div>
            <h5>Paper Ttile</h5>
            <p class="ml-2">${paperTitle}</p>
        </div>
        </div>
    </div>
    `)
}

const response_model_cmp_card = (model_name, isPaperExist, isCrtAnswer, paperTitle, isTitleCrt) => {
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
                <h5>Paper Ttile</h5>
                <p class="ml-2">
                    <span>${paperTitle}<span>
                    <span class="mx-2 p-1 rounded ${isTitleCrt? 'crt-ans' : 'wrong-ans'}" title=${isTitleCrt ? 'Correct Answer' : 'Wrong Answer'}>${isTitleCrt ?
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

export const generate_response_section = (parentElem, pmid, paperTitle, isPaperExist, modelOutput, isP2t = true) => {
    const { quesCardDiv, h3, modelCmpDiv } = create_response_section();

    quesCardDiv.innerHTML = response_input_data_card(pmid, paperTitle, isPaperExist, isP2t);

    h3.innerText = "Model Comparision";

    modelOutput.forEach(output => {
        modelCmpDiv.appendChild(response_model_cmp_card(output.model_name, output.is_paper_exists, output.is_crt, output.paper_title, output.is_title_crt))
    });

    parentElem.appendChild(quesCardDiv);
    parentElem.appendChild(h3);
    parentElem.appendChild(modelCmpDiv);
}
