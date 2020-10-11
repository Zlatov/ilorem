[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e97e6900c72c467fb3bf9aea7c96fc17)](https://www.codacy.com/manual/Zlatov/ilorem/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Zlatov/ilorem&amp;utm_campaign=Badge_Grade)

__Select language README.md__

-   en [English](README.md)
-   ru [Русский](README-ru.md)

# ILorem

A package for automatically generating placeholder text and images, allows you
to keep the HTML structure clean during development.

The [picsum.photos](https://picsum.photos) service is used to insert images.

## Install

`yarn add ilorem`

## Usage

__Import using webpack__

```js
import "ilorem"
```

__Or attach the script manually__

```html
<script type="text/javascript" src="/<your_vendor_path>/dist/ilorem.js"></script>
```

__Add texts__

```html
<p ilorem></p>                <!-- Text from sentences consisting of 2-100 random words. -->
<p ilorem=123></p>            <!-- Text from sentences consisting of 123 random words. -->
<p ilorem="123"></p>
```

__Add images__

```html
<img ilorem>                           <!-- 300x300 random image. -->
<img ilorem=640x480></p>               <!-- 640x480 random image. -->
<img ilorem=seed=user1></p>            <!-- 300x300 static image corresponding to seed "user1". -->
<img ilorem="800x200?seed=user1"></p>  <!-- 800x200 static image corresponding to seed "user1". -->
```
