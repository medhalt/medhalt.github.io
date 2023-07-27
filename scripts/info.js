function Info(){
    const info = document.querySelector(".task-comp.info");
    
    const showCustom = (message) => {
        info.classList.remove("none");
        console.log("herer", message)
        info.innerText = message;
    }
    
    const showDefault = () => {
        showCustom("Please Select Any Example");
    }

    const showLoading = () => {
        showCustom("Loading.......");
    }

    const hide = () => {
        info.classList.add("none");
    }

    return {showDefault, showLoading, showCustom, hide}
}

export const info = Info();
