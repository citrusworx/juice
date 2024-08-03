const button = document.getElementById("button");
const [heading, text] = document.getElementsByClassName("no-hover");
const homebarButton = document.getElementById("home-icon");
const homebar = document.getElementById("homebar");

function hoverColor(color, initialWeight, finalWeight){
    if(button.classList.contains(`${color}-${initialWeight}`)){
        button.classList.add(`${color}-${finalWeight}`);
        button.classList.remove(`${color}-${initialWeight}`);
    }
    else {
        button.classList.add(`${color}-${initialWeight}`);
        button.classList.remove(`${color}-${finalWeight}`);
    }
}

function changeText(firstFont, secondFont, size){
    if(heading.classList.contains("no-hover")){
        heading.classList.add(`${firstFont}`);
        heading.classList.add(`${size}`);
    }
    if(heading.classList.contains(`${firstFont}`)){
        heading.classList.remove(`${firstFont}`);
        heading.classList.add(`${secondFont}`);
    }
    else {
        heading.classList.remove(`${secondFont}`);
        heading.classList.add(`${firstFont}`);
    }
}

function changePage(destination){
    window.location.href = destination;
}

// EVENTS
// Homebar Button
homebarButton.addEventListener("click", () => {
    // Bring up a modal menu using the modal class
    // This should be a separate component
    
    const modalContainer = document.createElement("div");
    modalContainer.id = "modal";
    modalContainer.classList.add("modal");
    modalContainer.innerHTML = `
        <div class="modal-content">
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
        </div>
    `;
    homebar.appendChild(modalContainer);
    modalContainer.style.top = `${homebar.offsetTop - modalContainer.offsetHeight}px`;
    
});
