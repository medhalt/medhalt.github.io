import { generate_response_section } from "../components/model-card.js";
import { createExampleOption } from "../example-selector.js";

const Fct = () => {
    const fct = document.querySelector("#fct");
    const fctResponse = fct.querySelector(".response");
    let fctData = null;

    const reset = () => {
        fctResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {
        // console.log(example, updateExampleSelector)
        if(!fctData){
            const res = await fetch(`../data/fct/example.json`);
            fctData = await res.json();
        }

        updateExampleSelector && createExampleOption(Object.keys(fctData).length);

        const data = fctData[example];
        
        const testbedData = data.testbed_data;
        
        const question = testbedData.question;
        const options = Object.values(testbedData.options).filter((_, idx) => idx < 4);
        const crtAnswer = testbedData.correct_answer;
        const gpt_output = data.gpt_output;

        generate_response_section(fctResponse, question, options, crtAnswer, gpt_output)

    }

    return {reset, loadExample}
}

export const fctExampleObj = Fct();
