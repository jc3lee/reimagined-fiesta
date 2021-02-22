---
title: "Introduction to scroll animations with Intersection Observer"
tags: [ "tutorial", "codenewbie", "javascript", "css" ]
date: "2020-02-06"
cover: "/images/blog/introduction-to-scroll-animations-with-intersection-observer/cover-1.png"
description: "The Intersection Observer (IO) detects when an element enters or leaves the viewport (or a parent element). It can be used to easily add animation on scroll without external libraries.

IO is asynchronous and more efficient than scroll listeners 👍."
---

# Intro

The Intersection Observer (IO) detects when an element enters or leaves the viewport (or a parent element). It can be used to easily add animation on scroll without external libraries.

IO is asynchronous and more efficient than scroll listeners 👍.

Btw, if you learn better through videos, I highly suggest this [youtube tutorial](https://www.youtube.com/watch?v=T8EYosX4NOo) by Kewin Powell.

Here's a basic example of a fade in animation on scroll using the intersection observer.

![ fade in animation ](https://codepen.io/ljc-dev/pen/XWNXBJg?editors=0010)

In this example we fade in an image on scroll by adding the class `fadeIn`  to it when it enters the viewport. This is the js:

```jsx
const img = document.querySelector("img")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn")
    }
  })
}
const options = {}

const myObserver = new IntersectionObserver(callback, options)
myObserver.observe(img)
```

Easy, right? Let's get started!

# Creating an intersection observer

First, we create an intersection observer by calling its constructor and passing it a callback function and an optional options object.

```jsx
const myObserver = new IntersectionObserver(callback, options)
```

## The options

`options` is an object with 3 properties:

```jsx
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}
```

In my fade in example, I've returned an empty object `{}` so the default options will apply. (Same with not return anything. )

- **root**: default `null`.  Identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. If the root is `null`, then the bounds of the actual document viewport are used.
- **rootMargin**: default 0px. The values in rootMargin define offsets added to each side of the root's bounding box.  In other words, positive values reduce the root bounding box and negative values increase it. Try scrolling the 3 boxes in this example.

![ options rootMargin](https://codepen.io/ljc-dev/pen/vYyLVdR?editors=0010)

Similar to CSS's margin. For example: "0px 5px 10px 15px" means top: 0px, right: 5px, bottom: 10px and left: 0px.  Accepts px and % only. ⚠ 0 is not an accepted value, use 0px or 0% instead.

- **threshold:**  default 0. The threshold is a number between 0 and 1.0. 
A value of  0 means as soon as one pixel is visible, the callback will be run.  1.0  means that the threshold isn't considered passed until every pixel is visible. (⚠If you set the threshold to 1 and the element is bigger than the root, the number won't reach 1 because there will be some parts invisible at all time.)

![options threshold](https://codepen.io/ljc-dev/pen/bGBEOMa)

## The callback

The callback function takes a list of entries and an intersection observer as parameter.

```jsx
const callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

The **observer** can be used to dynamically add or remove elements to observe. More on it below.

The focus is on the list of **entries**. There is one ****entry object for each observed element. It's common practice to use a forEach to iterate.

Each entry has the following helpful properties:

- `entry.isIntersecting` returns a boolean. True means the element is currently intersecting with the root.
- `entry.target` returns the observed element.

I've used them both in the fadeIn animation:

```jsx
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn")
    }
  })
}
```

- `entry.boundingClientRect` returns the bounds rectangle of the observed element.
- `entry.intersectionRatio` returns a number between 0.0 and 1.0 which indicates how much of the observed element is actually visible within the root.

Etc. 😁 I've named the most important ones. You can find a list of all the entry properties [here](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).

# Select elements to be observed

To select an element to observe, we use the **observe()** method of our Intersection Observer.

```jsx
myObserver.observe(img)
```

And that's it! Now `myObserver` will detect when `img` enters or leave the viewport and trigger the callback.

If you want to observe many elements, you have to add them one by one.

```jsx
myObserver.observe(img1)
myObserver.observe(img2)
myObserver.observe(img3)
```

Or by giving them a common class and iterate with **forEach.**

```jsx
const imgList = document.querySelectorAll(".imgToAnimate")

// setting your observer here

imgList.forEach(img => {
  myObserver.observe(img)
})
```

To stop observing, call the **unobserve()** method on the element:

```jsx
myObserver.unobserve(img)
```

To stop observing every element at once call **disconnect()**:

```jsx
myObserver.disconnect()
```

You can also use those methods in the callback:

```jsx
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn")
      // stop observing this element
      observer.unobserve(entry.target)
    }
  })
}
```

# That's it!

I hope you've enjoyed this short intro on Intersection Observer 😃. 

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

Beside animating on scroll, it can be used to improve render speed and First Contentful Paint by avoiding to run scripts and load images (lazy loading) on parts the user is far from. 

# Beyond the basics

Here are a few examples of scroll animations with IO. I'll try to write a blog on each when I find some time 😅.

## Enter & Leave Anim

![Enter & Leave Animation](https://codepen.io/ljc-dev/pen/mdOVNqr?editors=0010)

## Scroll To Top

![Scroll To Top](https://codepen.io/ljc-dev/pen/abBdxPb)

## Update current tab on scroll

![Update current tab on scroll](https://codepen.io/ljc-dev/pen/MWbKdEW)

### And more to come 😁!