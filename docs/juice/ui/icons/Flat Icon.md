# Flat Icon Custom Component

```js
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
```