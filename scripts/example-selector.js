const exampleSelector = document.querySelector("#example-selector");

export function createExampleOption(exampleCount){
    exampleSelector.innerHTML = '';
    for(let i = 1; i<=exampleCount; i++){
        const option = document.createElement("option");
        option.value = `example-${i}`;
        option.innerText = `Example - ${i}`;
        exampleSelector.add(option)
    }
}
