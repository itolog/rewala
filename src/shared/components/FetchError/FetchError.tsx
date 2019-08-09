import React from 'react';

import './fetchError.css';

interface Props {
  data: any
}

const FetchError = (props: Props) => {

  const fetchErrors = props.data && props.data.result && props.data.result.errors;
  const validateErrors = props.data && props.data.errors;

  if (fetchErrors) {
    return (
      <>
        {fetchErrors.map((item: any, index: number) => {
          return (
            <p key={index} className='error-block'>{item.message}</p>
          )
        })}
      </>
    )
  }
  if (validateErrors) {
    return (
      <>
        {validateErrors.map((item: any, index: number) => {
          return (
            <div key={index} className='error-block'>
              <div className='error-items'>{item.fields && item.fields.email && item.fields.email.unique}</div>

              <div className='error-items'>{item.fields && item.fields.isAgreeWithPrivacyPolicyAndTermOfUse && item.fields.isAgreeWithPrivacyPolicyAndTermOfUse.isAgree}</div>

              <div className='error-items'>{item.fields && item.fields.phone && item.fields.phone.matches}</div>

              <div className='error-items'>{item.message}</div>
            </div>
          )
        })}
      </>
    )
  } else {
    return null
  }

};

export default FetchError;
