const clean = (str) => {
  const sreg = /[\t|\x20\u3000|\s]+/g;
  const zreg =
    /[Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝]/g;
  return str
    .replace(sreg, " ")
    .replace(zreg, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
    .replace(/[‐－―]/g, "-")
    .replace(/[～〜]/g, "~");
};
const trim = (str) => clean(str).replace(/^\s+|\s+$/g, "");

const toParam = (str) => {
  const reg = /\s*[||,|+]\s*/g;
  return trim(str)
    .replace(/\s*[=|:]\s*/g, "=")
    .replace(/\s*!=\s*/g, "!=")
    .replace(reg, "+")
    .replace(/\s/g, "&");
};

const toQuery = (param) => {
  return [...new URLSearchParams(param).entries()]
    .filter((val) => {
      if (val[1] === "undefined") {
        return false;
      }
      return true;
    })
    .reduce((obj, e) => {
      const val = e[1].indexOf(" ") > -1 ? e[1].split(" ") : e[1];
      return {
        ...obj,
        [e[0]]: val ? val : true,
      };
    }, {});
};

export default {
  clean,
  trim,
  toParam,
  toQuery,
};
