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
export {
  RangeTimeOptions_default as RangeTimeOptions
};
