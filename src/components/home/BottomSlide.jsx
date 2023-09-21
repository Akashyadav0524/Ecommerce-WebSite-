import { Box, styled } from '@mui/material';
import  Slide from './Slide';

const Component = styled(Box)`

    display: flex;

`;

const LeftComponent = styled(Box)(({ theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    }
}))

const RightComponent = styled(Box)(({ theme}) => ({
    marginTop: 10,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));



const BottomSlide =({products,title,timer}) =>{
    const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/530/810/image/bc5ca8677d96765c.jpg?q=20'
    return (
        <Component>

            {/* <RightComponent >
                <img src={adURL} alt='ad' style={{width:217}}/>
            </RightComponent> */}
        
             <LeftComponent>
                    <Slide 
                    products={products} 
                    title={title}
                    timer ={true}
                    />  
             </LeftComponent>
               
            <RightComponent >
                <img src={adURL} alt='ad' style={{width:217}}/>
            </RightComponent>

        </Component>
    )
}

export default BottomSlide;