# formily-antd-extends
##formilyV2 antd的扩展表单组件

###docs:

1. 参照formily官网安装formliy <a>https://v2.formilyjs.org/zh-CN/guide/quick-start</a>
2. yarn add  formily-antd-extends
3. 引入组件并注册使用
```
import { createSchemaField, useForm } from '@formily/react';
import { createForm } from '@formily/core';
import {RangeTimeOption} from 'formily-antd-extends';
import {
  Input,
  FormGrid,
  FormItem,
} from '@formily/antd';
const SchemaField = createSchemaField({
  components: {
    RangeTimeOption,
    Input,
    FormGrid,
    FormItem,
  },
});

const form = createForm();
const App = ()=>{

  return (
    <Form form={form}>
          <SchemaField>
            <SchemaField.Void
              x-component="FormGrid"
              x-component-props={{
                maxColumns: 3,
                style: { width: '90%' },
                columnGap: 64,
                rowGap: 12,
              }}
            >
              <SchemaField.String
              x-decorator="FormItem"
              required
              title="xxxx"
              name="xxxx"
              x-component="RangeTimeOption"
            />
            <SchemaField.Void>
          </SchemaField>
    </Form>
  )
}
```

