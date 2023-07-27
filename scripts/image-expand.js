const IMG_DATA = {
    "home-1": {
        "src": "./assets/images/home.png",
        "width": "50%",
        "description": "Med-HALT: A new benchmark dataset for LLM to test Hallucination in Medical Domain"
    },
    "home-2": {
        "src": "./assets/images/home-2.png",
        "width": "50%",
        "description": "Example of Hallucination Of GPT-3.5"
    },
    "sub-plot": {
        "src": "./assets/images/subplot.png",
        "width": "90%",
        "description": "Distribution of subjects count per exam & Cumulative Frequency Graph in the union of exams in Med-HALT dataset"
    }
}

const imgModel = document.querySelector(".img-model.model");
const backdrop = imgModel.querySelector(".backdrop");
const closeBtn = imgModel.querySelector(".model-close-btn")
const imgCnt = imgModel.querySelector(".img-cnt");
const descriptionElem = imgModel.querySelector(".img-desc")

const expandImg = document.querySelectorAll(".expand-img");

function closeModel(e){
    document.querySelector("html").style.overflowY = "auto";
    imgModel.classList.add("none");
}

closeBtn.addEventListener("click", closeModel, false);
backdrop.addEventListener("click", closeModel, false);
imgCnt.addEventListener("click", closeModel, false);

expandImg.forEach(img => {
    img.addEventListener("click", (e) => {
        document.querySelector("html").style.overflowY = "hidden";
        imgModel.style.top = `${document.querySelector("html").scrollTop}px`;
        // document.querySelector("html").scrollTo({top:0});
        imgModel.classList.remove("none");
        const imgData = IMG_DATA[e.target.dataset.name];
        if(!imgData) {
            closeModel();
            return;
        }
        imgCnt.innerHTML = `<img src="${imgData.src}" alt="" width="${imgData.width}" onclick="event.stopPropagation()" />`
        descriptionElem.innerText = imgData.description;
    });
})




