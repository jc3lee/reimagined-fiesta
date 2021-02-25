---
title: "Simple typing effect with JS and CSS - Beginners"
tags: [ "javascript", "tutorial", "codenewbie", "beginner", "css" ]
date: "2020-08-01"
author: "JC Lee"
cover: "/images/blog/simple-typing-effect-with-js-and-css-beginners/cover-1.png"
description: "The typing effect is a simple yet stylish animation used by many bloggers and web developers to introduce themselves in an elegant fashion. This tutorial will show you how to create the typing effect with plain css and js (no libraries)."
---

The typing effect is a simple yet stylish animation used by many bloggers and web developers to introduce themselves in an elegant fashion.

This tutorial will show you how to create the typing effect with plain css and js (no libraries).

Let's start by creating a text holder `p` with a class of `typeText`.

```html
    <p class="typeText"></p>
```

We add a blinking cursor after our paragraph with a CSS animation:

```css
.typeText::after {
  content: "|";
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% {opacity: 1;}
  50% {opacity: 0;}
}
```

The pseudo class `::after` is going to add the cursor `|` and make it blink with the keyframes animation blink.

If you are not familiar with animations, you might want to have a look at my [introduction to CSS animations](/posts/introduction-to-scroll-animations-with-intersection-observer).

Here's all the js to the typing effect:

```js
var typeText = document.querySelector(".typeText")
var textToBeTyped = "a software engineer"
var index = 0, isAdding = true

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToBeTyped using index.
    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout( function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, 120)
}
// start animation
playAnim()
```

The `playAnim()` function calls itself repeatedly using `setTimeout` with a delay of 120ms.

By using the string method `slice(0, index)` we set the text of `typeText` to a substring of the `textToBeTyped`.

```js
typeText.innerText = textToBeTyped.slice(0, index)
```

`index` begins at 0 and increments by 1 when we are adding and decrements by 1 when we are removing.

`isAdding` is a boolean that is used to check whether we are adding or removing.

When `index` is larger than the length of `textToBeTyped`, we set `isAdding` to false to start removing. And when `index` is equal to 0, we set `isAdding` is true to start adding again.

After it has finished adding, a setTimeout with a 2000ms delay will create a break for people to read the text before it gets removed again.

```js
if (index > textToBeTyped.length) {
  // no more text to add
  isAdding = false
  //break: wait 2s before playing again
  setTimeout( function () {
    playAnim()
  }, 2000)
  return
}
```

And we get:

![result](https://codepen.io/ljc-dev/pen/oNYoyrW?editors=0100)

And that's it! You should now be able to make your own typing effect.

I've tried to make it beginner friendly but not sure if I succeeded. If you have questions, please leave a comment or hit me up on my socials 😁. 

### Beyond the basics

The cursor animation can be made more realistic by adding a built-in animation-timing-function `step-end` to our blink animation like this:

```css
.typeText::after {
  content: "|";
  /* animation: blink 1s infinite; */
  animation: blink 1s step-end infinite;
}
```

`steps` are a recent addition to css. They break the flow of an animation by playing it in jumping steps. The only difference between the two animations below is the addition of steps on the 2nd div.

![jumping steps](https://codepen.io/ljc-dev/pen/xxRpwbE?editors=1100)

We can increase the removing speed by changing the setTimeout delay with the boolean `isAdding` and a ternary operator like this:

```js
function playAnim() {
  setTimeout(function () {
    // ...
  }, isAdding ? 120 : 60)
```

The ternary operator means if it's adding set the delay to 120ms. If it's removing set the delay to 60ms.

And instead of typing one string we can choose an array of string `textToBeTypedArr` to be typed in turn. And a `textToBeTypedIndex` variable to keep track of the current text index in the array. textToBeTypedIndex will be updated it each time after we are done removing the previous text.

```js
var typeText = document.querySelector(".typeText")
// var textToBeTyped = "a software engineer"
var textToBeTypedArr = ["a software engineer", "a warlord", "a king", "a peasant"]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        //...
      } else {
        //...
      }
    } else {
      // removing text
      if (index === 0) {
        //...
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        //...
      }
    }
    // calls itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()
```

![improved result](https://codepen.io/ljc-dev/pen/rNWYrax?editors=0010)

And for prefectionists that don't like the cursor blinking when the text is being added/removed, we can toggle the blink animation by removing the animation from ::after and adding it only in js with the `showAnim` class:

```css
.typeText::after {
  content: "|";
  /* animation: blink 1s step-end infinite; */
  animation: none;
}

.showAnim.typeText::after {
  animation: blink 1s step-end infinite;
}
```

And toggling the `showAnim` class in js:

```js
function playAnim() {
    //...
      if (index > textToBeTyped.length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        // play cursor blink animation
        typeText.classList.add("showAnim")
        setTimeout(function () {
          // remove cursor blink animation
          typeText.classList.remove("showAnim")
          playAnim()
        }, 2000)
        return
    //...
}
```

![final result](https://codepen.io/ljc-dev/pen/jOVYPQX?editors=1000)