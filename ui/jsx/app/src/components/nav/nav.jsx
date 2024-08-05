function Nav(){
    return (
        <nav className="h:10 w:full flex center items:center gap:2 bg blue-400 list-none text:white">
            <li className="">Nav Item</li>
            <li className="">Another List Item</li>
        </nav>
    );
}

function NavDark(){
    return (
        <nav className="h:10 w:full flex center items:center gap:2 bg black-400 list-none text:white">
            <li className="">Nav Item</li>
            <li className="">Another List Item</li>
        </nav>
    );
}

function NavLeft(){
    return (
        <nav className="h:10 w:full flex items:center gap:2 text:white bg green-400 list-none">
            <i className="fas-solid align-center icon blue-400 icon:md ml:rel:10"></i>
            <ul className="flex gap:2 items:center list-none text:white caveat text:md text:color black-500">
                <li>Item One</li>
                <li>Item Two</li>
            </ul>
        </nav>
    );
}

function NavRight(){
    return (
        <nav className="h:10 w:full flex items:center gap:2 jc-end bg blue-700 mr:rel:15 poppins p:rel:5">
            <ul className="flex items:center list-none gap:2 text:white">
                    <li className="">List Item</li>
                    <li className="">List Item</li>
                    <li className="">List Item</li>
                    <li className="">List Item</li>
                    <li className="">List Item</li>
            </ul>
            <form className="flex items:center gap:1">
                <input type="search" name="search" id="nav-search" className="w:10 h:3 rounded:sm" placeholder="Search..." />
                <button className="text:sm poppins">
                    Search
                    <i className="fas-solid magnifying-glass icon black-200 icon:sm"></i>
                </button>
            </form>
        </nav>
    );
}

export { Nav, NavDark, NavLeft, NavRight }