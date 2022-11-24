import React from 'react';
import { ButtonComponent } from 'edvg-sas/dist';

export const PageNotFoundComponent = ({ handleOnClick }) => (
  <div>
    <div>Page Not found</div>
    <div>
      <ButtonComponent onClick={handleOnClick} label="Back To Home" />
    </div>
  </div>
);
