exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    //indexOf()
    return arr.indexOf(item);
  },

  sum: function (arr) {
    //reduce()
    let totalAmount = arr.reduce(function (a, b) {
      return a + b;
    });
    return totalAmount;
  },

  remove: function (arr, item) {
    //splice()
    for (let i = 0; i < arr.length; ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  removeWithoutCopy: function (arr, item) {
    //splice()??
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    const result = arr.filter((num) => num === item);
    return result.length;
  },

  duplicates: function (arr) {
    const result = arr.filter((item, index) => arr.indexOf(item) !== index);
    const uniqueResult = [...new Set(result)];
    return uniqueResult;
  },

  square: function (arr) {
    return arr.map(function (x) {
      return Math.pow(x, 2);
    });
  },

  findAllOccurrences: function (arr, target) {
    let indexes = [],
      i = -1;
    while ((i = arr.indexOf(target, i + 1)) != -1) {
      indexes.push(i);
    }
    return indexes;
  },
};
