import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { CustomInput } from '../../../shared/components/FormElements/customFields';

import './updateMeForm.css';

import Previes from '../../../shared/components/FormElements/Prewies/Previes';

interface FormData {

}

const UpdateMeForm = React.memo((props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className='update-form'>
      <Field
        name="ava"
        component={Previes}
        label='ava'
      />
      <Field
        name="email"
        component={CustomInput}
        label='email'
        type="email"
      />

      <Field
        name="fullName"
        component={CustomInput}
        label='full name'
        type="text"
      />
    </form>
  )
});

export default reduxForm({
  form: 'updateMeForm'
})(UpdateMeForm);
