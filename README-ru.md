[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e97e6900c72c467fb3bf9aea7c96fc17)](https://www.codacy.com/manual/Zlatov/ilorem/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Zlatov/ilorem&amp;utm_campaign=Badge_Grade)

__Выбрать язык README.md__

-   en [English](README.md)
-   ru [Русский](README-ru.md)

# ILorem

Пакет для автоматической генерации текста-заполнителя и изображений, позволяет
во время разработки сохранить чистоту HTML структуры.

Для вставки изображений используется сервис [picsum.photos](https://picsum.photos).

## Установка

`yarn add ilorem`

## Использование

__Импортировать используя webpack__:

```js
import "ilorem"
```

__Или присоединить скрипт вручную__

```html
<script type="text/javascript" src="/<your_vendor_path>/dist/ilorem.js"></script>
```

__Добавить тексты__

```html
<p ilorem></p>                <!-- Текст из предложений, состоящий из 2-100 случайных слов. -->
<p ilorem=123></p>            <!-- Текст из предложений, состоящий из 123 случайных слов. -->
<p ilorem="123"></p>
```

__Добавить изображения__

```html
<img ilorem>                           <!-- 300x300 случайное изображение. -->
<img ilorem=640x480></p>               <!-- 640x480 случайное изображение. -->
<img ilorem=seed=user1></p>            <!-- 300x300 фиксированное изображение, соответствующее идентификатору «user1». -->
<img ilorem="800x200?seed=user1"></p>  <!-- 800x200 фиксированное изображение, соответствующее идентификатору «user1». -->
```
