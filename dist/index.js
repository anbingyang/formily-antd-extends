var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  LinkageSelect: () => LinkageSelect_default,
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

// src/Component/LinkageSelect/index.tsx
var import_react2 = __toESM(require("react"));
var import_antd2 = require("antd");
var LinkageSelect = ({
  value,
  onChange,
  firstSelectInit,
  firstSelectOptionMap,
  firstSelectOnChangeApi,
  secondSelectOptionMap,
  firstSelectProps = {},
  secondSelectProps = {}
}) => {
  const [firstOptions, setFirstOptions] = (0, import_react2.useState)([]);
  const [secondOptions, setSecondOptions] = (0, import_react2.useState)([]);
  const firstChange = (0, import_react2.useCallback)((val, options) => {
    firstSelectOnChangeApi(val).then((res) => {
      secondSelectOptionMap && setSecondOptions(secondSelectOptionMap(res));
      onChange && onChange({ firstValue: val, secondValue: null });
    });
  }, [firstSelectOnChangeApi, onChange, secondSelectOptionMap]);
  const change = (0, import_react2.useCallback)((val) => {
    onChange && onChange(__spreadProps(__spreadValues({}, value), { secondValue: val }));
  }, [onChange, value]);
  (0, import_react2.useEffect)(() => {
    const init = async () => {
      const res = await firstSelectInit();
      firstSelectOptionMap && setFirstOptions(firstSelectOptionMap(res));
    };
    if (Array.isArray(firstSelectInit)) {
      setFirstOptions(firstSelectInit);
    } else {
      init();
    }
  }, []);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex flex-row w-full",
    style: { minWidth: 200 }
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Select, __spreadValues({
    options: firstOptions,
    onChange: firstChange,
    allowClear: true,
    showSearch: true,
    value: value == null ? void 0 : value.firstValue,
    className: "mr-2"
  }, firstSelectProps)), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Select, __spreadProps(__spreadValues({}, secondSelectProps), {
    options: secondOptions,
    onChange: change,
    value: value == null ? void 0 : value.secondValue,
    className: "mr-2 min-w-32"
  })));
};
var LinkageSelect_default = LinkageSelect;
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LinkageSelect,
  RangeTimeOptions
});
