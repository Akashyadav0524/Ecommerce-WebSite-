import {AppBar, Toolbar,Box,IconButton, Drawer, List,ListItem,Typography,styled} from '@mui/material'
import { useState } from 'react';
import { Menu } from '@mui/icons-material';
//components
import Serch from './Serch';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height:55px
`;

const Components = styled(Link)`
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

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));






const Header =() =>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );

    return(
        <StyleHeader>
            <Toolbar style={{minHeight:55}}>

               <MenuButton color="inherit" onClick={handleOpen}>
                     <Menu />
                </MenuButton>


                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>


                <Components to={''} style={{textDecoration:'none', color:'inherit'}}>
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