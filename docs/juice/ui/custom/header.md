# Custom Header Components

To make things more efficient for web developers and designers that are just starting out or seasoned
pros that want more expressive elements that are semantically correct as well as easy to remember.

We have variations of the `header` element.

1. A custom component that you are in control of
2. Pre-made headers that you control the interaction
3. Pre-made headers that are plug-and-play

## 'Custom' Custom Components

```js

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


```
**I do see where I missed the code for a proper `slot` for nested elements within**

The custom components would be used as such.

```html

<header-container
    desk=""
    mob=""
    height=""
    width=""
    color=""
>
    ...your other elements here...
</header-container>

```

We then add on event listeners and we have ourselves a functioning component!