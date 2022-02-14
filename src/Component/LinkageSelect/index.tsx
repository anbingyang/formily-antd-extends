import React, { useCallback, useEffect, useState } from 'react';
import { Select, Space } from 'antd';
type TProps = {
  value?: { firstValue?: any; secondValue?: any };
  onChange?: Function;
  firstSelectInit: any;
  firstSelectOptionMap?: Function;
  firstSelectOnChangeApi: (val: any) => Promise<any>;
  secondSelectOptionMap?: Function;
  firstSelectProps?: { [key: string]: any };
  secondSelectProps?: { [key: string]: any };
};
const LinkageSelect = ({
  value,
  onChange,
  firstSelectInit,
  firstSelectOptionMap,
  firstSelectOnChangeApi,
  secondSelectOptionMap,
  firstSelectProps = {},
  secondSelectProps = {},
}: TProps) => {
  const [firstOptions, setFirstOptions] = useState<any>([]);
  const [secondOptions, setSecondOptions] = useState<any>([]);

  const firstChange = useCallback(
    (val, options) => {
      firstSelectOnChangeApi(val).then((res) => {
        secondSelectOptionMap && setSecondOptions(secondSelectOptionMap(res));
        onChange && onChange({ firstValue: val, secondValue: null });
      });
    },
    [firstSelectOnChangeApi, onChange, secondSelectOptionMap],
  );

  const change = useCallback(
    (val) => {
      onChange && onChange({ ...value, secondValue: val });
    },
    [onChange, value],
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-row w-full" style={{ minWidth: 200 }}>
      <Select
        options={firstOptions}
        onChange={firstChange}
        allowClear
        showSearch
        value={value?.firstValue}
        className="mr-2"
        {...firstSelectProps}
      />
      <Select
        {...secondSelectProps}
        options={secondOptions}
        onChange={change}
        value={value?.secondValue}
        className="mr-2 min-w-32"
      />
    </div>
  );
};

export default LinkageSelect;
