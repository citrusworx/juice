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
const accordionContainer = document.createElement('div');
accordionContainer.classList.add('accordion',
                                'container',
                                'bg:grad',
                                'seafoam',
                                'border:color',
                                'black-400',
                                'solid',
                                'rounded-sm',
                                'p-rel-5',
                                'h:10',
                                'w:25'
                                );

const accordionHeading = document.createElement('h3');
accordionHeading.classList.add('text:md', 'm:rel:5');
accordionHeading.textContent = 'Your First Clue';
accordionContainer.appendChild(accordionHeading);

const contentContainer = document.createElement('div');
const contentHeading = document.createElement('h2');
const contentText = document.createElement('p');
contentHeading.textContent = 'Accordion Title';
contentText.textContent = `

        Accordion Content
    It is important to maintain. This shit is dope city.
    It is important to maintain. This shit is dope city.
`;
contentContainer.classList.add('accordion-content', 'fade:in');
contentContainer.style.display = 'none'; // Initially hide the content
contentContainer.appendChild(contentHeading);
contentContainer.appendChild(contentText);
accordionContainer.appendChild(contentContainer);

const container = document.getElementById('accordion');
container.appendChild(accordionContainer);

accordionContainer.addEventListener('click', function() {
  this.classList.toggle('active');
  this.classList.add('h:20', 'p:rel:5');
  if (contentContainer.style.display === 'none') {
    contentContainer.style.display = 'block';
    accordionHeading.classList.add('dis:none');
  } else {
    contentContainer.style.display = 'none';
    accordionContainer.classList.remove('h:20');
    accordionContainer.classList.add('h:10');
    accordionHeading.classList.remove('dis:none');
  }
});