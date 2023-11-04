class MatIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return 'class';
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
        const iconName = this.getAttribute('class') || '';

        this.innerHTML = `
                <i class="${iconName}"></i>
        `;
        }
    
}

class FlatIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return 'class';
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
        const iconName = this.getAttribute('class') || '';

        this.innerHTML = `
                <i class="${iconName}"></i>
        `;
        }
    
}

class FontAwesomeIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return 'class';
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
        const iconName = this.getAttribute('class') || '';

        this.innerHTML = `
                <i class="${iconName}"></i>
        `;
        }
    
}

customElements.define('mat-icon', MatIcon);
customElements.define('flat-icon', FlatIcon);
customElements.define('fas-icon', FontAwesomeIcon);