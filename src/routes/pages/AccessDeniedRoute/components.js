import React from 'react';
import { ButtonComponent } from 'edvg-sas/dist';

export const AccessDeniedComponent = ({ handleOnClick }) => (
  <div>
    <div>Access Denied</div>
    <div>
      <ButtonComponent onClick={handleOnClick} label="Back To Home" />
    </div>
  </div>
);
