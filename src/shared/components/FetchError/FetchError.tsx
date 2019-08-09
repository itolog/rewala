import React from 'react';

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
            <p key={index}>{item.message}</p>
          )
        })}
      </>
    )
  } else if (validateErrors) {
    return (
      <>
        {validateErrors.map((item: any, index: number) => {
          return (
            <div key={index}>
              <p>{item.fields && item.fields.email && item.fields.email.unique}</p>
              <p>{item.fields && item.fields.isAgreeWithPrivacyPolicyAndTermOfUse && item.fields.isAgreeWithPrivacyPolicyAndTermOfUse.isAgree}</p>
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
