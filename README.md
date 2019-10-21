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

```
<p include-lorem="123"></p>
<p ilorem="123"></p>
<p ilorem></p> <!-- Random 2–100 words. -->
```
