import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Button from '@material-ui/core/Button';
import { CustomInput } from '../../../shared/components/FormElements/customFields';

import {Basic} from '../../../shared/components/FormElements/customFields';

interface FormData {

}

const UpdateMeForm = (props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form' >
      <Field
        name="ava"
        component={Basic}
        label='ava'
      />

    </form>
  )
};

export default reduxForm({
  form: 'updateMeForm'
})(UpdateMeForm);
