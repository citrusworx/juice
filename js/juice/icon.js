class MatIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return ['lib', 'name', 'color', 'class'];
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
        const iconClass = this.getAttribute('class') || '';
        const iconLib = this.getAttribute('lib') || '';
        const iconName = this.getAttribute('name') || '';
        const iconColor = this.getAttribute('color') || '';

        this.innerHTML = `
                <i class="mat ${iconName} ${iconColor} ${iconClass}"></i>
        `;
        }
}

class FlatIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return ['lib', 'name', 'color', 'class'];
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
        const iconClass = this.getAttribute('class') || '';
        const iconLib = this.getAttribute('lib') || '';
        const iconName = this.getAttribute('name') || '';
        const iconColor = this.getAttribute('color') || '';

        this.innerHTML = `
                <i class="flat ${iconLib} ${iconName} ${iconColor} ${iconClass}"></i>
        `;
        }
    
}

class FontAwesomeIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return ['lib', 'name', 'color', 'class'];
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
        const iconClass = this.getAttribute('class') || '';
        const iconLib = this.getAttribute('lib') || '';
        const iconName = this.getAttribute('name') || '';
        const iconColor = this.getAttribute('color') || '';

        this.innerHTML = `
                <i class="fas-${iconLib} ${iconName} ${iconColor} ${iconClass}"></i>
        `;
        }
    
}

class IconFinder extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return ['lib', 'name', 'color', 'class'];
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
        const iconClass = this.getAttribute('class') || '';
        const iconLib = this.getAttribute('lib') || '';
        const iconName = this.getAttribute('name') || '';
        const iconColor = this.getAttribute('color') || '';

        this.innerHTML = `
                <i class="icon-${iconLib} ${iconName} ${iconColor} ${iconClass}"></i>
        `;
        }
    
}

class IcoNoir extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return ['lib', 'name', 'color', 'class'];
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
        const iconClass = this.getAttribute('class') || '';
        const iconLib = this.getAttribute('lib') || '';
        const iconName = this.getAttribute('name') || '';
        const iconColor = this.getAttribute('color') || '';

        this.innerHTML = `
                <i class="icon-${iconLib} ${iconName} ${iconColor} ${iconClass}"></i>
        `;
        }
    
}

window.customElements.define('mat-icon', MatIcon);
window.customElements.define('flat-icon', FlatIcon);
window.customElements.define('fas-icon', FontAwesomeIcon);
window.customElements.define('icon-finder', IconFinder);
window.customElements.define('ico-noir', IcoNoir);