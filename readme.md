#  Essage

> a more elegant way to show message / tips.

-------------------------

- Live demo [http://sofish.github.io/essage/](http://sofish.github.io/essage/)
- Browser support: tested under IE6+, Firefox, Chrome, Safari, Mobile Safari
- Light, Elegant, No hard dependency

-------------------------

![72913732-3232-49d1-ac6b-cfcc8035cefd](https://f.cloud.github.com/assets/153183/1231987/9daee03c-287f-11e3-97e1-f8a66d425814.png)

-------------------------

### 1. installaion

Place the js/css file on you page, and use the `Essage` object to manage your message:

```html
<link rel="stylesheet" href="essage.css">
<script src="essage.js"></script>
```

### 2. API: `show` or `hide`

**show(message)** show message

 ```js
 // The argument `message` can be html(string).
 Essage.show('<b>hello</b>, im a message.');
 ```

**hide()** hide message

 ```js
 Essage.hide();
 ```

**config**: provide configurations

 ```js
 var config = {
   message: 'message body',

   // add class `essage-success` to the container
   // by default, there're 4 status: normal, warning, success, error
   status: 'success',

   // the placement can be `top` or `bottom`, by default is `top`
   placement: 'bottom'

   // duration in ms
   // provide _negative_ number to always show if default duration is set
   duration: 1000
 };

 Essage.show(config);
 ```

**default()** set default duration

 ```js
 Essage.default({duration: 3000});
 Essage.show('message');
 ```

### 3. MIT licence

Licensed under MIT. [liccese.txt](https://github.com/sofish/essage/blob/master/license.txt)




