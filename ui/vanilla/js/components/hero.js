function Hero(){
    const container = document.createElement('div');
    const heading = document.createElement('h2');
    const content = document.createElement('p');

    heading.textContent = 'Dummy';
    content.textContent = 'This is a tagline';

    const hero_content = [heading, content];
    container.append(...hero_content);
    return container;
};

exports.Hero = Hero();