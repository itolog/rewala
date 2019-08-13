import React from 'react';

import './wrappForm.css';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const WrappForm = (props: Props) => {
  return (
    <section className='wrapp-form'>
      <h1>Rewala</h1>
      <div className='wrapp-form--children'>
        {props.children}
      </div>
      <Button variant='outlined' color='primary'>
        <Link to='/' style={{ color: 'blue' }}> LOG IN</Link>
      </Button>
    </section>
  );
};

export default WrappForm;
