import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import CustomCheckbox from '../../../../../shared/components/FormElements/CustomCheckbox/CustomCheckbox';

import { CustomInput } from '../../../../../shared/components/FormElements/CustomFields/customFields';
import CustomSelectCode from '../../../../../shared/components/FormElements/CustomSelectCode/CustomSelectCode';
import { validator } from '../../../../../shared/components/FormElements/validate';

const useStyles = makeStyles({
  registrForm: {
    display: 'flex',
    flexFlow: 'column',
  },
  phoneWrapp: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexFlow: 'row wrap',
  },
  phoneNumber: {
    flex: 1,
  },
  phoneCode: {
    flexBasis: '80px',
  },
  policy: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexFlow: 'row-reverse',
    marginBottom: '20px',
  },
});

interface IProps {
  countries: any;
}

interface FormData {
  fullname: string;
  code: string;
}

const RegistrationForm: React.FC<InjectedFormProps<FormData, IProps, string> & IProps> = React.memo(({ handleSubmit, countries }) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.registrForm}>

      <Field
        name='fullname'
        component={CustomInput}
        label='full name'
        type='text'
      />
      <div className={classes.phoneWrapp}>
        <Field
          name='code'
          component={CustomSelectCode}
          label='code'
          className={classes.phoneCode}
          data={countries}
          style={{ width: '150px' }}
        />
        <div>
          <Field
            name='phone_number'
            className={classes.phoneNumber}
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
      <div className={classes.policy}>
        <label htmlFor='police'>agree whith Privacy Policy</label>
        <div>
          <Field name='police' id='police' component={CustomCheckbox} type='checkbox'/>
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
  validate: validator,
})(RegistrationForm);
