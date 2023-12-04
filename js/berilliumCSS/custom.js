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

class H3 extends HeadingTwo {
	constructor(){
		super();
	}

	render() {
	const hSize = this.getAttribute('size') || '';
	const hColor = this.getAttribute('color') || '';
	const hFont = this.getAttribute('font') || '';
	const hClass = this.getAttribute('class') || '';

	this.innerHTML = `
		<h3 class="text:${hSize} text:color:${hColor}${hFont}${hClass}">
			${this.textContent}
			<span><slot></slot></span>
		</h3>
	`;
	}
}

class H4 extends HeadingTwo {
        constructor(){
                super();
        }

        render() {
        const hSize = this.getAttribute('size') || '';
        const hColor = this.getAttribute('color') || '';
        const hFont = this.getAttribute('font') || '';
        const hClass = this.getAttribute('class') || '';

        this.innerHTML = `
                <h4 class="${hSize}${hColor}${hFont}${hClass}">
                        ${this.textContent}
                        <span><slot></slot></span>
                </h4>
        `;
        }
}


window.customElements.define('heading-two', HeadingTwo);
window.customElements.define('h-2', H2);
window.customElements.define('h-3', H3);
window.customElements.define('h-4', H4);
