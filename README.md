
# 🎨 BerilliumCSS & BerilliumJS: A Dynamic Duo for Web and Mobile Development
## Why Choose Berillium?
Why settle for the ordinary when you can have exceptional? BerilliumCSS is the CSS framework that breaks the mold, combining the utility of frameworks like Bootstrap and Tailwind with creative and intuitive naming conventions. And if you're in the React Native ecosystem, meet BerilliumJS—a library that takes our iconic stylesheets and serves them as easily importable components. Here's why you should start using Berillium today!

### Choose What You Want
Our componentized library makes adding to your codebase a breeze. Our CSS, JS, and UI libraries are a big a la carte for your design and development needs. We believe that your day to day should be focused on facilitating your logic rather than building out your interfaces.

## 🌈 Swatch Library: Unleash Your Inner Artist
Unlock your creative potential with our revolutionary Swatch Library. Instead of reusing the same old colors, choose from our meticulously curated color schemes, featuring different systems color harmonies like:

- Compound
- Square
- Monochromatic
- Complimentary
- Triad
- Split Complimentary

This allows for endless color choice and opportunity. Feel free to paruse the swatch library :D

### Gradients Galore
 
### Featured Swatches:
🍉 **Meloncolly**: Experience a palette of sentimental greens and lively reds.

🐚 **Nautical**: Navigate a professional look with our shades of blue and gray.

🍧 **Sherbet**: Make your projects pop with this playful array of pastel colors.

🌿 **Herbal**: A collection of earthy colors

🌕 **Midnight**: A collection of dark blues

🌊 **Aquaflux**: A collection of sea fairing blends of color

🚥 **Neon**: A collection of electric colors

## 🚀 BerilliumJS: Vanilla, React, TypeScript, React Native: Supercharged
Berillium isn't just about CSS. With BerilliumJS, we've extended our framework into the JavaScript world. Enjoy the convenience of importing pre-styled components that adhere to our Swatch Library aesthetics, right into your all of your JavaScript projects. Styling made simple and fun!

### Current Support (in development)
- 🍦Vanilla JavaScript

- 🐘 PHP

    - 🍦Vanilla
    - 🎼Symfony

- ⚛️ React

- TypeScript

## 🎥 Animation Station
Enhance your UX with our rich set of animations, and never find yourself lost in development hell, thanks to our comprehensive documentation.

Ready for a game-changing development experience? Step into the Berillium universe and elevate your projects to new heights!

### Backgrounds

**Animated Gradients**

**Particle System**

## Documentation
[CSS]() | [JS]() | [UI]()

**Feature of the Month**

### The New Include function for Vanilla JS
Why hasn't there been an include function for Vanilla JavaScript? Now there is!

```js
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
```

#### `window.myModules` Object:
The `window.myModules` object serves as a global registry to store the modules that are loaded and executed using the `include` function. Each module is associated with a unique identifier, which is specified as the `module` parameter when calling `include`.

#### `window.include` Function:
The `window.include` function is an asynchronous function designed for dynamically loading and executing JavaScript modules from external URLs. Here's how it works:

1. **Fetch Content**: It uses the `fetch` API to retrieve the content of the module from the specified URL. This content is typically a JavaScript file.

2. **Asynchronous Execution**: The function is `async`, meaning it can pause and resume its execution while waiting for the module to be fetched and its content to be loaded.

3. **Dynamic Code Execution**: It utilizes the `new Function` constructor to create a new JavaScript function. This function takes an `exports` parameter, which is an empty object. Inside this function, it executes the module's content, effectively creating a separate scope for the module.

4. **Exports**: Any variables or functions that are intended to be exported from the module are assigned to the `exports` object within the module's execution scope.

5. **Registration**: Finally, the `exports` object is assigned to the `window.myModules` object, using the specified `module` name as the key. This effectively registers the module so that it can be imported and used by other parts of the code.

6. **Error Handling**: If an error occurs during any step of the process (e.g., fetching the module or executing its code), it is caught, and an error message is logged to the console.

#### Emulating Node.js Behavior:
This custom `include` function mimics some aspects of Node.js' module system, which allows for modular code organization and sharing of functionality across different parts of an application. It provides a way to load external JavaScript files and encapsulate their functionality within separate scopes.

However, it's important to note that this approach is not identical to Node.js's `require` and `module.exports` system, as it relies on dynamic code execution and object assignments rather than the CommonJS module system used by Node.js.

#### Advantages and Considerations:
- **Modularity**: It enables modular code organization and the ability to break code into smaller, reusable pieces.
- **Dynamic Loading**: Modules can be loaded on-demand, reducing initial page load time.
- **Global Namespace**: Modules registered using this approach are stored in the global namespace, so it's important to avoid naming conflicts.
- **Error Handling**: The function includes basic error handling to catch and log errors during module loading and execution.

In summary, the `window.include` function is a custom approach to module loading and execution in the browser, inspired by Node.js, but with differences due to the nature of the web environment. It allows developers to write more organized and modular JavaScript code in a browser context.