var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/Component/RangeTimeOptions/index.tsx
import React, { useCallback } from "react";
import { DatePicker, Radio, Space } from "antd";
import moment from "moment";
var { RangePicker } = DatePicker;
var RangeTimeOptions = ({ value = {}, onChange, initValue }) => {
  const { time = [], radio = null } = value;
  const timeChange = useCallback((moments, dateStrings) => {
    onChange && onChange({ time: dateStrings, radio: null });
  }, [onChange]);
  const radioChange = useCallback((e) => {
    const val = e.target.value;
    const format = "YYYY-MM-DD";
    let t = [];
    switch (val) {
      case 15:
        t = [
          moment().subtract(15, "day").format(format),
          moment().format(format)
        ];
        break;
      case 30:
        t = [
          moment().subtract(30, "day").format(format),
          moment().format(format)
        ];
        break;
      case -1:
        t = ["", ""];
        break;
    }
    onChange && onChange({ time: t, radio: val });
  }, [onChange]);
  const timeVal = time == null ? void 0 : time.map((t) => t ? moment(t) : "");
  return /* @__PURE__ */ React.createElement(Space, {
    size: 16
  }, /* @__PURE__ */ React.createElement(RangePicker, {
    onChange: timeChange,
    value: timeVal,
    allowClear: true
  }), /* @__PURE__ */ React.createElement(Radio.Group, {
    onChange: radioChange,
    value: radio
  }, /* @__PURE__ */ React.createElement(Radio, {
    value: 15
  }, "\u8FD115\u5929"), /* @__PURE__ */ React.createElement(Radio, {
    value: 30
  }, "\u8FD130\u5929"), /* @__PURE__ */ React.createElement(Radio, {
    value: -1
  }, "\u5168\u90E8")));
};
var RangeTimeOptions_default = RangeTimeOptions;

// src/Component/LinkageSelect/index.tsx
import React2, { useCallback as useCallback2, useEffect, useState } from "react";
import { Select } from "antd";
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
  const [firstOptions, setFirstOptions] = useState([]);
  const [secondOptions, setSecondOptions] = useState([]);
  const firstChange = useCallback2((val, options) => {
    firstSelectOnChangeApi(val).then((res) => {
      secondSelectOptionMap && setSecondOptions(secondSelectOptionMap(res));
      onChange && onChange({ firstValue: val, secondValue: null });
    });
  }, [firstSelectOnChangeApi, onChange, secondSelectOptionMap]);
  const change = useCallback2((val) => {
    onChange && onChange(__spreadProps(__spreadValues({}, value), { secondValue: val }));
  }, [onChange, value]);
  useEffect(() => {
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
  return /* @__PURE__ */ React2.createElement("div", {
    className: "flex flex-row w-full",
    style: { minWidth: 200 }
  }, /* @__PURE__ */ React2.createElement(Select, __spreadValues({
    options: firstOptions,
    onChange: firstChange,
    allowClear: true,
    showSearch: true,
    value: value == null ? void 0 : value.firstValue,
    className: "mr-2"
  }, firstSelectProps)), /* @__PURE__ */ React2.createElement(Select, __spreadProps(__spreadValues({}, secondSelectProps), {
    options: secondOptions,
    onChange: change,
    value: value == null ? void 0 : value.secondValue,
    className: "mr-2 min-w-32"
  })));
};
var LinkageSelect_default = LinkageSelect;
export {
  LinkageSelect_default as LinkageSelect,
  RangeTimeOptions_default as RangeTimeOptions
};
