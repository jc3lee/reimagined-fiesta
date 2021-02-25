---
title: "Introduction to CSS Animations"
tags: [ "tutorial", "codenewbies", "animation", "css" ]
date: "2020-09-15"
author: "JC Lee"
cover: "/images/blog/introduction-to-css-animations/cover-1.png"
description: "This tutorial is intended for people with little or no knowledge on CSS animations. We'll learn about the two ways of adding animation in CSS: transitions and animations with keyframes.
Transitions are used for less complicated animations, to move from one stage to another. Animations with keyframes are more suited for complex animations."
---

This tutorial is intended for people who've never played with a red box in CSS. As a matter of fact, here's the red box 😄:

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

Animations in CSS are done with **transitions** and **animations with keyframes**.

## Transitions

Transitions are used for less complicated animations, mainly to **move from one stage to another**.

Let's use transition to animate the red box's `background-color` from red to blue on hover.

First let's add the `hover` pseudo-class:

```CSS
.box:hover {
  background-color: blue;
}
```

Without transition we get:

![no transition](https://dev-to-uploads.s3.amazonaws.com/i/cthgum3wrgfqqoyda4nv.gif)

Now let's spice it up with transitions.

Transitions have **4 properties**:

* `transition-property`: takes the names of the CSS properties you want to add a transition to. Like transform, color, opacity. Defaults to **all** meaning add a transition to every property that can be animated.

Let's track the `background-color` for our box. 

```CSS
.box{
  transition-property: background-color;
}
```

To target multiple properties, separate them with commas:

```CSS
.box{
  transition-property: background-color, color, opacity;
}
```

Or with the keyword **all**:

```CSS
.box{
  transition-property: all;
}
```

* `transition-duration`: takes the duration in seconds (s) or milliseconds (ms) of the transition. Defaults to **0s**, meaning no transition.

Our transition animation will run for `2.5s`.

```CSS
.box{
  transition-property: background-color;
  transition-duration: 2.5s;
}
```
We get this:

![transition](https://dev-to-uploads.s3.amazonaws.com/i/9eubwynlbb73mtib8aju.gif)

* `transition-timing-function`: is used to choose a type of speed curve to use. Defaults to **ease** (slow start, fast middle, slow end). There are also **linear**, **ease-in**, **ease-in-out** and **ease-out**. Or make your own `transition-timing-function` with a [cubic-bezier function](https://www.w3schools.com/cssref/func_cubic-bezier.asp).


![timing function](https://dev-to-uploads.s3.amazonaws.com/i/1jwi9kn81d35lxv2daay.gif)

Let's set it to **linear** for our box.

```CSS
.box{
  transition-property: background-color;
  transition-duration: 2.5s;
  transition-timing-function: linear;
}
```

* `transition-delay`: adds a delay before starting the transition. The default is **0s**.

We'll add a `2s` delay.

```CSS
.box{
  transition-property: background-color;
  transition-duration: 2.5s;
  transition-timing-function: linear;
  transition-delay: 2s;
}
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/edvsb0jiizxxpsmb9k20.gif)

To sum up, we give css properties to **transition-property** to watch. When changes on those properties are detected, a transition will be played from the old values to the new values. We set how long it runs with **transition-duration**. We can customize the animation speed curve with **transition-timing-function** and add a delay with **transition-delay**.

`transition` is a shorthand for those 4 properties in this order:

`transition: property duration timing-function delay;`

It's default values are the same: `transition: all 0s ease 0s;`

By replace the four transition properties of *box* with `transition` we get:

```CSS
.box{
  transition: background-color 2.5s linear 2s;
}
```

What if we also wanted to add another transition to our box, like a rotation? 

We'll add a rotation of 180deg on `hover`:

```CSS
.box:hover {
  background-color: blue;
  transform: rotate(180deg);
}
```
And change track every property changes with `all`:

```CSS
.box{
  transition: all 2.5s linear 2s;
}
```

Or by adding the transform transition with a comma:

```CSS
.box{
  transition: background-color 2.5s linear 2s, transform 2.5s linear 2s;
}
```

![all transition](https://dev-to-uploads.s3.amazonaws.com/i/ubdm2sg3b05l2m4atbn4.gif)

Separating with a comma is useful if we want the transitions to have different properties for example:

```CSS
.box{
  transition: background-color 2.5s linear 2s, transform 1.5s ease 4s;
}
```

![different transition](https://dev-to-uploads.s3.amazonaws.com/i/rp75yfvlqza3m7k686qe.gif)

Note: we don't have to specify every property of transition. For example:

* `transition: transform 0.3s;` => transition on transform change for a duration of 0.3s. ( Defaults: `transition-timing-function: ease` and `transition-delay: 0s`).

* `transition: width 5s 1s;` => transition on width change for a duration of 5s and with a transition-delay of 1s. ( Defaults: `transition-timing-function: ease`).

* `transition: 0.5s;` => transition for a duration of 0.5s. ( Defaults: `transition-property: all`, `transition-timing-function: ease` and `transition-delay: 0s`).

* `transition: all 1s linear;` => transition on all properties change for a duration of 1s and a timing-function of linear. ( Defaults: `transition-delay: 0s`).

That concludes our little intro to transitions. Now let's have a look at the other way to animate in CSS.

## CSS Animation

Animations with keyframes are more suited for complex animations.
There are 7 properties:

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
    * skip 0 or 100% - although it's not recommended because of possible compatibility issues.

The following will work:

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

.box{
  animation-name: weirdAnim;
  animation-duration: 5s;
}
```

![weird anim](https://dev-to-uploads.s3.amazonaws.com/i/md72o5j92ht02vdy6dc0.gif)

Now that we've seeen what's possible with keyframes let's use them to add a rainbow animation to our box.

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

.box{
  animation-name: rainbow;
}
```

Next we need to set a duration to get it running:

* `animation-duration` sets the duration of the animation. Defaults to **0s**.

Let's make it run for `5s`.

```CSS
.box{
  animation-name: rainbow;
  animation-duration: 5s;
}
```

* `animation-timing-function` sets the speed curve of the animation. Defaults to **ease**. Beside the basics (linear, ease-in, ease-out, etc), there is also a special timing function called steps.

`steps` are a recent addition to css. They break the flow of an animation by playing it in jumping steps. The only difference between the two animations below is the addition of steps on the 2nd div.

![jumping steps](https://codepen.io/ljc-dev/pen/xxRpwbE?editors=1100)

We'll use `ease-in-out` timing-function.

```CSS
.box{
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
}
```

* `animation-delay` sets the initial delay. Defaults to **0s**.

Let's add a `1s` delay.

```CSS
.box{
  /* ... */
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
}
```
Result:

![animation](https://dev-to-uploads.s3.amazonaws.com/i/98m809bdhh1xhize91s6.gif)

* `animation-iteration-count` sets the number of times an animation should play. The default is **1**. **infinite** makes it run indefinitely.

We'll run our animation `3` times.

```CSS
.box{
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
([example from w3schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_animation-direction)). Defaults to **normal**. We are going to choose alternate.

```CSS
.box{
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-direction: alternate;
}
```

* `animation-fill-mode` specifies a style for the element when the animation is not playing. It can be set to **forwards** to take the values of the last keyframe. Or **backwards** to take the values of the first keyframe. Or **both**. The default is **none**.

**forwards** is often used after an animation has ended to keep it at that state. Without it, the element would jump back to the state pre-animation.

Let's add `forwards` to our animation:
```CSS
.box{
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}
```
Result:

![keyframes final animation](https://dev-to-uploads.s3.amazonaws.com/i/ccztxv7topyabioi3y6y.gif)

* On the 1st animation, it starts at red and ends on purple.

* On the 2nd animation, it runs backward from purple to red because we set it to `alternate`.

* On the 3rd animation, it goes again from red to purple. 

* The background-color doesn't jump back to red after the animation has ended beacuse of `forwards`.

To sum up, we use **@keyframes** to setup an animation. In **animation-name** we refer to those keyframes name to use it. We set the duration with **animation-duration**, the animation speed curve with **animation-timing-function** and add a delay with **animation-delay**.

We can also choose how many times we want to run an animation with **animation-iteration-count**, change direction with **animation-direction** and keep style outside of animation with **animation-fill-mode**.

`animation` is a shorthand for those 7 properties:

animation: name duration timing-function delay iteration-count direction fill-mode;

Defaults: `animation: none 0 ease 0 1 normal none;`

By replace the 7 animation properties of box with `animation` we get:

```CSS
.box{
  animation: rainbow 5s ease-in-out 1s 3 alternate forwards;
}
```

Just like for transitions, we can skip the properties we won't change.

Examples:
* `transition: 0.5s;` => transition for a duration of 0.5s. ( Defaults: `transition-property: all`, `transition-timing-function: ease` and `transition-delay: 0s`).

* `animation: fadeIn 0.5s;` => run the @keyframes animation named `fadeIn` for 0.5s. ( Defaults: `animation-iteration-count: 1`, `animation-timing-function: ease`, `animation-delay: 0s`,`animation-direction: normal` and `animation-fill-mode: none` ).

And that's it! Now you should be able to start making your own animations.

### Thanks for reading!!

That was my longest tutorial and probably the most boring one. I should have taken a less saying more showing approach. Anyway, I hope you've enjoyed it 😅. A few after words:

* Not every property can be animated. Fr example, you can't animated display change from inline to block. When in doubt, check this [MDN list of animatable properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

* Be careful of mobile lags with animations. **transform** and **opacity** get a CPU boost on mobile. So instead of updating `font-size`, use `transform: scale()` and instead of updating `left`, `right`, `top`, `bottom` use `transform: translateY()` and `transform: translateX()`.

Happy coding 👋!