# Button.css

Button.css is the main file for the styling of buttons of various types.

```html
<main class="my:10">
        <button class="btn meloncolly h:10">Click here</button>
        <button class="btn:meloncolly">Click here</button>
</main>
```

or

```html
<div
    class="btn flat bg lime-100 h:10 w:20 rounded:md mx:10"
    id="button" 
    role="button"
    tabindex="0"
    aria-label="button"
    onmouseover="hoverColor('lime', '400', '100')"
    onmouseleave="hoverColor('lime', '100', '400')"
>
```

Our button classes offer multiple naming conventions to support the syntax that is most comfortable to the developer.

## Classes

### Component

Here is a list of our component classes:

1. Accordian
2. Card
3. Hero
4. Footer
5. Nav
6. Alerts
7. Banner
8. Breadcrumb
9. Menus
10. Carousel/Slider

### Utility

Our utility classes breaks down CSS styles into useable classes.

```html
<p class="text:md text:color blue-500 caveat">
    This is some paragraph text.
</p>
```

The break down of these classes:

1. **text:md** - Determines the font size
2. **text:color blue-500** - is a combo class that creates the font color
3. **caveat** - is the addition of a Google font.

## How to Use

```html
<secion class="card" id="container">
    <div class="bg:blue-500 w:80% m:auto flex col items:center">

    </div>
</secion>
```

The code above showcases the way that our CSS component and utility classes work together to create different layouts and themes.

1. The card component class creates the intial container, spacing, and layout (Flex or Grid)
2. The nested elements can contain another component class or use our utility classes to create different custom components inside the container.

This allows developers to use pre-styled components while also create custom components.
