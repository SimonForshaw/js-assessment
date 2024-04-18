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
    /*let index = arr.indexOf(item);
    if (index > -1) {
      arr.splice(index, 1);
    }*/

    /*var i = 0;
      while (i < arr.length) {
        if (arr[i] === item) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }*/

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
    for (let i = 0; i < arr.length; ) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
    return arr;
  },

  append: function (arr, item) {},

  truncate: function (arr) {},

  prepend: function (arr, item) {},

  curtail: function (arr) {},

  concat: function (arr1, arr2) {},

  insert: function (arr, item, index) {},

  count: function (arr, item) {},

  duplicates: function (arr) {},

  square: function (arr) {},

  findAllOccurrences: function (arr, target) {},
};
