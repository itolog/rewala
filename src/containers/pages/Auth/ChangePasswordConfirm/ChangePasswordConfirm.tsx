import React from 'react';

import Centred from '../../../../shared/components/Centred/Centred';
import WrappForm from '../../../../shared/components/WrappForm/WrappForm';
import ChangePasswordConfirmForm from '../../../forms/ChangePasswordConfirmForm/ChangePasswordConfirmForm';

const ChangePasswordConfirm = () => {
  return (
    <Centred>
      <WrappForm>
        <ChangePasswordConfirmForm />
      </WrappForm>
    </Centred>
  )
};

export default ChangePasswordConfirm;
