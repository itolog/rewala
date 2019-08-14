import React from 'react';
import Select from 'react-select';
import { WrappedFieldProps } from 'redux-form';

interface IProps extends WrappedFieldProps {
  label: string;
  type: string;
  data: any;
}

const CustomSelectCode: React.FC<IProps> = ({
                                              input,
                                              label,
                                              type,
                                              data,
                                            }) => {
  const option = () => {
    const res = [];
    for (const item in data) {
      if (data.hasOwnProperty(item)) {
        res.push({ value: data[ item ].code, label: `${data[ item ].shortName} ${data[ item ].code}` });
      }
    }
    return res;
  };

  const onBlureHandle = () => input.onBlur(input.value);

  return (
    <>
      <Select
        options={option()}
        {...input}
        onChange={input.onChange}
        placeholder='code'
        onBlur={onBlureHandle}
        label={label}
        type={type}
      />
      <br/>
    </>
  );
};

export default CustomSelectCode;
