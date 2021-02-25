---
title: "Introduction to CSS Animations"
tags: [ "review", "javascript", "libraries", "animation", "css" ]
date: "2021-01-17"
author: "JC Lee"
cover: "/images/blog/review-on-rellax-for-parallax-and-aos-animate-on-scroll/cover-1.png"
description: "AOS is a very popular scroll animation library but it has some unexpected shortcomings with responsive design. Rellax is a rising star for parallax animations on desktop and mobile.
I wrote this review after playing with both on a react website project."
---

This post is intended for people who've never played with a red box in CSS. As a matter of fact, here's the red box 😄:

![red box](https://dev-to-uploads.s3.amazonaws.com/i/lb4w44q1eisp5wvmutk1.png)

HTML:
```html
<div class="box"></div>
```

CSS:
```CSS
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Animations in CSS are done with **transitions** and **animations**.

Transitions are used for less complicated animations, mainly to **move from one stage to another**.

Let's use transition to animate the red box's `background-color` from red to blue on hover.

First let's add the hover class:

```CSS
.box:hover {
  background-color: blue;
}
```

Without transition we get:

![no transition](https://dev-to-uploads.s3.amazonaws.com/i/cthgum3wrgfqqoyda4nv.gif)

Now let's see how we can animate that with transitions.

Transitions have **4 properties**: transition-property, transition-duration, transition-timing-function, transition-delay.

* `transition-property`: takes the name of the CSS properties you want to add a transition effect to, like transform, color, width. Default to **all** which means it will animate all properties changes.

Let's set `transition-property` to **background-color** to detect changes in the background color for our box.

```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  transition-property: background-color;
}
```

To animate multiple properties, separate them with commas:

```CSS
.box{
  /* ... */
  /* animate changes in background-color, color and opacity */
  transition-property: background-color, color, opacity;
}
```

Or with the keyword **all**:

```CSS
.box{
  /* ... */
  /* animate changes to everything */
  transition-property: all;
}
```

* `transition-duration`: takes the duration in seconds (s) or milliseconds (ms) of the transition. Default to **0s**. So we need to change it to get a transition running.

Let's add a `transition-duration` of **2.5s** to our box.

```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  transition-property: background-color;
  /* run transition for 2.5s */
  transition-duration: 2.5s;
}
```
We get this:

![transition](https://dev-to-uploads.s3.amazonaws.com/i/9eubwynlbb73mtib8aju.gif)

* `transition-timing-function`: is used to choose a type of speed curve to use. The default is **ease** (slow start, then fast, then slow end). There is also **linear**, **ease-in**, **ease-in-out**, **ease-out**. And you could also make your own with [cubic-bezier function](https://www.w3schools.com/cssref/func_cubic-bezier.asp) (but that's beyond the scope of this tutorial).

Comparison of different `transition-timing-function` values.
![timing function](https://dev-to-uploads.s3.amazonaws.com/i/1jwi9kn81d35lxv2daay.gif)
Let's set the `transition-timing-function` to **linear** for our box.

```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  transition-property: background-color;
  /* run transition for 2.5s */
  transition-duration: 2.5s;
  /* set the speed curve to linear */
  transition-timing-function: linear;
}
```

* `transition-delay`: adds a delay before starting the transition. The default is **0s**.

Let's set a `transition-delay` of **2s**.

```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  transition-property: background-color;
  /* run transition for 2.5s */
  transition-duration: 2.5s;
  /* set the speed curve to linear */
  transition-timing-function: linear;
  /* add a 2s initial delay */
  transition-delay: 2s;
}
```
We get this:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/edvsb0jiizxxpsmb9k20.gif)

To sum up, we give css properties to **transition-property** to watch. When changes on those properties are detected, a transition will be played from the old values to the new values. We set how long it runs with **transition-duration**. We can customize the animation speed curve with **transition-timing-function** and add a delay with **transition-delay**.

There's a shorthand for those 4 properties: `transition`.

### The transition property

**transition** is a shorthand property for **transition-property**, **transition-duration**, **transition-timing-function**, **transition-delay** in that order:

transition: property duration timing-function delay;

It's default values are the same: `transition: all 0s ease 0s;`

*Note*: Although the default for `transition-property` is **all**, most devs write the **all**. For example, `transition: all 2s;` instead of `transition: 2s;`.

By replace the four transition properties of *box* with `transition` we get:

```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  /* run transition for 2.5s */
  /* set the speed curve to linear */
  /* add a 2s initial delay */
  transition: background-color 2.5s linear 2s;
}
```

What if we also wanted to rotate that box? 
We can add a rotate effect on hover, let's add a rotation of 180deg:
```CSS
.box:hover {
  background-color: blue;
  transform: rotate(180deg);
}
```
And change `transition` transition-property to **all**:

```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  /* run transition for 2.5s */
  /* set the speed curve to linear */
  /* add a 2s initial delay */
  transition: all 2.5s linear 2s;
}
```
The default rotation is 0deg so transition will detect the change and animate it:
![all transition](https://dev-to-uploads.s3.amazonaws.com/i/ubdm2sg3b05l2m4atbn4.gif)

If we want `background-color` to transition differently from `transform`, we can't use **all**. We need to add both background-color and transform to transition, separated by a comma:
```CSS
.box{
  /* ... */
  /* animate changes in background-color */
  /* run transition for 2.5s */
  /* set the speed curve to linear */
  /* add a 2s initial delay */
  /* animate changes in transform  */
  /* run transition for 1.5s */
  /* set the speed curve to ease */
  /* add a 4s initial delay */
  transition: background-color 2.5s linear 2s, transform 1.5s ease 4s;
}
```
We get:
![different transition](https://dev-to-uploads.s3.amazonaws.com/i/rp75yfvlqza3m7k686qe.gif)

Note: we don't have to specify every property of transition. We can skip those we won't change.

Examples:

* `transition: transform 0.3s;` => transition on transform change for a duration of 0.3s. By default, transition-timing-function is set to ease and transition-delay to 0s.

* `transition: width 5s 1s;` => transition on width change for a duration of 5s and with a transition-delay of 1s.

* `transition: 0.5s;` => transition on all properties change for a duration of 0.5s.

* `transition: all 1s linear;` => transition on all properties change for a duration of 1s and a timing-function set to linear.

That concludes our little introduction to transitions. Now let's have a look at the other way to animate in CSS.

# CSS Animation

Animations with keyframes are more suited for complex animations.
There are 7 properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode.

* `animation-name` takes the name of a keyframes.

@keyframes is a css rule that controls the steps of an animation.
It's basic syntax is:

```CSS
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

