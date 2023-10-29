function Footer(){
    const container = document.createElement('footer');
    const content = document.createElement('p');
    content.textContent = 'This is a paragraph.';
    container.appendChild(content);
    return container;
}

exports.Footer = Footer();