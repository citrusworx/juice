// This document serves to create functions that ensure the naming convention of our icons
// 
//  This needs to work within our Custom Element bounds as well.
//          TODO: Look into custom attributes for custom elements


function git(){
    const elements = document.querySelectorAll('[class *= "fas-br git"]');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/git.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/git.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    } 

// Call Icons
