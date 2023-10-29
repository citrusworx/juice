function TextBox(){
    const aboutDiv = document.createElement('div');
    const heading = document.createElement('h2');
    const subheading = document.createElement('span');
    const content = document.createElement('p');

    heading.textContent = 'Hello';
    subheading.textContent = 'This is your first UI element';
    content.textContent = 'This is the first UI element for berilliumUI: a new package included in berilliumCSS!';
    
    const page_content = [heading, subheading, content];
    aboutDiv.append(...page_content);
    return aboutDiv;
}


exports.TextBox = TextBox();