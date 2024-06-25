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

  //you should be able to create a "partial" function
  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    };
  },

  //you should be able to use arguments
  useArguments: function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  //you should be able to apply functions with arbitrary numbers of arguments
  callIt: function (fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  //you should be able to create a "partial" function for variable number of applied arguments
  partialUsingArguments: function (fn) {
    let initialArgs = Array.prototype.slice.call(arguments, 1);

    return function () {
      let newArgs = Array.prototype.slice.call(arguments);
      let allArgs = initialArgs.concat(newArgs);
      return fn.apply(null, allArgs);
    };
  },

  //you should be able to curry existing functions
  curryIt: function (fn) {
    let arity = fn.length;

    function curryHelper(fn, args) {
      return function (arg) {
        let newArgs = args.concat(arg);
        if (newArgs.length >= arity) {
          return fn.apply(null, newArgs);
        } else {
          return curryHelper(fn, newArgs);
        }
      };
    }

    return curryHelper(fn, []);
  },
};