* `fadeIn` is an arbitray name we gave to the keyframes. 

* This keyframes will animate the opacity from 0 when the animation begins to 1 when the animation ends.

Tip: some prefer to use the from / to syntax:

```CSS
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

The above does exactly the same, from <=> 0% and to <=> 100%.

* With keyframes we can:
    * define as many keyframes as we want from 0 to 100%.
    * animate as many properties as we want.
    * and no need to have the same properties on each keyframe.
    * skip 0 or 100% - although it's not recommended because of compatibility issues.

```CSS
@keyframes weirdAnim {
  0% { background-color: pink; }
  11% { 
    color: orange;
    padding: 2rem;
  }
  50% { font-size: 1.5rem; }
  66% { transform: rotate(-90deg); }
  99% { background-color: indigo; }
  100% { 
    background-color: orange;
    color: pink;
  }
}
```
Animating this keyFrames we get:
![weird anim](https://dev-to-uploads.s3.amazonaws.com/i/md72o5j92ht02vdy6dc0.gif)

We will animate the red box's background color to the colors of the rainbow:
```CSS
@keyframes rainbow {
  0% { background-color: red; }
  20% { background-color: orange; }
  35% { background-color: yellow; }
  50% { background-color: green; }
  60% { background-color: blue; }
  80% { background-color: indigo; }
  100% { background-color: violet; }
}
```
Now to add this animation to our box we will add `animation-name` and set it to the keyframes' name:
```CSS
.box{
  /* ... */
  animation-name: rainbow;
}
```

Similar to transitions we have:

* `animation-duration` which sets the duration of the animation. The default is **0s**.
Let's set a duration of 5s to our box:
```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
}
```

* `animation-timing-function` which sets the speed curve of the animation. The default is **ease**.
Let's add an ease-in-out timing-function to our box:
```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
}
```

* `animation-delay` which sets the initial delay. The default is **0s**.
Let's add a 1s delay to our box:
```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
}
```
We get:

![animation](https://dev-to-uploads.s3.amazonaws.com/i/98m809bdhh1xhize91s6.gif)

* Note how the box background-color jumps back to red after the animation has ended.

The last three are specific to animations:

* `animation-iteration-count` sets the number of times we want to play the animation. The default is **1**. We can make an animation run indefinitely by setting this property to **infinite**.
Let's choose to run it 3 times:
```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
}
```

* `animation-direction` sets how we want the animation to play. The values are: **normal**, **reverse**, **alternate** and **alternate-reverse**. 
    * **normal** starts from the 1st keyframe.
    * **reverse** starts from the last keyframe.
    * **alternate** starts from the 1st keyframe but if the animation is repeated the next animation will go backward.
    * **alternate-reverse** is the same as alternate except it starts from the last keyframe.

Here's an [example by w3schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_animation-direction). The default is **normal**. We are going to choose alternate.
```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```
* `animation-fill-mode` specifies a style for the element when the animation is not playing. It can be set to **forwards** to take the values of the last keyframe. Or **backwards** to take the values of the first keyframe. Or **both**. The default is **none**.

Tip: **forwards** is often used after an animation has ended to keep it at that final state. Without it, the element that stopped animating would jump back to the state pre-animation.
Let's add a forwards fill mode to our box animation:
```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}
```
We get this:
![keyframes final animation](https://dev-to-uploads.s3.amazonaws.com/i/ccztxv7topyabioi3y6y.gif)

* On the 1st animation, it starts at red and ends on purple.

* On the 2nd animation, it runs backward because we set it to alternate so it starts at purple and ends on red.

* On the 3rd animation, it runs backward again so it starts at red and ends on purple. The background-color doesn't jump back to red after the animation ended beacuse we set the fill-mode to forwards.

To sum up, we use **@keyframes** to setup an animation. We refer to that keyframes by referring to its name in **animation-name**. We set how long it runs with **animation-duration**. We can customize the animation speed curve with **animation-timing-function** and add a delay with **animation-delay**.

We can also specify the number of times we want to run the animation with **animation-iteration-count**, change **animation-direction** to choose a direction to go through the keyframes and **animation-fill-mode** to change the animated's element style after animating.

There's a shorthand for those 7 properties: `animation`.

### The animation property

**animation** is a shorthand property for **animation-name**, **animation-duration**, **animation-timing-function**, animation-delay**, animation-iteration-count**, **animation-direction**, **animation-fill-mode** in that order:

animation: name duration timing-function delay iteration-count direction fill-mode;

It's default values are the same: `animation: none 0 ease 0 1 normal none;`

By replace the 7 animation properties of box with `animation` we get:

```CSS
.box{
  /* ... */
  animation: rainbow 5s ease-in-out 1s 3 alternate forwards;
}
```

Just like for transitions, we can skip the properties we won't change.

Examples:

* `animation: fadeIn 0.5s;` => run the @keyframes animation named fadeIn for 0.5s. By default, the timing-function is set to ease, the delay is 0s, the iteration-count is 1, the direction is normal and the fill-mode is none.

* `animation: grow 2s forwards;` => run the @keyframes animation named grow for 2s will fill-mode set to forwards to preserve the final state.

* `animation: yoyo 0.3s infinite alternate;` => run the @keyframes animation named yoyo for 0.3s with an iteration-count set to infinite and a direction set to alternate.

That concludes our little introduction to keyframes animations.

# After words.

* Not every property can be animated. You can't animated display change from inline to block for example. When in doubt, check [this MDN list of animatable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

* Be careful of what you are animating. It sucks but mobiles that can play the latest games fine can lag on simple animations 🤷‍♀️. **transform** and **opacity** get a CPU boost on mobile. So instead of changing font-size, use transform: scale(); and instead of changing left, right, top, bottom use transform: translateY() and transform: translateX().

* I've skipped `steps` for `transition-timing-function` and `animation-play-state` which aren't well supported || outside the scope of this intro.

#Thanks for reading!!