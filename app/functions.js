exports = typeof window === "undefined" ? global : window;

exports.functionsAnswers = {
  //you should be able to use an array as arguments when calling a function
  argsAsArray: function (fn, arr) {
    return fn(...arr);
  },
  //you should be able to change the context in which a function is called
  speak: function (fn, obj) {
    return fn.call(obj);
  },

  //you should be able to return a function from a function
  functionFunction: function (str) {
    return function (secondStr) {
      return str + ", " + secondStr;
    };
  },

  //you should be able to use closures
  makeClosures: function (arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      (function (value) {
        result.push(function () {
          return fn(value);
        });
      })(arr[i]);
    }

    return result;
  },

  partial: function (fn, str1, str2) {},

  useArguments: function () {},

  callIt: function (fn) {},

  partialUsingArguments: function (fn) {},

  curryIt: function (fn) {},
};
