document.addEventListener('DOMContentLoaded', async function() {
    const svgs = ['../../icons/material/material.svg', '../..fontawesome/web/sprites/regular.svg'];

    try {
        for(let index = 0; index < svgs.length; index++){
            const sheet = await fetch(svgs[index]);
            const svg = await sheet.text();
            
            const svgBox = document.createElement('span');
            svgBox.innerHTML = svg;
            
            const body = document.body;
            body.insertBefore(svgBox.firstChild, body.firstChild);
        }
    }

    catch(error){
        console.error("Error in fetching SVG sprite sheet: ", error);
    }
})


function createIcon(id, height, width){
    const iconContainer = document.createElement('span');
    iconContainer.innerHTML = `
        <svg>
            <use xlink:href="#${id}" height="${height}" width="${width}"></use>
        </svg>
        `;
    
    return iconContainer;
};


function useIcon(id, height, width){
    const targetContainer = document.createElement('span');
    const iconElement = createIcon(id, height, width);
    targetContainer.appendChild(iconElement);

    return targetContainer;
}
