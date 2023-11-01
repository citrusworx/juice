window.myModules = {};

//create multiple global objects to separate concerns
window.globalFunctions = {};
window.globalVariables = {};

window.include = async function(url, module){
   try { 
      const data = await fetch(url);
      const content = await data.text();
    
      const createModule = new Function('exports', content);
      const exports = {};
      createModule(exports);

      window.myModules[module] = exports;
   } 
   catch(error){
      console.error(`Error including file from ${url}: `, error);
   }
   
};

window.require = function(globalName, name){
   return window[globalName][name] || null;
};

window.define = function(name, globalName, createFunction){
   const module = {
      exports: {}
   } 
   createFunction(module, module.exports);
   window[globalName][name] = module.exports;
};