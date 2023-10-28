document.addEventListener('DOMContentLoaded', async function() {
    const svgUrl = '../../icons/material/material.svg';

    try {
        const data = await fetch(svgUrl);
        const svg = await data.text();

        const svgBox = document.createElement('span');
        svgBox.innerHTML = svg;

        const body = document.body;
        body.insertBefore(svgBox.firstChild, body.firstChild);
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