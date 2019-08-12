import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { CustomInput } from '../../../shared/components/FormElements/customFields';
import Icon from '@material-ui/core/Icon';
import './updateMeForm.css';

import { updateMe } from '../../../shared/components/FormElements/validate'
import Previes from '../../../shared/components/FormElements/Prewies/Previes';
import Button from '@material-ui/core/Button';

import { AppState } from '../../../store';

const mapStateToProps = (state: AppState) => {
  return {
    initialValues: {
      email: state.profile.getMe
        && state.profile.getMe.data
        && state.profile.getMe.data.me
        && state.profile.getMe.data.me.email,
      fullName: state.profile.getMe
        && state.profile.getMe.data
        && state.profile.getMe.data.me
        && state.profile.getMe.data.me.profile
        && state.profile.getMe.data.me.profile.fullName,
      notification: state.profile.getMe
        && state.profile.getMe.data
        && state.profile.getMe.data.me
        && state.profile.getMe.data.me.profile
        && state.profile.getMe.data.me.profile.notifications
    }
  };
};

interface FormData {
  ava: any,
  email: string,
  fullName: string,
  notification: boolean
}

type Props =
  & ReturnType<typeof mapStateToProps>
  ;

const UpdateMeForm = React.memo((props: InjectedFormProps<FormData, Props, string> & Props) => {
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
      <div className='update-form--notification'>
        <Icon color='primary'>notification_important</Icon>
        <label htmlFor="notification">Notification</label>
        <div>
          <Field
            name="notification"
            id="notification"
            component="input"
            type="checkbox"
          />
        </div>
      </div>

      <Button
        type="submit"
        color="primary"
      >
        confirm change
      </Button>
    </form>
  )
});

export default compose(
  connect(mapStateToProps),
  reduxForm<FormData, Props>({
    form: 'updateMeForm',
    validate: updateMe,
    enableReinitialize: true
  }),
  React.memo
)(UpdateMeForm) as any;
