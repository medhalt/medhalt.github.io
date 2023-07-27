import { generate_response_section } from "../components/p2t.js";

const P2T = () => {
    const p2t = document.querySelector("#p2t");
    const p2tResponse = p2t.querySelector(".response");

    const reset = () => {
        p2tResponse.innerHTML = '';
    }

    const loadExample = async (file_name) => {

        const res = await fetch(`../data/p2t/${file_name}.json`);
        const data = await res.json();
        console.log(data);
        
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
