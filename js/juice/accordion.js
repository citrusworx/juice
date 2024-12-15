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

// Create accordion
const accordionContainer = document.getElementById('accordion-container');
const accordionContent = document.getElementById('accordion-item');
const accordion = document.getElementById('accordion-content-1');
accordionContainer.classList.add('accordion',
                                'container',
                                'border:color',
                                'black-400',
                                'solid',
                                'rounded-sm',
                                'p-rel-5',
                                'h:20',
                                'w:25'
                                );
const accordionButton = document.getElementById('btn');
accordionButton.addEventListener('click', () => {
  console.log('clicked');
      accordionContainer.classList.toggle('bgc-brown-300');
      accordion.classList.toggle('open');
      accordion.classList.toggle('closed');
})