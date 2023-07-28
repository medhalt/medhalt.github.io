import { generate_response_section } from "../components/a2l_t2l.js";
import { createExampleOption } from "../example-selector.js";

const A2L = () => {
    const a2l = document.querySelector("#a2l");
    const a2lResponse = a2l.querySelector(".response");
    let a2lData = null;

    const reset = () => {
        a2lResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {

        if(!a2lData){
            const res = await fetch(`../data/a2l/example.json`);
            a2lData = await res.json();
        }

        updateExampleSelector && createExampleOption(Object.keys(a2lData).length);

        const data = a2lData[example]
        const testbedData = data.testbed_data;
        
        const title = testbedData.abstract;
        const url = testbedData.url;
        const isPaperExist = testbedData.is_paper_exists
        const gpt_output = data.gpt_output;

        generate_response_section(a2lResponse, title, url, isPaperExist, gpt_output, false)

    }

    return {reset, loadExample}
}

export const a2lExampleObj = A2L();
