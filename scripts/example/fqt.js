import { generate_response_section } from "../components/model-card.js";
import { createExampleOption } from "../example-selector.js";

const Fqt = () => {
    const fqt = document.querySelector("#fqt");
    const fqtResponse = fqt.querySelector(".response");
    let fqtData = null;

    const reset = () => {
        fqtResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {

        if(!fqtData){
            const res = await fetch(`../data/fqt/example.json`);
            fqtData = await res.json();
        }
        
        updateExampleSelector && createExampleOption(Object.keys(fqtData).length);

        const data = fqtData[example];
        
        const testbedData = data.testbed_data;
        
        const question = testbedData.question;
        const options = Object.values(testbedData.options);
        const crtAnswer = testbedData.correct_answer;
        const gpt_output = data.gpt_output;

        generate_response_section(fqtResponse, question, options, crtAnswer, gpt_output)

    }

    return {reset, loadExample}
}

export const fqtExampleObj = Fqt();
