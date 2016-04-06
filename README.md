# JS Piano

A fun project that i did to demonstrate the power of JS !! I am using the power of audioContext. That's why you will only be able to see it under chrome os firefox for now.

  - You can play any track you want
  - Define as many divs you want to make instances
  - You can define the size of your midi !
  - Style away with the css your unique piano.
  - Listen my demo of coldplay (scientist) -- without even a lesson !!
  - happy playing !

### DEMO

Try out the [demo] online

[demo]: <http://codepen.io/panvourtsis/pen/xVPMvo>

### Installation

You only need to define it on html and js with jquery.

```html
<div class="piano piano-instance-1"></div>
```

```js
$(".piano-instance-1").piano();
```

and you are good to go!

You can also use the tone option to make the piano larger or smaller !

```js
$(".piano-instance-1").piano({
    tone: 2
});
```

### Version
1.0.0
