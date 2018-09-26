import {
  isObject,
  isFunction,
  isArray,
  isNull,
  compose,
  objmap
} from "./functional";

const reformat_d = depth => item => reformat(item, depth);

const reformat = (item, depth = 3) => {
  switch (true) {
    case depth === 0:
      return "CURTAILED FOR DEPTH";
    case isNull(item):
      return item;
    case isObject(item):
      return objmap(item, reformat_d(depth - 1));
    case isFunction(item):
      return item.toString().split("\n")[0];
    case isArray(item):
      return item.map(reformat_d(depth - 1));
    default:
      return item;
  }
};

export const errlog_d = d => (...items) => {
  items.forEach(
    compose(
      console.log,
      reformat_d(d)
    )
  );
};

export const errlog = errlog_d(3);
