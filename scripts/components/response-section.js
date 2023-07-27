export const create_response_section = () => {
    const quesCardDiv = document.createElement("div");
    quesCardDiv.classList.add("ques-card-cnt");

    const h3 = document.createElement("h3");
    h3.classList.add("my-2");
    h3.innerText = "Model Comparision";

    const modelCmpDiv = document.createElement("div");
    modelCmpDiv.classList.add("model-comp-cnt")
    
    return {quesCardDiv, h3, modelCmpDiv}
}
