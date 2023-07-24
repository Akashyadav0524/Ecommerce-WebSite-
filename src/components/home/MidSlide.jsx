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



const MidSlide =({products,title,timer}) =>{
    const adURL = 'https://rukminim2.flixcart.com/fk-p-flap/464/708/image/cb34acb8965c0c5e.jpg?q=70'
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

export default MidSlide;