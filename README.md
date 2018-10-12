ILorem
===

A simple script to insert fish text in the tag. The script allows you to preserve the visibility of the HTML structure in the examples.

Install
---

`yarn install ilorem`

Usage
---

__Attach script__

```
  <script type="text/javascript" src="/<your_vendor_path>/dist/ilorem.js"></script>
  <script type="text/javascript">
    ILorem();
  </script>
```

__Add lorem text into tag__

```
<p include-lorem="120">
```

__Possible lorem lengths now__

1, 2, 3, 5, 10, 11, 12, 13, 15, 20, 30, 50, 100, 110, 120, 130, 150, 200, 300, 500, 1000.
