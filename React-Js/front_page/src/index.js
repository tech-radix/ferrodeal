import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './frontpage';
import "./frontpage.css"



ReactDOM.render( 
  <>

  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>

  </>,
  document.querySelector("#root")
);