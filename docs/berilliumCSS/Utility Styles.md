We have developed a system of utility styles that take inspiration of popular, modern paradigms.

```html

<div class="h:40 w:min:full bg:blue-500 text:white">
	A Simple Colored Container
</div>

```

## Say Goodbye to the '-'

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