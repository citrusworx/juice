include('../vanilla/js/components/nav/nav.js', 'Nav').then(()=> {
    const Nav = window.myModules.Nav.Nav;
    const nb = Nav;
    nb.classList.add('h-10');
    nb.classList.add('bg-blue-400');
    nb.classList.add('text-white');

    document.getElementById('app').append(nb);
});
include('../vanilla/js/components/hero/hero.js', 'Hero').then(()=>{
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




