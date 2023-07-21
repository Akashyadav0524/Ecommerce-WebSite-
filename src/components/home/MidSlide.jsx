import { Box, styled } from '@mui/material';
import  Slide from './Slide';

const MidSlide =({products,title,timer}) =>{
    return (
        <Box>
            <Box>
                <Slide 
                products={products} 
                title={title}
                timer ={true}
                    
                />
                    
               
            </Box>
            
            <Box>

            </Box>

        </Box>
    )
}

export default MidSlide;