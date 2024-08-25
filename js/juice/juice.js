const swatchLink = document.getElementById('swatch-link');
swatchLink.addEventListener('click', function(event) {
    event.preventDefault();
    const swatchesMenu = document.getElementById('swatches-menu');
    swatchesMenu.classList.toggle('dis:none');
    swatchesMenu.classList.toggle('fade:in::fast');
});


// TODO: Create drop down menus for all links