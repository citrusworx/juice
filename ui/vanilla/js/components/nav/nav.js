function Nav(){
    const container = document.createElement('div');
    const navbar = document.createElement('nav');
    const navlinks = document.createElement('ul');
    const links = ['Home', 'About', 'Pricing', 'Contact'];
    
    // Create nav links and applying styling
    for(let index = 0; index < links.length; index++){
        const listItem = document.createElement('li');
        //Add text content to li and apply styling
        listItem.textContent = links[index];
        listItem.classList.add('ml-5');
        listItem.classList.add('center');
        //Append list items to list
        navlinks.append(listItem);
        //Append list to navbar
        navbar.append(navlinks);
    }
    
    //Add container stylings
    container.appendChild(navbar);
    //Add navbar stylings
    navbar.classList.add('flex');
    navbar.classList.add('center');
    //Add list stylings (ul)
    navlinks.classList.add('list-none');
    navlinks.classList.add('flex');
    navlinks.classList.add('center');
    navlinks.classList.add('pr-5');

    return container;
}

exports.Nav = Nav();