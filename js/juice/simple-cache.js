//          ORIGINAL BASE CODE 
// 
// document.addEventListener('DOMContentLoaded', ()=>{

//     const stylesheetUrl = '/css/berillium.css';
//     localStorage.setItem('styles', stylesheetUrl);
//     const getStyles = localStorage.getItem('styles');
//     const linkRel = document.createElement('link');
//     linkRel.setAttribute('href', getStyles);
//     linkRel.setAttribute('rel', 'stylesheet');
//     linkRel.setAttribute('type', 'text/css');
//     document.head.append(linkRel);

// })


document.addEventListener('DOMContentLoaded', () => {
    const stylesheetUrl = '/css/berillium.css';

    // Check if the cached stylesheet URL exists in localStorage
    const cachedStylesheetUrl = localStorage.getItem('styles');

    if (cachedStylesheetUrl === stylesheetUrl) {
        // If the cached URL matches the current URL, the stylesheet is already loaded
        applyStylesheet(stylesheetUrl);
    } else {
        // Load and apply the stylesheet
        loadStylesheet(stylesheetUrl);
    }
});

function loadStylesheet(url) {
    const linkRel = document.createElement('link');
    linkRel.setAttribute('rel', 'stylesheet');
    linkRel.setAttribute('type', 'text/css');
    linkRel.setAttribute('href', url);

    linkRel.onload = () => {
        // After the stylesheet is loaded, apply it and store the URL in localStorage
        applyStylesheet(url);
        localStorage.setItem('styles', url);
    };

    linkRel.onerror = () => {
        // Handle any errors here, e.g., fallback to a default stylesheet
        console.error(`Failed to load stylesheet: ${url}`);
    };

    document.head.append(linkRel);
}

function applyStylesheet(url) {
    const existingStylesheet = document.querySelector(`link[href="${url}"]`);
    if (!existingStylesheet) {
        const linkRel = document.createElement('link');
        linkRel.setAttribute('href', url);
        linkRel.setAttribute('rel', 'stylesheet');
        linkRel.setAttribute('type', 'text/css');
        document.head.append(linkRel);
    }
}
