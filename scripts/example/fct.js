import { generate_response_section } from "../components/model-card.js";

const Fct = () => {
    const fct = document.querySelector("#fct");
    const fctResponse = fct.querySelector(".response");

    const reset = () => {
        fctResponse.innerHTML = '';
    }

    const loadExample = async (file_name) => {

        const res = await fetch(`../data/fct/${file_name}.json`);
        const data = await res.json();
        
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
