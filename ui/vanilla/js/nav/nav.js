function Nav(){
    const container = document.createElement('div');
    const navbar = document.createElement('nav');
    const navlinks = document.createElement('ul');
    const links = ['Home', 'About', 'Pricing', 'Contact'];
    for(let index = 0; index < links.length; index++){
        const listItem = document.createElement('li');
        listItem.textContent = links[index];
        navlinks.append(listItem);
        navbar.append(navlinks);
    }
    
    container.appendChild(navbar);
    navlinks.classList.add('flex list-none');
    return container;
}

exports.Nav = Nav();