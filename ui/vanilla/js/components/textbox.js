function TextBox(){
    const aboutDiv = document.createElement('div');
    const heading = document.createElement('h2');
    const subheading = document.createElement('span');
    const content = document.createElement('p');
    const linebreak = document.createElement('br');
    const libr = document.createElement('br');
    heading.textContent = 'Hello';
    subheading.textContent = 'This is your first UI element';
    content.textContent = 'This is the first UI element for berilliumUI: a new package included in berilliumCSS!';
    
    const page_content = [heading, linebreak, subheading, libr,  content];
    console.log(page_content);
    aboutDiv.append(...page_content);
    return aboutDiv;
}


exports.TextBox = TextBox();