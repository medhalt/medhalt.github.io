import { generate_response_section } from "../components/model-card.js";

const Nota = () => {
    const nota = document.querySelector("#nota");
    const notaResponse = nota.querySelector(".response");

    const reset = () => {
        notaResponse.innerHTML = '';
    }

    const loadExample = async (file_name) => {

        const res = await fetch(`../data/nota/${file_name}.json`);
        const data = await res.json();
        
        const testbedData = data.testbed_data;
        
        const question = testbedData.question;
        const options = Object.values(testbedData.options).filter((_, idx) => idx < 4);
        const crtAnswer = testbedData.correct_answer;
        const gpt_output = data.gpt_output;

        generate_response_section(notaResponse, question, options, crtAnswer, gpt_output)

    }

    return {reset, loadExample}
}

export const notaExampleObj = Nota();
