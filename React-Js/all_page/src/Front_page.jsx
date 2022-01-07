import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './frontpage';



const Front = () =>{
    
    return(
<>

<StyledEngineProvider injectFirst>
<Demo />
</StyledEngineProvider>
</>

)
} 
export default Front;