export const isObject = o => typeof o === "object";
export const isFunction = f => typeof f === "function";
export const isArray = a => Array.isArray(a);
export const isNull = n => n === null;

export const compose = (...fns) =>
  fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    value => value
  );

export const objmap = (obj, f) => {
  const ret = {};
  for (let k in obj) {
    ret[k] = f(obj[k], k);
  }
  return ret;
};
