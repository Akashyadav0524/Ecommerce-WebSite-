import { imageURL} from '../../constants/data';
import {  Grid, styled } from '@mui/material';

const Wrapper =styled(Grid)`
margin-top: 10px;
justify-content: space-between;
`;

const Image = styled('img')(({theme}) =>({
    margineTop: 10,
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        objectFit: 'coverer',
        height:120
    }

}));


const MidSection =() =>{
    const url = 'https://rukminim1.flixcart.com/fk-p-flap/3006/433/image/2ec0d4b0dbf3e01f.jpg?q=20'

    return(
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                        <img src ={image} alt='imge'style={{width:'100%'}} />
                        </Grid>
                    ))
                }

            </Wrapper>

            <Image src ={url} alt='flight'style={{width:'100%'}} />

        </>
    )
}

export default MidSection;