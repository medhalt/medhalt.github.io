import { generate_response_section } from "../components/p2t_l2t.js";
import { createExampleOption } from "../example-selector.js";

const L2T = () => {
    const l2t = document.querySelector("#l2t");
    const l2tResponse = l2t.querySelector(".response");
    let l2tData = null;

    const reset = () => {
        l2tResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {
        if(!l2tData){
            const res = await fetch(`../data/l2t/example.json`);
            const rawData = await res.json();
            l2tData = rawData;
        }
        
        updateExampleSelector && createExampleOption(Object.keys(l2tData).length);
        
        const data = l2tData[example]
        const testbedData = data.testbed_data;
        
        const pmid = testbedData.url;
        const title = testbedData.Title;
        const isPaperExist = testbedData.is_paper_exists
        const gpt_output = data.gpt_output;

        generate_response_section(l2tResponse, pmid, title, isPaperExist, gpt_output, false)

    }

    return {reset, loadExample}
}

export const l2tExampleObj = L2T();
