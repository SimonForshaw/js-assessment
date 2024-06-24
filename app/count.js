exports = typeof window === "undefined" ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let count = start;
    let intervalId;

    function startCounting() {
      console.log(count);
      count++;
      if (count > end) {
        clearInterval(intervalId);
      }
    }

    intervalId = setInterval(startCounting, 100);

    console.log(count);
    count++;

    return {
      cancel: function () {
        clearInterval(intervalId);
      },
    };
  },
};
