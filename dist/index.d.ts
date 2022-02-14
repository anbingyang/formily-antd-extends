declare type TProps$1 = {
    value?: {
        time?: any[];
        radio?: string | number | null;
    };
    onChange?: Function;
    initValue?: any;
};
declare const RangeTimeOptions: ({ value, onChange, initValue }: TProps$1) => JSX.Element;

declare type TProps = {
    value?: {
        firstValue?: any;
        secondValue?: any;
    };
    onChange?: Function;
    firstSelectInit: any;
    firstSelectOptionMap?: Function;
    firstSelectOnChangeApi: (val: any) => Promise<any>;
    secondSelectOptionMap?: Function;
    firstSelectProps?: {
        [key: string]: any;
    };
    secondSelectProps?: {
        [key: string]: any;
    };
};
declare const LinkageSelect: ({ value, onChange, firstSelectInit, firstSelectOptionMap, firstSelectOnChangeApi, secondSelectOptionMap, firstSelectProps, secondSelectProps, }: TProps) => JSX.Element;

export { LinkageSelect, RangeTimeOptions };
