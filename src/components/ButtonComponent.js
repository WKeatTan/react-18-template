import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const ButtonComponent = (props) => (
  <Button variant={props.variant ?? 'contained'} onClick={props.onClick}>
    {props.label}
  </Button>
);

ButtonComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComponent;
