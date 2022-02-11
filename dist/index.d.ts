declare type TProps = {
    value?: {
        time?: any[];
        radio?: string | number | null;
    };
    onChange?: Function;
    initValue?: any;
};
declare const RangeTimeOptions: ({ value, onChange, initValue }: TProps) => JSX.Element;

export { RangeTimeOptions };
