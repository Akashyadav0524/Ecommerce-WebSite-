import {Box,Button,styled} from '@mui/material';
import {ShoppingCart as Cart, FlashOn as Flash }from '@mui/icons-material';


const LeftContainer = styled(Box)`

    min-width: 40%;
    padding: 40px 0 0 80px;
`;

const Image = styled('img')({
    
    padding: '15px'
});

const StyleButton = styled(Button)`
    width: 48%;
    height:50px;
    border-radius: 2px;

`


const ActionItem =({product}) =>{

    return (
        <LeftContainer>
            <Box style={{ padding:'15px 20px',border:'1px solid #f0f0f0',width: '90%',}}>
                <Image src ={product.Url} alt='longImage' />
            </Box>
            <StyleButton variant="contained" style ={{marginRight:10, background:'#ff9f00'}}><Cart/>Add to Cart</StyleButton>
            <StyleButton variant="contained" style ={{ background:'#fb541b'}}><Flash/>Buy Now</StyleButton>
        </LeftContainer>
    )
} 

export default ActionItem;