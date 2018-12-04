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

  window.ILorem = function() {
    var all // DOM элементы
    var e   // --//--
    var i   // --//--
    var l   // --//--
    var lorem_length
    all = document.getElementsByTagName("*")
    for (i = 0, l = all.length; i < l; i++) {
      e = all[i]
      lorem_length = e.getAttribute("include-lorem")
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

})();
