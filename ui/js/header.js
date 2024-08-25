// Create header element and add the styling classes
// Create a custom component out of that
// then create variations of that component: premade styles and an editable one with certain attributes open

class HeaderContainer extends HTMLElement {
    constructor(){
        super();
    }

// Attributes of the custom element
static get observedAttributes()
{
    return ['desk', 'mob', 'height', 'width', 'color'];
}

connectedCallback(){
        this.render();
}

attributeChangeCallback(name, value){
        if(name === 'class'){
            this.render();
        }
}

render(){
    const headerDesk = this.getAttribute('desk') || '';
    const headerMob = this.getAttribute('mob') || '';
    const headerHeight = this.getAttribute('height') || '';
    const headerWidth = this.getAttribute('width') || '';
    const headerColor = this.getAttribute('color') || '';

    this.innerHTML = `<header class="${headerDesk} mob:${headerMob} ${headerWidth} ${headerHeight} ${headerColor}"></header>`;
}
}

window.customElements.define('header-container', HeaderContainer);