function Hero(){
    //Create page elements
    const container = document.createElement('div');
    const heading = document.createElement('h2');
    const content = document.createElement('p');
    const linebreak = document.createElement('br');

    // Add content
    heading.textContent = 'Dummy';
    content.textContent = 'This is a tagline';

    //Append to parent/container
    const hero_content = [heading, linebreak, content];
    container.append(...hero_content);

    container.classList.add('back');
    //Return main container
    return container;
};

exports.Hero = Hero();