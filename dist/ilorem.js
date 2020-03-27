;(function() {
  "use strict"

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1. 
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}


  function random(min, max) {
    return min + Math.floor((max - min + 1) * Math.random())
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  function probability(p) {
    return p != 0 && Math.random() <= p
  }
  function loremText(length) {
    var text = ""
    var lorems = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"]
    var ends = [".", ".", "!", "?"]
    var word
    var capitalize = true
    for (var i = 0; i < length; i++) {
      if (i != 0) {
        if (probability(0.2)) {
          text+= ","
        } else if (probability(0.25)) {
          capitalize = true
          text+= ends[random(0, ends.length - 1)]
        }
        text+= " "
      }
      word = lorems[random(0, lorems.length - 1)]
      if (capitalize) {
        word = capitalizeFirstLetter(word)
        capitalize = false
      }
      text+= word
    }
    text+= ends[random(0, ends.length - 1)]
    return text
  }
  function picsum(ilorem_string, i) {
    var size_x = "300"
    var size_y = "300"
    var random = i
    var seed = ""

    var size_regex = /[123456789]{1}\d{0,3}x[123456789]{1}\d{0,3}/i
    var size_exist = size_regex.test(ilorem_string)
    if (size_exist) {
      var size = ilorem_string.match(size_regex)
      if (size != null && size[0] != null) {
        var size_array = size[0].split(/x/i)
        if (size_array[0] != null && size_array[1] != null) {
          [size_x, size_y] = size_array
        }
      }
    }

    var random_regex = /random=\d+/i
    if (random_regex.test(ilorem_string)) {
      var ilorem_random = ilorem_string.match(random_regex)
      if (ilorem_random != null && ilorem_random[0] != null) {
        ilorem_random = ilorem_random[0].match(/\d/)
        if (ilorem_random != null && ilorem_random[0] != null) {
          random = ilorem_random[0]
        }
      }
    }

    var seed_regex = /seed=[^&]+/i
    if (seed_regex.test(ilorem_string)) {
      var ilorem_seed = ilorem_string.match(seed_regex)[0]
      ilorem_seed = ilorem_seed.match(/=([^&]+)/)[1]
      if (ilorem_seed != null && Object.prototype.toString.call(ilorem_seed) === '[object String]') {
        seed = ilorem_seed
      }
    }

    var picsum = "https://picsum.photos/"
    if (seed.length > 0) {
      picsum += "seed/" + seed + "/"
    }
    picsum += size_x + "/" + size_y
    picsum += "?random=" + random

    return picsum
  }

  window.ILorem = function() {
    var all // DOM элементы
    var e   // --//--
    var i   // --//--
    var l   // --//--
    var lorem_length, has_ilorem
    all = document.getElementsByTagName("*")
    for (i = 0, l = all.length; i < l; i++) {
      e = all[i]
      has_ilorem = e.hasAttribute("include-lorem") || e.hasAttribute("ilorem")
      if (!has_ilorem) {
        continue
      }
      var ilorem_value = e.getAttribute("include-lorem") || e.getAttribute("ilorem")
      if (e.tagName == "IMG") {
        e.setAttribute("src", picsum(ilorem_value, i))
        continue
      }
      lorem_length = ilorem_value || random(2, 100).toString()
      if (
        lorem_length == null ||
        Object.prototype.toString.call(lorem_length) !== "[object String]"
      ) {
        continue
      }
      lorem_length = parseInt(lorem_length)
      if (isNaN(lorem_length)) {
        continue
      }
      e.innerHTML = loremText(lorem_length)
    }
  }

  window.onload = function() {
    window.ILorem()
  }

})();
