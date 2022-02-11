var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RangeTimeOptions: () => RangeTimeOptions_default
});

// src/Component/RangeTimeOptions/index.tsx
var import_react = __toESM(require("react"));
var import_antd = require("antd");
var import_moment = __toESM(require("moment"));
var { RangePicker } = import_antd.DatePicker;
var RangeTimeOptions = ({ value = {}, onChange, initValue }) => {
  const { time = [], radio = null } = value;
  const timeChange = (0, import_react.useCallback)((moments, dateStrings) => {
    onChange && onChange({ time: dateStrings, radio: null });
  }, [onChange]);
  const radioChange = (0, import_react.useCallback)((e) => {
    const val = e.target.value;
    const format = "YYYY-MM-DD";
    let t = [];
    switch (val) {
      case 15:
        t = [
          (0, import_moment.default)().subtract(15, "day").format(format),
          (0, import_moment.default)().format(format)
        ];
        break;
      case 30:
        t = [
          (0, import_moment.default)().subtract(30, "day").format(format),
          (0, import_moment.default)().format(format)
        ];
        break;
      case -1:
        t = ["", ""];
        break;
    }
    onChange && onChange({ time: t, radio: val });
  }, [onChange]);
  const timeVal = time == null ? void 0 : time.map((t) => t ? (0, import_moment.default)(t) : "");
  return /* @__PURE__ */ import_react.default.createElement(import_antd.Space, {
    size: 16
  }, /* @__PURE__ */ import_react.default.createElement(RangePicker, {
    onChange: timeChange,
    value: timeVal,
    allowClear: true
  }), /* @__PURE__ */ import_react.default.createElement(import_antd.Radio.Group, {
    onChange: radioChange,
    value: radio
  }, /* @__PURE__ */ import_react.default.createElement(import_antd.Radio, {
    value: 15
  }, "\u8FD115\u5929"), /* @__PURE__ */ import_react.default.createElement(import_antd.Radio, {
    value: 30
  }, "\u8FD130\u5929"), /* @__PURE__ */ import_react.default.createElement(import_antd.Radio, {
    value: -1
  }, "\u5168\u90E8")));
};
var RangeTimeOptions_default = RangeTimeOptions;
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RangeTimeOptions
});
