# Font Awesome Custom Component

```js

class FontAwesomeIcon extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes(){
        return ['lib', 'name', 'color', 'size'];
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
        const iconSize = this.getAttribute('size') || '';
        const iconLib = this.getAttribute('lib') || '';
        const iconName = this.getAttribute('name') || '';
        const iconColor = this.getAttribute('color') || '';

        this.innerHTML = `
                <i class="fas-${iconLib} ${iconName} ${iconColor} ${iconSize}"></i>
        `;
        }
    
}

window.customElements.define('fas-icon', FontAwesomeIcon);

```

## Usage

```html

<fas-icon
    lib=""
    name=""
    color=""
    class=""
    >
</fas-icon>

```

Then input the proper CSS class for each attribute.

```html

<fas-icon
    lib="solid"
    name="addresscard"
    color="icon:glacier"
    class="icon:md"
    >
</fas-icon>

```
This cuts down the long class names of regular HTML elements 
and puts them in a more logical manner.