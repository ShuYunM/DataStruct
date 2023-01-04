/**
 * @description: 数据类型检测
 * @param {*} data 传入的待检测数据
 * @return {*} 返回数据类型
 */
function getType (data) {
  // TODO：待补充代码
  if (typeof data === "string") {
    return "string";
  }
  if (typeof data === "number") {
    return "number";
  }
  if (typeof data === "boolean") {
    return "boolean";
  }
  if (typeof data === "function") {
    return "function";
  }
  if (typeof data === "undefined") {
    return "undefined";
  }
  if (typeof data === "bigint") {
    return "bigint";
  }
  if (data === null) {
    return "null";
  }
  if (typeof data === "symbol") {
    return "symbol";
  }
  if (Array.isArray(data)) {
    return "array";
  }
  if (data instanceof Date) {
    return "date";
  }
  if (data instanceof Map) {
    return "map";
  }
  if (data instanceof Set) {
    return "set";
  }

  if (data instanceof RegExp) {
    return "regExp";
  }
  if (data instanceof Object) {
    return "object";
  }
}

console.log(getType({}));
console.log(getType(/a/));

let city = [
  {
    label: "武汉市",
    children: [
      {
        label: "汉阳区",
        children: [{ label: "永丰街道" }, { label: "某某街道" }],
      },
      {
        label: "江夏区",
        children: [{ label: "安山街道" }, { label: "山坡街道" }],
      },
    ],
  },
];

const values = "山坡";
let a = [];
function getCity (data, item) {
  data.forEach((value) => {
    let parent;
    if (value.label.indexOf(item) !== -1) {
      a.push(value.label);
    } else {
      if (value.children) {
        console.log(value.label);
        a.push(value.label);
        getCity(value.children, item);
      }
    }
  });
}
getCity(city, values);
console.log(a);

var longestPalindrome = function (s) {
  let str = "";
  for (let i = 0, start = 0, end = 0; i < s.length; i++) {
    start = i;
    end = i;
    while (end + 1 < s.length && s[end + 1] === s[i]) {
      end += 1;
    }
    while (start - 1 >= 0 && end + 1 < s.length && s[end + 1] === s[start - 1]) {
      end += 1;
      start -= 1;
    }
    if (end > start && str.length < end - start + 1) {
      str = s.slice(start, end + 1);
    }
  }
  return str ? str : s[0];
};

console.log(longestPalindrome("babadablll"));


