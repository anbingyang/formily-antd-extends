import React, { useCallback } from 'react';
import { DatePicker, Radio, Space } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
type TProps = {
  value?: { time?: any[]; radio?: string | number | null };
  onChange?: Function;
  initValue?: any;
};
const TransTree = ({ value = {}, onChange, initValue }: TProps) => {
  const { time = [], radio = null } = value;
  const timeChange = useCallback(
    (moments, dateStrings) => {
      onChange && onChange({ time: dateStrings, radio: null });
    },
    [onChange],
  );

  const radioChange = useCallback(
    (e) => {
      const val = e.target.value;
      const format = 'YYYY-MM-DD';
      let t: any = [];
      switch (val) {
        case 15:
          t = [
            moment().subtract(15, 'day').format(format),
            moment().format(format),
          ];
          break;
        case 30:
          t = [
            moment().subtract(30, 'day').format(format),
            moment().format(format),
          ];
          break;
        case -1:
          t = ['', ''];
          break;
      }
      onChange && onChange({ time: t, radio: val });
    },
    [onChange],
  );
  const timeVal = time?.map((t: string) => (t ? moment(t) : ''));
  return (
    <Space size={16}>
      <RangePicker onChange={timeChange} value={timeVal as any} allowClear />
      <Radio.Group onChange={radioChange} value={radio}>
        <Radio value={15}>近15天</Radio>
        <Radio value={30}>近30天</Radio>
        <Radio value={-1}>全部</Radio>
      </Radio.Group>
    </Space>
  );
};

export default TransTree;
