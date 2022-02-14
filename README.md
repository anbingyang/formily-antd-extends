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

###组件文档

####1.RangeTimeOptions

 日期区间组件，提供了最近15天，30天，全部的选项

 value中包含属性 { time=[] //范围日期的起始字符串 , radio=15/30/-1 //选项值 }


####2.LinkageSelect

联动选择框

props:{ 
  <a>value?: { firstValue?: any; secondValue?: any };</a>  

  <a>onChange?: Function</a>;

  <a>firstSelectInit: any;</a> //第一个框的初始options, 对象数组或者api/promise方法

  <a>firstSelectOptionMap?: Function;</a> //firstSelectInit 为promise时的返回结果转换函数

  <a>firstSelectOnChangeApi: (val: any) => Promise<any>;</a> // 第一个选择框改变时的回调

  <a>secondSelectOptionMap?: Function;</a> //firstSelectOnChangeApi返回结果转换函数，显示在第二个选择框

  <a>firstSelectProps?: { [key: string]: any };</a> // 第一个select的自定义属性
  
  <a>secondSelectProps?: { [key: string]: any };</a> // 第二个select的自定义属性
}
