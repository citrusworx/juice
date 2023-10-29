window.myModules = {};
async function include(url, module){
    const data = await fetch(url);
    const content = await data.text();
    const moduleWrapper = `
        window.myModules["${module}"] = (function() {
            let exports = {};
            ${content}
            return exports;
        })();
    `;
    console.log(moduleWrapper);
    eval(moduleWrapper);
    
   
    }

include('../vanilla/js/components/textbox.js', 'TextBox').then(()=>{
    const TextBox = window.myModules.TextBox.TextBox;
    const tb = TextBox;
    document.getElementById('app').append(tb);
});
include('../vanilla/js/components/footer.js', 'Footer').then(()=>{
    const Footer = window.myModules.Footer.Footer;
    const ft = Footer;
    document.getElementById('app').append(ft);
})



