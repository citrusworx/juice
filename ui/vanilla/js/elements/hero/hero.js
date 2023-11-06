class HeroLeft extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    attributeChangeCallback(name){
        if(name === 'class'){
            this.render();
        }
    }

    render() {

    }
}

//  TODO: Think about adding onEvent attributes or having some built-in
//  TODO: Try to create with Custom Element having the easiest syntax to use
//  TODO: Create Center and Right Custom Elements. 
//  TODO: Create Variations with images and w/o buttons
//
//      <hero-left
//          class      [hero left ${restOfClassValues}] <-- Sets basic sizing & aligns content only (NO OTHER STYLINGS APPLIED) 
//          heading    [required] 
//          subheading [optional]   
//          id         [optional]
//       >
//          <hero-content
//              text
//              button
//           >
//          </hero-content>
//      </hero-left>
//
//              RENDERED HTML
//
//      div
//          h2 [required]
//          span [optional]
//          p (multiple) [required (one at least)]
//          button [required]
//      [possible additions--for additional flare]
//          icons [optional]  <-- <i>/custom element
//          badges [optional] <-- CSS Class
//          ribbons [optional] <-- CSS Class (for positioning)
//      /div