function TextBox(){
    //Create components
    const aboutDiv = document.createElement('div');
    const heading = document.createElement('h2');
    const homeIcon = document.createElement('i');
    const subheading = document.createElement('span');
    const content = document.createElement('p');
    const linebreak = document.createElement('br');
    const libr = document.createElement('br');

    //Add icon styling
    homeIcon.classList.add('icon:home');
    homeIcon.classList.add('icon:red-500');
    homeIcon.classList.add('::md');

    //Add content
    heading.textContent = 'Hello';
    subheading.textContent = 'This is your first UI element';
    content.textContent = 'This is the first UI element for berilliumUI: a new package included in berilliumCSS!';
    
    //append to container
    const page_content = [heading, homeIcon, linebreak, subheading, libr,  content];
    aboutDiv.append(...page_content);


    //Apply Container stylings
    aboutDiv.classList.add('back');
    //Return container
    return aboutDiv;
}


exports.TextBox = TextBox();