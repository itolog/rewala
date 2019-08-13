import Button from '@material-ui/core/Button';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import './registrationForm.css';

import { CustomInput, CustomSelectCode } from '../../../shared/components/FormElements/customFields';
import { registration } from '../../../shared/components/FormElements/validate';

interface IProps {
  countries: any;
}

interface FormData {
  fullname: string;
  code: string;
}

const RegistrationForm = React.memo((props: InjectedFormProps<FormData, IProps, string> & IProps) => {
  const { handleSubmit, countries } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>

      <Field
        name='fullname'
        component={CustomInput}
        label='full name'
        type='text'
      />
      <div className='phone-wrapp'>
        <Field
          name='code'
          component={CustomSelectCode}
          label='code'
          className='phone-code'
          data={countries}
          style={{ width: '150px' }}
        />
        <div>
          <Field
            name='phone_number'
            className='phone-number'
            component={CustomInput}
            label='phone'
            type='tel'
          />
        </div>
      </div>

      <Field
        name='email'
        component={CustomInput}
        label='email'
      />
      <Field
        name='password'
        component={CustomInput}
        label='password'
        type='password'
      />
      <Field
        name='confirmPassword'
        component={CustomInput}
        label='confirm password'
        type='password'
      />
      <div className='policy'>
        <label htmlFor='police'>agree whith Privacy Policy</label>
        <div>
          <Field name='police' id='police' component='input' type='checkbox'/>
        </div>
      </div>

      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Sign up
      </Button>
      <br/>
    </form>
  );
});

export default reduxForm<FormData, IProps>({
  form: 'registrationForm',
  validate: registration,
})(RegistrationForm);
