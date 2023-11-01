const linkslist = ['Home', 'About', 'Pricing', 'Contact'];

function NavDark(...classes){
    const container = document.createElement('div');
    const navbar = document.createElement('nav');
    navbar.className = classes.join(' ');
    const nav = document.createElement('ul');
    

    //turn into function where we can inject classnames to each list item
    for(let index = 0; index < linkslist.length; index++){
        const listItem = document.createElement('li');
        listItem.classList.add('ml-5');
        listItem.classList.add('list-none');
        listItem.textContent = linkslist[index];
        nav.append(listItem);
    }
    nav.classList.add('flex');
    navbar.appendChild(nav);
    container.appendChild(navbar);

    //Add Styles
    container.classList.add('rel');
    container.classList.add('back');
    container.classList.add('bg-black-700');
    container.classList.add('text-white');
    container.classList.add('ubuntu');

    return container;
}

exports.NavDark = NavDark('flex' ,'center');