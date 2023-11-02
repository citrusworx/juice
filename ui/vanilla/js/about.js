document.addEventListener('DOMContentLoaded', ()=>{ 

include('../components/nav/nav.js', 'Nav').then(()=> {
    // Get Nav Module
    const Nav = window.myModules.Nav.Nav;
    const nb = Nav;
    // Add Stylings
    nb.classList.add('h-10');
    nb.classList.add('bg-blue-400');
    nb.classList.add('montserrat');

    document.getElementById('app').append(nb);
});
include('../components/nav/navdark.js', 'NavDark').then(()=> {
    // Get Nav Module
    const nav = window.myModules.NavDark.NavDark;
    const nd = nav;

    document.getElementById('app').append(nd);
});
include('../components/hero/hero.js', 'Hero').then(()=>{
        const Hero = window.myModules.Hero.Hero;
        const hr = Hero;
        hr.classList.add('bg-red-700');
        hr.classList.add('h-30');
        hr.classList.add('rel');
        document.getElementById('app').append(hr);
    });
include('../components/textbox.js', 'TextBox').then(()=>{
    const TextBox = window.myModules.TextBox.TextBox;
    const tb = TextBox;
    tb.classList.add('rp-6');
    document.getElementById('app').append(tb);
});
include('../components/tables/pricing/single-column.js', 'SingleColumn').then(()=>{
    const SingleColumn = window.myModules.SingleColumn.SingleColumn;
    const sc = SingleColumn;
    document.getElementById('app').append(sc);
});
include('../components/footer/footer.js', 'Footer').then(()=>{
    const Footer = window.myModules.Footer.Footer;
    const ft = Footer;
    document.getElementById('app').appendChild(ft);
});

});



