class HeadingTwo extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['size', 'color', 'font', 'class', 'text'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'size':
            case 'color':
            case 'font':
            case 'class':
                this.render();
                break;
            default:
                break;
        }
    }

    render() {
        const hSize = this.getAttribute('size') || '';
        const hColor = this.getAttribute('color') || '';
        const hFont = this.getAttribute('font') || '';
        const hClass = this.getAttribute('class') || '';

        this.innerHTML = `
            <h2 class="text:${hSize} text:color:${hColor} ${hFont} ${hClass}">
                ${this.textContent}
            </h2>
        `;
    }
}

class H2 extends HeadingTwo {
    constructor() {
        super();
    }

    render() {
        const hSize = this.getAttribute('size') || '';
        const hColor = this.getAttribute('color') || '';
        const hFont = this.getAttribute('font') || '';
        const hClass = this.getAttribute('class') || '';

        this.innerHTML = `
            <h2 class="text:${hSize} text:color:${hColor} ${hFont} ${hClass}">
                ${this.textContent}
            </h2>
        `;
    }
}

window.customElements.define('heading-two', HeadingTwo);
window.customElements.define('h-2', H2);
