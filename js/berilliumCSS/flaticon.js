function idea_animated(){
    const elements = document.querySelectorAll('[class *= "flaticon idea animated"]');
    
    elements.forEach(element => {
        element.style.webkitMaskImage = 'url(\'../../../icons/flaticon/animated/idea.png\')';
        element.style.webkitMaskSize = 'contain';
        element.style.webkitMaskRepeat = 'no-repeat';
        element.style.maskImage = 'url(\'../../../icons/flaticon/animated/idea.png\')';
        element.style.maskSize = 'contain';
        element.style.maskRepeat = 'no-repeat';
        element.style.animation = 'reveal 3s ease-in-out infinite';
    });
}

// Call icons
idea_animated();