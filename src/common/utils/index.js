export function debunce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn(args);
      // console.log("---");
    }, delay);
  };
}
