# Config.css

## Importing External Files Following Categories

The imported CSS files in Juice are organized into three distinct categories, each serving a specific purpose. These categories are reflected in the order of imports as follows:

### 1. Root Files

- **fonts/font.css**: This file is responsible for font configurations, allowing you to define custom fonts for your project.

- **color.css**: Import this file to access a set of color-related root configuration variables, facilitating the maintenance of a consistent color scheme.

- **gradient/gradient.css**: This component deals with gradient-related styles, offering predefined gradients for effortless application.

- **swatch.css**: It contains configurations for color swatches, simplifying the process of applying predefined colors to UI elements.

- **icon.css**: Importing this file provides root configurations for icons, making it easy to integrate icons into your design.

### 2. Class Styles

- **animate/animate.css**: Within this class style file, you'll find a collection of animations that can be applied to elements, enhancing user interactions.

- **state.css**: This class style file contains styles for various element states, such as hover and active, enabling interactive and responsive design.

- **height.css**: Use this file to access styles for controlling the height of elements, ensuring consistent vertical spacing.

- **width.css**: Similar to height, this component provides styles for controlling the width of elements, maintaining layout consistency.

- **styling.css**: General element styling, including margins, padding, borders, and other common styles, is defined in this file.

- **display.css**: This class style file offers styles for managing how elements are displayed, providing flexibility in layout design.

- **spacing/spacing.css**: Within this component, you'll find predefined spacing utilities that help you create balanced designs.

- **position.css**: It contains styles for element positioning, allowing precise control over element placement.

- **order.css**: This file provides styles related to the order of elements, including z-index settings for layering elements.

- **form.css**: Importing this file offers styles tailored to form elements, ensuring a consistent and visually appealing form layout.

- **flex.css**: Styles for creating flexbox layouts are consolidated in this file, simplifying responsive and flexible design.

- **text.css**: Typography styles, including font choices and text-related properties, are defined here.

- **grid.css**: Grid-related styles enable you to create structured layouts efficiently, aligning elements as needed.

- **background.css**: This component provides styles for element backgrounds, allowing easy customization of background properties.

- **button.css**: The class styles in this file focus on buttons, offering predefined button styles that can be applied to various buttons in your project.

### 3. Responsive Styles

- **card.css**: Styles specific to cards are defined in this file, simplifying the creation of card-based components.

- **desktop/desktop.css**: Responsive styles optimized for desktop screens are available here, ensuring a great desktop user experience.

- **mobile/mobile.css**: Importing this file brings in responsive styles tailored for mobile screens, enhancing the mobile user experience.

- **tablet/tablet.css**: Similar to the desktop and mobile styles, this file provides responsive styles designed specifically for tablet screens, ensuring a consistent design across various devices.

### Minification for Performance Enhancement

The `config.css` file plays a crucial role in optimizing performance across the board. It serves as a central hub that aggregates all the styles used in your project. The key purpose of this file is to prepare the styles for minification, a process that removes unnecessary spaces, comments, and formatting to reduce the file size.

Minification offers several benefits:

- **Improved Page Load Speed**: Smaller CSS files load faster, enhancing the overall performance of your web pages.

- **Reduced Bandwidth Usage**: Minified CSS consumes less bandwidth, which is particularly important for users with limited data plans or slower connections.

- **Enhanced User Experience**: Faster-loading pages provide a smoother and more enjoyable experience for your website visitors.

By prepping the styles in `config.css` for minification, Juice helps you achieve optimal performance, ensuring that your web projects are both visually appealing and fast-loading.

---

### Note

**For Vanilla Devs**:
There will be two links (`berillium.min.css` and `berillium.min.js`) required that will provide the fastest experience for both user and dev.

**For Node Devs**:
A `gulp.js` script is provided that minifies your CSS for you after you add any custom classes that you need.
