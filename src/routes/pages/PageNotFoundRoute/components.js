import React from 'react';

import ButtonComponent from 'Components/ButtonComponent';

export const PageNotFoundComponent = ({ handleOnClick }) => (
  <div>
    <div>Page Not found</div>
    <div>
      <ButtonComponent onClick={handleOnClick} label="Back To Home" />
    </div>
  </div>
);
