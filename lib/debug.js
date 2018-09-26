var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var raw = func.toString();
  console.log("raw func", raw);
  var fnStr = func.toString().replace(STRIP_COMMENTS, "");
  var result = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];
  return result;
}

const reformat = (item, depth = 3) => {
  if (depth === 0) {
    // console.log("d");
    return "TOO DEEP";
  }
  if (typeof item === "object") {
    // console.log("o");
    const ret = {};
    for (let k in item) {
      ret[k] = reformat(item[k], depth - 1);
    }
    return ret;
  }
  if (typeof item === "function") {
    // console.log("f");
    // const parms = getParamNames(item).join(", ");
    // return `Function: ${item.name}(${item.length}: ${parms})`;
    // return item.toString().split("\n")[0];
    var raw = item.toString();
    var rows = raw.split("\n");
    // console.log(rows);
    // console.log("rawed");
    return rows[0];
  }
  if (Array.isArray(item)) {
    // console.log("a");
    return item.map(reformat(item));
  }
  //   console.log("i");
  return item;
};

export const errlog = (...content) => {
  for (let i in content) {
    const item = content[i];
    console.log(reformat(item));
  }
};
