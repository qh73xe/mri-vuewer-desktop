import utils from "@/utils/text.js";

describe("utils/text", () => {
  it("clean", () => {
    const text =
      "Ａ-Ｚａ-ｚ０-９！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜";
    const ans = "A-Za-z0-9!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|";
    expect(utils.clean(text)).toBe(ans);
  });
  it("trim", () => {
    const text = " this is a pen. ";
    const ans = "this is a pen.";
    expect(utils.trim(text)).toBe(ans);
  });
  it("toParam", () => {
    const text = " key1 = hoge, foo key2 = foo ";
    const ans = "key1=hoge+foo&key2=foo";
    expect(utils.toParam(text)).toBe(ans);
  });
  it("toQuery", () => {
    const param = {
      key1: "hoge",
      key2: 1,
      key3: undefined,
      key4: null,
      key5: 0,
      key6: false,
      key7: ["hoge", "foo"],
    };
    const ans = {
      key1: "hoge",
      key2: "1",
      key4: "null",
      key5: "0",
      key6: "false",
      key7: "hoge,foo",
    };
    expect(utils.toQuery(param)).toStrictEqual(ans);
  });
});
