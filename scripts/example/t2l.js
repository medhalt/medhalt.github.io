import { generate_response_section } from "../components/a2l_t2l.js";
import { createExampleOption } from "../example-selector.js";

const T2L = () => {
    const t2l = document.querySelector("#t2l");
    const t2lResponse = t2l.querySelector(".response");
    let t2lData = null;

    const reset = () => {
        t2lResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {

        if(!t2lData){
            const res = await fetch(`../data/t2l/example.json`);
            t2lData = await res.json();
        }

        updateExampleSelector && createExampleOption(Object.keys(t2lData).length);

        const data = t2lData[example]
        const testbedData = data.testbed_data;
        
        const title = testbedData.Title;
        const url = testbedData.url;
        const isPaperExist = testbedData.is_paper_exists
        const gpt_output = data.gpt_output;

        generate_response_section(t2lResponse, title, url, isPaperExist, gpt_output)

    }

    return {reset, loadExample}
}

export const t2lExampleObj = T2L();
