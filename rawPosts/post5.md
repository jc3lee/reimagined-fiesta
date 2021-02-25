---
title: "Easy hamburger menu with JS"
tags: [ "javascript", "html", "css", "tutorial", ]
date: "2020-07-26"
author: "JC Lee"
cover: "/images/blog/easy-hamburger-menu-with-js/cover-1.png"
description: "A hamburger menu is a classic UX feature present in countless websites. It works by showing and hiding a menu on click. It's especially popular in mobile design. In this tutorial, we'll create a hamburger menu in pure html, css and js."
---

A hamburger menu is a classic UX feature present in countless websites. It works by showing and hiding a menu on click. It's especially popular in mobile design. In this tutorial, we'll create a hamburger menu in pure html, css and js.

( 24/02/2021 => full rewrite.)

![result](/images/blog/easy-hamburger-menu-with-js/0.gif)

## Step 1: Adding a basic HTML

First, let's create a button with a class of `ham` and add a menu and close icons inside.
I'm using [material icons](https://material.io/resources/icons/) by adding their cdn in the head of the html file.

```html
<head>
  <!-- ... -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
```

```html
  <button class="ham">
    <!-- material icons https://material.io/resources/icons/ -->
    <span class="menuIcon material-icons">
      menu
    </span>
    <span class="xIcon material-icons">
      close
    </span>
  </button>
```

Material icons work by defining a span with `material-icons` class and adding a keyword between the tags:
```html
  <span class="material-icons">
    close
  </span>
```

The `menuIcon` and `xIcon` are NOT needed. I've added them to reference the icons in js later on.

We also need a menu with links:

```js
<ul class="menu">
  <li><a class="menuLink" href="#">Home</a></li>
  <li><a class="menuLink" href="#">Profile</a></li>
  <li><a class="menuLink" href="#">About</a></li>
  <li><a class="menuLink" href="#">Contacts</a></li>
</ul>
```

## Step 2: Styling the button and the menu

By giving the button a `fixed` position we removed it from the flow of the page. I chose to place it at the top right corner of the page.

```css
.ham {
  position: fixed;
  z-index: 100;
  top: 1rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  border: black solid 1px;
  background: white;
  cursor: pointer;
}
```

* `z-index: 100;` keeps the button above other html elements. 100 is an arbitrary number. Basically, a big number puts it above every other element.

The X icon is hidden by default with `display: none;`

``` css
.xIcon {
  display: none;
}
```

The menu also has a `fixed` position and is hidden by default with `transform: translateY(-100%);`. Translating -100% on the Y axis moves it 100% up above the screen.

By adding a transition `transition: transform 0.2s;` on transform we get a small slide in and out animation when the value of transform translateY changes.

```css
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  transform: translateY(-100%);
  transition: transform 0.2s;
  list-style: none;
  padding-top: 4rem;
}
```

And we create a `showMenu` to reset the translation Y to 0 and show the menu. This class will be toggled with js.

```css
.showNav {
  transform: translateY(0);
}
```

## Step 3: Javascript time 😄!

We get a reference to our elements in js.

``` javascript
var menu = document.querySelector(".menu");
var ham = document.querySelector(".ham");
var xIcon = document.querySelector(".xIcon");
var menuIcon = document.querySelector(".menuIcon");
```

Then add a click event listener to the hamburger button.

``` javascript
ham.addEventListener("click", toggleMenu);
```

Clicking on the button will call the function `toggleMenu`.

The logic of `toggleMenu` is:

If the menu has the `showMenu` class, remove it to hide the menu. Also hide the X icon and show the menu icon.

If the menu doesn't have the `showMenu` class, add it to show the menu. Also show the X icon and hide the menu icon.

We use `classList.contains()` to check whether menu has the `showMenu` class or not.

``` javascript
menu.classList.contains("showMenu");
```

And `classList.add()` and `classList.remove()` to add and remove classes.

We show and hide icons by switching `style.display` to `block` and `none`.
Here's the full `toggleMenu` function:

``` javascript
// toggle menu in and out when clicking on the hamburger
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
``` 

The hardest part is over! All that's left is to hide the menu when the user click on the links.

We use `querySelectorAll` to get the list of links.

``` javascript
var menuLinks = document.querySelectorAll(".menuLink");
```

And iterate through them with `forEach`. Each link gets a click event listener that will call `toggleMenu` and hide the menu.

``` javascript
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleMenu);
  }
)
```

### And that's it!

![result hamburger menu](https://codepen.io/ljc-dev/pen/xxRpgaL?editors=1000)

### Thanks for reading 😄!

- This post has gotten about 9k views on dev.to and I felt a bit guilty because it just wasn't that good. Like I was using images for icons 😅. So I've rewritten it from scratch. I think I've done a much better job explaining this time around. Feel free to comment and hit me up on socials if you have a question 👌.