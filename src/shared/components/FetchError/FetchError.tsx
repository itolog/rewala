import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  errorItems: {
    padding: '2px',
  },
});

interface Props {
  data: any;
}

const FetchError: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const fetchErrors = data && data.result && data.result.errors;
  const validateErrors = data && data.errors;

  if (fetchErrors) {
    return (
      <>
        {fetchErrors.map((item: any, index: number) => {
          return (
            <div key={index} className='error-block'>{item.message}</div>
          );
        })}
      </>
    );
  }
  if (validateErrors) {
    return (
      <>
        {validateErrors.map((item: any, index: number) => {
          return (
            <div key={index} className='error-block'>
              <div className='error-items'>{
                item.fields.hasOwnProperty('email')
                && item.fields.email.unique
              }</div>

              <div
                className={classes.errorItems}
              >
                {item.fields.hasOwnProperty('isAgreeWithPrivacyPolicyAndTermOfUse')
                && item.fields.isAgreeWithPrivacyPolicyAndTermOfUse.isAgree
                }
              </div>
              <div className={classes.errorItems}>
                {item.fields.hasOwnProperty('phone') && item.fields.phone.matches}
              </div>
              <div className={classes.errorItems}>
                {item.fields.hasOwnProperty('password') && item.fields.password.matches}
              </div>
              <div className={classes.errorItems}>
                {item.message}
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};

export default FetchError;
