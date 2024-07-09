// 
//      This is a file for the accordion component
// 
//    done  TODO: Create an accordion class 
//      TODO: Create Accordion button 
//      TODO: Create a accordion-container class
//     done TODO: Add event listener to button
//      TODO: Add and remove class to container(with smooth transitions)
//      TODO: Add variations to accordion (all closed, first open, etc)
//      TODO: Add custom accordion component with intuitive naming covention

class AccordionComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .accordion {
                    background-color: #eee;
                    color: #444;
                    cursor: pointer;
                    padding: 18px;
                    width: 100%;
                    border: none;
                    text-align: left;
                    outline: none;
                    font-size: 15px;
                    transition: 0.4s;
                }
                
                .active, .accordion:hover {
                    background-color: #ccc; 
                }
                
                .panel {
                    padding: 0 18px;
                    background-color: white;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.2s ease-out;
                }
                
                .panel p {
                    font-size: 15px;
                    line-height: 1.5;
                }
            </style>
            <button class="accordion">Accordion</button>
            <div class="panel">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        `;
    }

    connectedCallback() {
        const accordion = this.shadowRoot.querySelector('.accordion');
        const panel = this.shadowRoot.querySelector('.panel');

        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `${panel.scrollHeight}px`;
            }
        });
    }
}

customElements.define('accordion-component', AccordionComponent);