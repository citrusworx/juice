window.myModules = {};
window.include = async function(url, module){
   try { const data = await fetch(url);
    const content = await data.text();
    
    const createModule = new Function('exports', content);
    const exports = {};
    createModule(exports);

    window.myModules[module] = exports;
   } 
   catch(error){
    console.error(`Error including file from ${url}: `, error);
   }
   
    }