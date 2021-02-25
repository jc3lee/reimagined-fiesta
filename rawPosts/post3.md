---
title: "Scroll to Top button for Beginners"
tags: [ "tutorial", "css", "codenewbie", "javascript", "beginner" ]
date: "2020-08-23"
author: "JC Lee"
topPost: true
cover: "/images/blog/scroll-to-top-button-for-beginners/cover-1.png"
description: "Scroll to top button is a very common UX feature in websites. It's goal is to prevent annoyance of users forced to scroll back up - especially on mobile devices. In this short tutorial, we'll see how to implement one with css and pure (vanilla) javascript."
---

Scroll to top button is a very common UX feature in websites. It's goal is to prevent annoyance of users forced to scroll back up - especially on mobile devices. In this short tutorial, we'll see how to implement one with css and pure (vanilla) javascript.

The simplest way to get a scroll to top button is to have an html element at the top and a link near the end of your page that calls it:

```html
<div id="scroll-to-top"></div>
<!-- ... -->
<a href="#scroll-to-top"></a>
```

And this css to make the scroll smooth:

```css
html {
  scroll-behavior: "smooth";
}
```

That's the easiest way to get a scroll to top (I've actually missed this on my original post as **Loouis Low** pointed out on [dev.to](https://dev.to/ljcdev/scroll-to-top-button-in-vanilla-js-beginners-2nc)).

Result here:

![most basic scroll to top](https://codepen.io/ljc-dev/pen/XWNzNWQ?editors=1100)

No javascript needed!

# Scroll to top button with vanilla js

The previous example works fine but has a serious drawback because after clicking on that link, the anchor *#scroll-to-top* will show up in the url . We could call the anchor *#home*. But it'll still be in the url history when the user clicks back.

That's why I prefer to do it in js 😁. Plus js allows much more customization like:

- Show button after the user has scrolled down x % of the page.
- Animate entrance and leave.

## The button

Let's just created a simple button with a class of `scrollToTopBtn` so we can refer to it in js.

```html
<button class="scrollToTopBtn">TOP</button>
```

Here are a few CSS properties for the button:

-  `position: fixed;` gets it out of the flow of the page. 

-  `bottom: 50px;` and `right: 50px;` places it at the bottom right corner.
 
-  `z-index: 100;` a large z-index keeps the button on top of every other elements.

-  `display: none;` is used to hide it at first.

## Detect user scroll

we can detect user's scroll with a `scroll` event listener:

```js
document.addEventListener("scroll", handleScroll);

function handleScroll() {
  // do something on scroll
}
```

## Show the Scroll to Top button logic

In the `handleScroll` function, we'll check whether we need to show or hide the button. We are going to use three element properties: 

- [clientHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight) gives us the **visible part** of an element in its parent.

- [scrollHeight](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight) gives the **total height** of an element including the overflow part.

![clientHeight and scrollHeight](/images/blog/scroll-to-top-button-for-beginners/0.png)

The height of the overflow part is the **total amount of pixels that can be scrolled**. In other words: scrollableHeight = scrollHeight - clientHeight

```js
var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
```

`document.documentElement` is the document element. We are using it instead of `document` because scrollHeight and clientHeight are elements' properties.

- [scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop) gives the number of pixels scrolled from the top. It's the **amount of pixels scrolled** by the user.

By dividing scrollTop with scrollableHeight we get a ratio between 0 and 1. 0 meaning the user hasn't scrolled and 1 meaning the user scrolled to the end of the page. This ratio tells us how much the user scrolled.

If we want the scroll to top button to show up after the user scrolled 50% we set a *golden ratio* of 0.5. And, with an if else statement, make the button visible above and hidden below.

```js
document.addEventListener("scroll", handleScroll);
// get a reference to the button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}
```

With that the scroll-to-top button appears and hides on scroll.

# Scroll to top

There a lot of scrolling examples that use jQuery. But these days it is really easy to do this in pure js with [**scrollTo**](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo):

```js
\\...
scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
```
- `top: 0,` means scroll to 0px vertically.
- `behavior: "smooth"` makes the scroll smooth.
- there's also a `left` property for horizontal scroll.

And that's it! Here's the final js:  

```javascript
document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
```

### Tada 🎉🎉🎉!

![result scroll to top](https://codepen.io/ljc-dev/pen/QWGOpKp)

Thanks for reading 🥰🥰!! I hope this was of help.

### Improvements:

I've tried to keep it simple. Usually I would also toggle a class instead of the display to show a transition animation.

Here's how you could fade up the button:

![fade up anim](https://codepen.io/ljc-dev/pen/rNWYyjv?editors=0100)
