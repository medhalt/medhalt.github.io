export function initAccordion(){
    const rhtContainer = document.querySelector('.rht-accordion-container');
    const mhtContainer = document.querySelector('.mht-accordion-container');
    
    new Accordion([rhtContainer, mhtContainer], {
        showMultiple: true,
        openOnInit: [0]
    });
}


