import { initAccordion } from "./accordion.js";
import { fctExampleObj } from "./example/fct.js";
import { notaExampleObj } from "./example/nota.js";
import { p2tExampleObj } from "./example/p2t.js";
import { t2lExampleObj } from "./example/t2l.js";
import { info } from "./info.js";
import "./image-expand.js"
import { fqtExampleObj } from "./example/fqt.js";
import { l2tExampleObj } from "./example/l2t.js";
import { a2lExampleObj } from "./example/a2l.js";

// initialize accordion
initAccordion();

// handle nav tab change
const taskExampleObj = {
    fct: fctExampleObj,
    nota: notaExampleObj,
    p2t: p2tExampleObj,
    t2l: t2lExampleObj,
    fqt: fqtExampleObj,
    l2t: l2tExampleObj,
    a2l: a2lExampleObj
}

let currTask = 'fct';

async function loadExample(exampleName, taskExampleObj, updateExampleSelector){
    info.showLoading();
    taskExampleObj.reset();
    await taskExampleObj.loadExample(exampleName, updateExampleSelector);
    info.hide();
}


const exampleSelector = document.querySelector("#example-selector");

const navBtns = document.querySelectorAll("#task-tab .nav-item");
navBtns.forEach(btn => {
    btn.addEventListener("click", async (e) => {
        const taskName = e.currentTarget.dataset.task
        
        // if(!taskExampleObj[taskName]) {
        //     info.showCustom("No Example Yet");
        //     return;
        // }
        
        taskExampleObj[currTask].reset();
        currTask = taskName;
        loadExample("example-1", taskExampleObj[currTask], true);
    })
})

exampleSelector.addEventListener("change", async (e) => {
    const value = e.currentTarget.value;
    // console.log(exampleSelector, e.currentTarget)
    exampleSelector.value = value;
    // console.log(value)
    if(value === "nil") {
        info.showDefault();
        taskExampleObj[currTask].reset();
        return;
    }
    loadExample(value, taskExampleObj[currTask], false);
});

// load default example
loadExample("example-1", taskExampleObj.fct, true)
