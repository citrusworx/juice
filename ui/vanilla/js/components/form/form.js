function OptIn(){
    //Create Form Elements
    const container = document.createElement('div');
    const form = document.createElement('form');
    const name = document.createElement('input');
    const email = document.createElement('input');
    
    //Set Attributes
    name.setAttribute('name', 'name');
    name.setAttribute('type', 'text');
    email.setAttribute('name', 'email');
    email.setAttribute('type', 'email');
    
    //Set Stylings


    //Append to containers
    form.append(name);
    form.append(email);
    container.append(form);
    
    //return form container
    return container;
}