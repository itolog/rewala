import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

const CustomCheckbox: React.FC<WrappedFieldProps> = ({
                                                       input,
                                                     }) => {
  const [ state, setState ] = React.useState({
    checkedB: true,
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [ name ]: event.target.checked });
  };

  return (
    <Checkbox
      checked={state.checkedB}
      onChange={handleChange('checkedB')}
      value='checkedB'
      color='primary'
      {...input}
      inputProps={{
        'aria-label': 'policy checkbox',
      }}
    />
  );
};

export default CustomCheckbox;
