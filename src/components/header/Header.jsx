import {AppBar, Toolbar,Box, Typography,styled} from '@mui/material'
//components
import Serch from './Serch';
import CustomButtons from './CustomButtons';

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height:55px
`;

const Components = styled(Box)`
    margin-left: 12%;
    line-height:0;
`;

const SubHeading = styled(Typography)`
 font-size:10px;
 font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height:10,
    marginLeft:4
});

const CustomButtonsWrapper= styled(Box)`
margin:0 5% 0 auto;
`






const Header =() =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyleHeader>
            <Toolbar style={{minHeight:55}}>
                <Components>
                    <img src={logoURL} alt="logo" style={{ width:75}}/>
                    <Box style ={{display: 'flex'}}>
                        <SubHeading>Akash&nbsp;
                        <Box component="span" style ={{ color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='sub-logo'/>
                    </Box>
                </Components>
                <Serch/>
                <CustomButtonsWrapper>
                    <CustomButtons/>
                </CustomButtonsWrapper>

            </Toolbar>
        </StyleHeader>
    )
}

export default Header;