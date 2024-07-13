const button = document.getElementById("button");

function hoverColor(color, initialWeight, finalWeight){
    if(button.classList.contains(`${color}-${initialWeight}`)){
        button.classList.add(`${color}-${finalWeight}`);
        button.classList.remove(`${color}-${initialWeight}`);
    }
    else {
        button.classList.add(`${color}-${initialWeight}`);
        button.classList.remove(`${color}-${finalWeight}`);
    }
    if(button.classList.contains("text:white")){
        button.classList.remove('text:white');
        button.classList.add('text:black');
    }
    else {
        button.classList.remove('text:black');
        button.classList.add('text:white');
    }
}

function changePage(destination){
    window.location.href = destination;
}
