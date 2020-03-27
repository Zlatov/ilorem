# ILorem

A simple script to insert fish text in the tag. The script allows you to preserve the visibility of the HTML structure in the examples.

## Install

`yarn add ilorem`

## Usage

__Attach script__

```html
<script type="text/javascript" src="/<your_vendor_path>/dist/ilorem.js"></script>
```
Or with webpack:
```js
import "ilorem"
```

__Add lorem text into tag__

```html
<p ilorem></p>                <!-- Text from sentences consisting of 2-100 random words. -->
<p ilorem=123></p>            <!-- Text from sentences consisting of 123 random words. -->
<p ilorem="123"></p>
<p include-lorem="123"></p>

<img ilorem>                           <!-- 300x300 random image. -->
<img ilorem=640x480></p>               <!-- 640x480 random image. -->
<img ilorem=seed=user1></p>            <!-- 300x300 static image corresponding to seed "user1". -->
<img ilorem="800x200?seed=user1"></p>  <!-- 800x200 static image corresponding to seed "user1". -->
```
