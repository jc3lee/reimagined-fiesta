---
title: "Review on Rellax (for parallax) and AOS (animate on scroll)"
tags: [ "review", "javascript", "libraries", "animation", "css" ]
date: "2021-01-17"
author: "JC Lee"
mustRead: true
cover: "/images/blog/review-on-rellax-for-parallax-and-aos-animate-on-scroll/cover-1.png"
description: "AOS is a very popular scroll animation library but it has some unexpected shortcomings with responsive design. Rellax is a rising star for parallax animations on desktop and mobile.
I wrote this review after playing with both on a react website project."
---

AOS is a very popular scroll animation library but it has some unexpected shortcomings with responsive design. Rellax is a rising star for parallax animations on desktop and mobile.
I wrote this review after playing with both on a react website project.

# AOS (Animate on Scroll)

[AOS](https://michalsnik.github.io/aos) is an animation library that handles all the scroll logic.

### Pros

**Super easy to implement.**

Just add a data attribute **data-aos** with an animation class like "fade-up" to have a fade up animation.

``` html
<div data-aos="fade-up"></div>
```

AOS has a lot of built-in animations classes like **fade-up**, **fade-in**, **zoom-in**, **flip-up**.

We only need to initialize AOS in js and our div will fade up when it enters the viewport.

``` js
 AOS.init();
```

You can add custom animations too:

``` css
[data-aos="my-fade-up"] {
  transform: translate3d(0, 100px, 0);
  opacity: 0;
  transition-property: transform, opacity;
}

[data-aos="my-fade-up"].aos-animate {
  transform: translate3d(0, 0, 0);
    opacity: 1;
}
```

You can customize with data attributes to change the animation duration, delay, or add an anchor, offset, etc.

In my project, I used AOS for fade in and up animations:

![aos fade in and up](/images/blog/review-on-rellax-for-parallax-and-aos-animate-on-scroll/2.gif)

### Cons

**No built-in responsive design support.**

If you want an animation to play only on mobile, you need to create your own. Say you want the built-in class **fade-up** to play on desktop but not on mobile. Well you can't 😅. You need to write your own fade-up with media query like this:

``` css
@media (min-width:1024px) {
  [data-aos="my-fade-up"] {
    transform: translate3d(0, 100px, 0);
    opacity: 0;
    transition-property: transform, opacity;
  }

  [data-aos="my-fade-up"].aos-animate {
    transform: translate3d(0, 0, 0);
      opacity: 1;
  }
}
``` 

### Verdict on AOS

If you don't know - or don't want - to handle scroll logic and create animations yourself, AOS is a real time saver!

Not a great pick for users who need to disable or show different animations depending on screen sizes.

An alternative would be to create CSS animations ourselves and use the intersection observer API to listen to scroll. I made a There's a lightweight library built upon it with [sal.js](https://github.com/mciastek/sal).
> Performance focused, lightweight (less than 2.8 kb) scroll animation library, written in vanilla JavaScript. No dependencies!
I'll definitely write an intro post on it later.

# Rellax

[Rellax](https://dixonandmoe.com/rellax/) is a parallax library that works in both desktop & mobile (parallax is famous for not working on mobile).

### Pros

#### Super easy to implement.

* Add a class to an element:
``` html
<div class="rellax">
  I’m slow and smooth
</div> 
```

* And initialize rellax by referring to that class in js: 
``` js
var rellax = new Rellax('.rellax'); 
```

With reactJS, you can use refs instead of classes.

* Customizable with data attributes. 

For example, the following code is used to play the parallax at different speed on mobile and pc:
``` html
<div class="rellax" 
  data-rellax-speed="1" 
  data-rellax-mobile-speed="-10"
  data-rellax-desktop-speed="10">
  I’m slow on mobile but fast on pc!
</div> 
```

I've used it for the hero section of my site:

![hero section](/images/blog/review-on-rellax-for-parallax-and-aos-animate-on-scroll/0.gif)

### Cons

**Can be jerky**.

![jumpy image](/images/blog/review-on-rellax-for-parallax-and-aos-animate-on-scroll/1.gif)

The image can jump a bit once in a while. It gets much worse when trying to record it (My AMD processor is like an old i3 😄).

### Verdict on Rellax

If you tried parallax before, you know how hard it is to get parallax working on mobile. Rellax is a real time saver if you don't mind occasional jumps 😅.

An alternative would be to use gsap with [scrollTrigger plugin](https://greensock.com/scrolltrigger).

### Thanks for reading 😄✨!!

Please share what you agree & disagree on.

And tell me what js/react libraries you use the most 😍.
