import { generate_response_section } from "../components/t2l.js";

const T2L = () => {
    const t2l = document.querySelector("#t2l");
    const t2lResponse = t2l.querySelector(".response");

    const reset = () => {
        t2lResponse.innerHTML = '';
    }

    const loadExample = async (file_name) => {

        const res = await fetch(`../data/t2l/${file_name}.json`);
        const data = await res.json();
        
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
