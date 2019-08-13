import TextField from '@material-ui/core/TextField';
import React from 'react';
import Select from 'react-select';

export const CustomInput = ({
                              input,
                              label,
                              type,
                              className,
                              meta: { touched, error },
                            }: any) => {
  return (
    <>
      <TextField
        {...input}
        label={label}
        type={type}
        className={className}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <br/>
      {touched &&
      ((error && <div style={{ marginBottom: '10px', marginTop: '5' }}>{error}</div>))}
    </>
  );
};

export const CustomSelectCode = ({
                                   input,
                                   label,
                                   type,
                                   data,
                                   meta: { touched, error },
                                 }: any) => {
  const option: any = () => {
    const res: any = [];
    for (const item in data) {
      res.push({ value: data[ item ].code, label: `${data[ item ].shortName} ${data[ item ].code}` });
    }
    return res;
  };

  return (
    <>
      <Select
        options={option()}
        {...input}
        onChange={input.onChange}
        placeholder='code'
        onBlur={() => input.onBlur(input.value)}
        label={label}
        type={type}
      />
      <br/>
      {touched &&
      ((error && <div style={{ marginBottom: '10px', marginTop: '5' }}>{error}</div>))}
    </>
  );
};
