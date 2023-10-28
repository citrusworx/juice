async function homeIcon(){
    const iconContainer = document.createElement('span');
    iconContainer.classList.add('icon:blue');
    const iconParent = document.getElementById('demo');

    const data = await fetch('../../icons/material/home.svg');
    const svg = await data.text();
    iconContainer.innerHTML = svg;
    iconParent.appendChild(iconContainer);
};

homeIcon();