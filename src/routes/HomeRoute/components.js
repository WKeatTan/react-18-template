import React, { useMemo } from 'react';

import ButtonComponent from 'Components/ButtonComponent';

export const HomeComponent = ({ handleOnClick }) => (
  <div>
    <ButtonComponent onClick={handleOnClick} label="Click Me" />
  </div>
);
