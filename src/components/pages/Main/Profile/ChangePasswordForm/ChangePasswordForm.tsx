import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';

import { CustomInput } from '../../../../../shared/components/FormElements/customFields';
import {changePasswordValidation} from '../../../../../shared/components/FormElements/validate';
import Button from "@material-ui/core/Button";

const ChangePasswordForm = React.memo((props: any) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <div>
                <Field
                    name="oldPassword"
                    component={CustomInput}
                    label='Old password'
                    type="password"
                />
            </div>
            <div>
                <Field
                    name="newPassword"
                    component={CustomInput}
                    label='New password'
                    type="password"
                />
            </div>
            <div>
                <Field
                    name="confirmPassword"
                    component={CustomInput}
                    label='confirm password'
                    type="password"
                />
            </div>
            <Button variant='outlined' type='submit'>
                Save
            </Button>
        </form>
    )
});

export default compose(
    connect(),
    reduxForm({
        form: 'changePasswordForm',
        validate: changePasswordValidation,
    })
)(ChangePasswordForm) as any;
