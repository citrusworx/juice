window.myModules = {};

//create multiple global objects to separate concerns
window.functions = {};
window.variables = {};

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

window.define = function(name, globalName, content){
   if (!window[globalName]) {
      window[globalName] = {};
  }

   //Attach the module to the global space
   window[globalName][name] = {content};
   console.log("After setting:", window[globalName][name]);
}

window.callAPI = async function(url){
   try {
      const res = await fetch(url);
      if(!res.ok){
         throw new Error(`ERROR: ${res.status}`);
      }
      const json = await res.json();
      return json;
   }
   
   catch (error){
      console.error(`Error fetching API data from ${url}: `, error);
   }
}