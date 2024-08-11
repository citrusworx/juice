# Utility and Component Naming

We have developed a system of utility styles that take inspiration of popular, modern paradigms.

```html

<div class="h:40 w:min:full bg:blue-500 text:white">
        A Simple Colored Container
</div>

```

## Say Goodbye to Forgettable Naming Conventions

Well...not a complete goodbye. We want to make our HTML templates have a more readable class convention. We believe by reducing the amount of hyphens used in class names, code will be more readable.

Let's try the above example with hyphens:

```html

<div class="h-40 w-min-full bg-blue-500 text-white">
        A Simple Colored Container
</div>


```

This simple code is readable. Take a look at the background property. This is where we want to replace the hyphen. If we break down each part of the class name, we can, essentially, create a class system within a name.

```css
/*  style : name : value   */
.w\:min\:full {

}

```

and it would look like this:

```html
<div class="w:min:full">

</div>
```

We are also testing combination class conventions like so.

```css
.width.full {

}
```

then we can use the class as such in our markup.

```html
<div class="width full">

</div>
```

We have also flirted with the idea of this convention

```css

/* selector : property :: value [combo] */
/* example: border:color::white-100[solid-3] */

.border\:color\:\:white-100\[solid-3\]{
        border-color: var(--white-100);
        border-style: solid;
        border-width: 3px;
}

```

We then apply the class to an html template like so:

```html

<h3 class="border:color::white-100[solid-3]">Heading With Border</h3>

```

So what we did is applied the typical BEM style without realizing it but doing it in a way that utilizes whitespace while applying utility-esque class naming. So let's try another example with a hyphen.

We are going to applying the same class as before but with hyphens instead.

```html

<h3 class="border-color--white-100[solid-3]">Heading With Border</h3>

```

These are what we call *pure classes*. Pure classes use the same delimiter throughout the class name (given the combo selector). Then we have *hybrid* classes the use both delimiters and separate further into smaller utilities.

```html

<h3 class="border:color blue-400 solid:3px">Heading</h3>
<h3 class="border-color blue-400 solid-3px">Heading</h3>

```

With hybrid classes there is a win-lose situation that is possible. If you are using selector that shares a property with another selector (say flex and grid with gap), be sure to use a shell to separate them.
