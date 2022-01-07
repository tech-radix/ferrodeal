import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';



const Home = () =>{
    
        return(
  <>
 
  <StyledEngineProvider injectFirst>
    <Demo />
  </StyledEngineProvider>
  </>
 
)
} 
export default Home;