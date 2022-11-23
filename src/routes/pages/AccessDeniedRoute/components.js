import React from 'react';

import ButtonComponent from 'Components/ButtonComponent';

export const AccessDeniedComponent = ({ handleOnClick }) => (
  <div>
    <div>Access Denied</div>
    <div>
      <ButtonComponent onClick={handleOnClick} label="Back To Home" />
    </div>
  </div>
);
