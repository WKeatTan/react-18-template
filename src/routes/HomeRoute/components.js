import React from 'react';
import { ButtonComponent } from 'edvg-sas/dist';

export const HomeComponent = ({ handleOnClick }) => (
  <div>
    <div>Home</div>
    <ButtonComponent onClick={handleOnClick} label="Click Me" />
  </div>
);
