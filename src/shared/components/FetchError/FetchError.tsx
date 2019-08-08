import React, { useEffect } from 'react';

interface Props {
  data: any
}

const FetchError = ({data}: Props) => {
  const res = data && data.errors;
  useEffect(() => {
  }, [data])
  if (res) {
    return (
      <>
        {res.map((item: any, index: number) => {
          return (
            <p key={index}>{item.message}</p>
          )
        })}
      </>
    )
  } else {
    return null
  }
};

export default FetchError;
