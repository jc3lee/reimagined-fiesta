---
title: "Hamburger menu with no JS - Beginners"
tags: [ "html", "css", "tutorial", "codenewbie" ]
date: "2020-07-25"
author: "JC Lee"
cover: "/images/blog/hamburger-menu-with-no-js-beginners/cover-1.png"
description: "I put together this short tutorial on how to make a hamburger menu with no js in response to the feedback on my original Twitter post. The trick is to use the CSS pseudo-class `:target`. I'm not the one who came up with that technique - saw it on stackOverflow or elsewhere. Anyway, enjoy 😁!"
---

I put together this short tutorial on how to make a **hamburger menu with no js** in response to the feedback on my original Twitter post.

The trick is to use the CSS pseudo-class `:target`. I'm not the one who came up with that technique - saw it on stackOverflow or elsewhere.

Anyway, enjoy 😁!

![result hamburger menu with no js](https://codepen.io/ljc-dev/pen/NWxJezy?editors=0100)

## :target

Have you heard of the CSS pseudo-class on `:target`? 

It styles the element with an **anchor id** that that has been called by a **link**. 

For example, a `p` with an id of `home` and an `a` link with `href=#home`:

```html
<p id="home">Home</p>
<a href="#home">Go to Home</a>
```

```css
p:target {
  color: red;
}
```

![target example 1](/images/blog/hamburger-menu-with-no-js-beginners/0.gif)

When we click on the `a` link, the text of the targeted `p` changes to red.

By clicking on another link, the `:target` style gets hidden.

```html
<p id="home">Home</p>
<a href="#home">Go to Home</a>
<a href="#">Go somewhere else</a>
```

![target example 2](/images/blog/hamburger-menu-with-no-js-beginners/1.gif)

Here's the whole html code.

I'm using [material icons](https://material.io/resources/icons/) by adding their cdn in the head of the html file.

```html
<head>
  <!-- ... -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
```

```html
  <ul class="menu" id="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Profile</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contacts</a></li>
    <a class="close" href="#">
    <span class="material-icons">
      close
    </span>
    </a>
  </ul>
  <a class="hamburger" href="#menu">
    <span class="material-icons">
      menu
    </span>
  </a>
```

Material icons work by defining a span with `material-icons` class and adding a keyword between the tags:
```html
  <span class="material-icons">
    close
  </span>
```

* The `ul` has an id of `menu`. It holds the menu and the close icon link. 

* The `a` with a class of `hamburger` has a href `#menu`, clicking on it will show the on `:target` style for the `ul` menu.

* Clicking on other links (Home, Profile, About, Contacts) and the `close` link will remove the on `:target` style of the `ul`.

Now we just need to add a sprinkle of CSS ✨.

The hamburger link has a position `fixed` to get it out of the flow of the page. 

The menu has a position `fixed` too and a bigger `z-index` than the hamburger link to put the menu above the link.

For consistency, I've put the hamburger and close links on the same corner.

``` css
.hamburger {
  position: fixed;
  /* a large z-index puts the ham button above the rest of the page*/
  z-index: 99;
  background: white;
  border: none;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
}

.menu {
  position: fixed;
  /* give the menu a larger z-index than the ham link
  to put the menu above it */
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  /* basic menu styling*/
  list-style: none;
  background: black;
  display: flex;
  
  flex-direction: column;
  /* animate slide up/down */
  transform: translateY(-100%);
  transition: transform 0.2s ease;
}

.close {
  position: absolute;
  border: none;
  color: white;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
}
```

The menu is hidden by default with `transform: translateY(-100%);`. Translating -100% on the Y axis moves it 100% up above the screen.

By adding a transition `transition: transform 0.2s;` on transform we get a small slide in and out animation when the value of transform translateY changes.

And we reset the translation Y to 0 and show the menu on `:target`.

``` css
.menu:target {
  /* show menu */
  transform: translateY(0);
}
``` 

![result](https://codepen.io/ljc-dev/pen/GRNyGKo?editors=0100)

Thanks for reading 😄!

* Thanks [Martin](https://twitter.com/BelevMartin) for telling me to animate transform instead of height to get GPU support.
