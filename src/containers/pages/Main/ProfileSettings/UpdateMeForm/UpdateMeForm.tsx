import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Icon from '@material-ui/core/Icon';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { CustomInput } from '../../../../../shared/components/FormElements/CustomFields/customFields';
import './updateMeForm.css';

import Button from '@material-ui/core/Button';
import Previes from '../../../../../shared/components/FormElements/Prewies/Previes';
import { loginValidator } from '../../../../../shared/components/FormElements/validate';

import { AppState } from '../../../../../store';
import { getMe } from '../../../../../store/profile/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    getMeData: getMe(state),
    initialValues: {
      email: getMe(state) ? getMe(state)!.me.email : '',
      fullName: getMe(state) ? getMe(state)!.me.profile.fullName : '',
      notification: getMe(state) ? getMe(state)!.me.profile.notifications : '',
    },
  };
};

interface FormData {
  ava: any;
  email: string;
  fullName: string;
  notification: boolean;
}

type Props =
  & ReturnType<typeof mapStateToProps>
  ;

const UpdateMeForm = React.memo((props: InjectedFormProps<FormData, Props, string> & Props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className='update-form'>
      <Field
        name='ava'
        component={Previes}
        label='ava'
      />
      <Field
        name='email'
        component={CustomInput}
        label='email'
        type='email'
      />

      <Field
        name='fullName'
        component={CustomInput}
        label='full name'
        type='text'
      />
      <div className='update-form--notification'>
        <Icon color='primary'>notification_important</Icon>
        <label htmlFor='notification'>Notification</label>
        <div>
          <Field
            name='notification'
            id='notification'
            component='input'
            type='checkbox'
          />
        </div>
      </div>

      <Button
        type='submit'
        color='primary'
      >
        confirm change
      </Button>
    </form>
  );
});

export default compose(
  connect(mapStateToProps),
  reduxForm<FormData, Props>({
    form: 'updateMeForm',
    validate: loginValidator,
    enableReinitialize: true,
  }),
  React.memo,
)(UpdateMeForm) as any;
