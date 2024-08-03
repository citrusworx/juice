// We are thinking and brainstorming fun, cool animations for web pages and apps.
// 
// This might be the name of the output file of compiled scripts

let button = document.getElementById('button');
let div = document.getElementById('box');
button.addEventListener('click', () =>{
   if(box.classList.contains('bg-meloncolly:merlot')){
    box.classList.remove('bg-meloncolly:merlot');
    box.classList.add('bg-meloncolly:splash');
    console.log('change color');
   } 
   else {
    box.classList.remove('bg-meloncolly:splash');
    box.classList.add('bg-meloncolly:merlot');
    console.log('change color back');
   }
    
    console.log('done');
});

function wiggle_button_toggle(){
    if(button.classList.contains('wiggle')){
        button.classList.remove('wiggle');
    }
    else {
        button.classList.add('wiggle');
    }
}
