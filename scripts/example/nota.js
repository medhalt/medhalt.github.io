import { generate_response_section } from "../components/model-card.js";
import { createExampleOption } from "../example-selector.js";

const Nota = () => {
    const nota = document.querySelector("#nota");
    const notaResponse = nota.querySelector(".response");
    let notaData = null;

    const reset = () => {
        notaResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {

        if(!notaData){
            const res = await fetch(`../data/nota/example.json`);
            notaData = await res.json();
        }
        
        updateExampleSelector && createExampleOption(Object.keys(notaData).length);

        const data = notaData[example];
        
        const testbedData = data.testbed_data;
        
        const question = testbedData.question;
        const options = Object.values(testbedData.options);
        const crtAnswer = testbedData.correct_answer;
        const gpt_output = data.gpt_output;

        generate_response_section(notaResponse, question, options, crtAnswer, gpt_output)

    }

    return {reset, loadExample}
}

export const notaExampleObj = Nota();
