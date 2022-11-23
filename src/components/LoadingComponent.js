import React from 'react';
import styled from 'styled-components';

/** Custom Components */
import variables from 'Assets/scss/_variables.scss';
import LogoImage from 'Assets/img/logo/logo.png';

const LoadingScreen = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  ${(props) => props.background && variables.spaceColor};
  z-index: 99999;
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;

  .spinning-ring {
    width: inherit;
    height: inherit;
    background: transparent;
    border-top: 4px solid ${variables.blueLightColor};
    border-right: 4px solid transparent;
    border-radius: 50%;
    animation: 1s spin linear infinite;
  }

  .spinning-s {
    height: 200px;
    width: 200px;
    background-image: ${({ logo }) => (logo ? `url(${logo})` : 'none')};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: 130px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingComponent = () => (
  <LoadingScreen background logo={LogoImage}>
    <div className="spinning-s">
      <div className="spinning-ring" />
    </div>
  </LoadingScreen>
);

export default React.memo(LoadingComponent);
