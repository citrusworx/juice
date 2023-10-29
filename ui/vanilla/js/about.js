include('../vanilla/js/nav/nav.js', 'Nav').then(()=> {
    const Nav = window.myModules.Nav.Nav;
    const nb = Nav;
    document.getElementById('app').append(nb);
});
include('../vanilla/js/components/hero.js', 'Hero').then(()=>{
        const Hero = window.myModules.Hero.Hero;
        const hr = Hero;
        hr.classList.add('bg-red-400');
        document.getElementById('app').append(hr);
    });
include('../vanilla/js/components/textbox.js', 'TextBox').then(()=>{
    const TextBox = window.myModules.TextBox.TextBox;
    const tb = TextBox;
    document.getElementById('app').append(tb);
});
include('../vanilla/js/components/footer.js', 'Footer').then(()=>{
    const Footer = window.myModules.Footer.Footer;
    const ft = Footer;
    document.getElementById('app').appendChild(ft);
});




