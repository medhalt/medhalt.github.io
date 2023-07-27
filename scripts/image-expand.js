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
    }
}

const imgModel = document.querySelector(".img-model.model");
console.log(imgModel)
const backdrop = imgModel.querySelector(".backdrop");
const closeBtn = imgModel.querySelector(".model-close-btn")
const imgCnt = imgModel.querySelector(".img-cnt");
const descriptionElem = imgModel.querySelector(".img-desc")

const expandImg = document.querySelectorAll(".expand-img");

function closeModel(e){
    e && e.stopPropagation();
    document.querySelector("html").style.overflowY = "auto";
    imgModel.classList.add("none");
}

closeBtn.addEventListener("click", closeModel)
backdrop.addEventListener("click", closeModel)

expandImg.forEach(img => {
    img.addEventListener("click", (e) => {
        document.querySelector("html").style.overflowY = "hidden";
        document.querySelector("html").scrollTo({top:0});
        imgModel.classList.remove("none");
        const imgData = IMG_DATA[e.target.dataset.name];
        if(!imgData) {
            closeModel();
            return;
        }
        imgCnt.innerHTML = `<img src="${imgData.src}" alt="" width="${imgData.width}" />`
        descriptionElem.innerText = imgData.description;
    });
})




