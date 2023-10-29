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


function createIcon(id){
    const iconContainer = document.createElement('span');
    iconContainer.innerHTML = `
        <svg>
            <use xlink:href="#${id}"></use>
        </svg>
        `;

    
    return iconContainer;
};


function useIcon(id){
    const targetContainer = document.createElement('span');
    const iconElement = createIcon(id);
    targetContainer.appendChild(iconElement);
    document.body.appendChild(targetContainer);
}

useIcon('home--solid', 'demo');
useIcon('search--solid', 'demo');
useIcon('menu--solid', 'demo');
useIcon('close--solid', 'demo');