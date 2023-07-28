import { generate_response_section } from "../components/p2t_l2t.js";
import { createExampleOption } from "../example-selector.js";

const P2T = () => {
    const p2t = document.querySelector("#p2t");
    const p2tResponse = p2t.querySelector(".response");
    let p2tData = null;

    const reset = () => {
        p2tResponse.innerHTML = '';
    }

    const loadExample = async (example, updateExampleSelector = false) => {
        if(!p2tData){
            const res = await fetch(`../data/p2t/example.json`);
            const rawData = await res.json();
            p2tData = rawData;
        }
        
        updateExampleSelector && createExampleOption(Object.keys(p2tData).length);
        
        const data = p2tData[example]
        const testbedData = data.testbed_data;
        
        const pmid = testbedData.PMID;
        const title = testbedData.Title;
        const isPaperExist = testbedData.is_paper_exists
        const gpt_output = data.gpt_output;

        generate_response_section(p2tResponse, pmid, title, isPaperExist, gpt_output)

    }

    return {reset, loadExample}
}

export const p2tExampleObj = P2T();
