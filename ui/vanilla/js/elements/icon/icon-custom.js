class MatIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get attributes(){
        return ['class', 'icon'];
    }

    connectedCallback(){
        this.render();
    }
     
    changeAttribute(name, value){
        if(name === 'icon'){
            this.render();
        }
    }
    render(){
        const iconName = this.getAttribute('icon') || '';

        this.innerHTML = `
                <i class="mat ${iconName}" ></i>
        `;
        }
    
}

customElements.define('MatIcon', MatIcon);