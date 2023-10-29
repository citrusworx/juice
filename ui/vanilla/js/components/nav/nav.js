function Nav(){
    const container = document.createElement('div');
    const navbar = document.createElement('nav');
    const navlinks = document.createElement('ul');
    const links = ['Home', 'About', 'Pricing', 'Contact'];
    // Create nav links and applying styling
    for(let index = 0; index < links.length; index++){
        const listItem = document.createElement('li');
        listItem.textContent = links[index];
        listItem.classList.add('ml-5');
        navlinks.append(listItem);
        navbar.append(navlinks);
    }
    
    //Add container stylings
    container.appendChild(navbar);
    navlinks.classList.add('list-none');
    navlinks.classList.add('flex');

    return container;
}

exports.Nav = Nav();