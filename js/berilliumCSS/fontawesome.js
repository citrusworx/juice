// This document serves to create functions that ensure the naming convention of our icons
// 
//  This needs to work within our Custom Element bounds as well.
//          TODO: Look into custom attributes for custom elements


function gg(){
    const elements = document.querySelectorAll('[class *= "fas br gg"]');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/gg.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/gg.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    }

function gg_circle(){
    const elements = document.querySelectorAll('[class *= "fas brand gg circle"]');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/gg_circle.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/gg_circle.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    }    

function git_alt(){
    const elements = document.querySelectorAll('[class *= "fas brand git alt"]');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/git-alt.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/git-alt.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    }

function git(){
    const elements = document.querySelectorAll('[class *= "fas brand git"]');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/git.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/git.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    }    

function github_alt(){
    const elements = document.querySelectorAll('[class *= "fas br github alt"]');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/github_alt.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/github_alt.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    } 

function reddit_alien(){
    const elements = document.querySelectorAll('fas br reddit alien');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/reddit-alien.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/reddit-alien.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    }
    
function reddit(){
    const elements = document.querySelectorAll('fas br reddit');
        
        elements.forEach(element => {
            element.style.webkitMaskImage = 'url(\'../../../icons/material/reddit.svg\')';
            element.style.webkitMaskSize = 'contain';
            element.style.webkitMaskRepeat = 'no-repeat';
            element.style.maskImage = 'url(\'../../../icons/material/reddit.svg\')';
            element.style.maskSize = 'contain';
            element.style.maskRepeat = 'no-repeat';
        });
    }    

// Call Icons
// git_alt();
// git();
 gg();
 gg_circle();
// github_alt();
// reddit();
// reddit_alien();