import { useState, useContext } from "react";
import { useSelector } from "react-redux";



import { Badge, Box,Button,  Typography,styled } from "@mui/material";
import { ShoppingCart} from '@mui/icons-material'
import { DataContext } from "../../context/DataProvider";
import { Link } from 'react-router-dom';

//components 

import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";

// const Wrapper = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   margin: '0 5% 0 auto',
//   alignItems: 'center',
//   '& > *': {
//     marginRight :'20px !important',
//     fontSize: 16,
//     alignItems: 'center'
//   },
//   [theme.breakpoints.down('md')]: {
      
//       display: 'block'
//   }
// }));

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0 5% 0 auto',
  alignItems: 'center',

  '& > *': {
    marginRight: '30px !important',
    fontSize: 16,
    alignItems: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    '& > *': {
      marginRight: '8px !important',
      fontSize: 15,
      fontWeight: 555,
    },
  },

  [theme.breakpoints.down('md')]: {
    display: 'block',
    '& > *': {
      marginRight: '16px !important',
      fontSize: 16,
      alignItems: 'center',
    },
  },
}));


const Container = styled(Link)(({theme}) =>({
  display:'flex',
  textDecoration:"none",
  color:'inherit',

 
  [theme.breakpoints.down('md')]:{
    display:'block'
  } 
  
}));
  


const LogiButton= styled(Button)`
 color:#2874f0;
 background: #FFFFFF;
 text-transform:none;
 padding: 5px 40px;
 border-radius: 2px;
 box-shadow: none;
 font-weight:600;
 height:32px;



`;




const CustomButtons = () => {

  const [open ,setOpen] = useState(false);

  const { account ,setAccount} = useContext(DataContext);

  const {cartItems} = useSelector(state => state.cart);

   
  const openDialog =() =>{
     setOpen(true);
   }

                return(
                    <Wrapper >
                    {
                      account ? <Profile account={account} setAccount={setAccount} />
                       :
                      <LogiButton variant="contained" onClick={() => openDialog()} >Login</LogiButton>
                    }
                        
                        <Typography style={{marginTop: 3 , width: 135,marginLeft: 50 ,whiteSpace: 'nowrap'}}>Become a Seller</Typography>
                        <Typography style={{marginTop: 3,marginLeft: 40}}>More</Typography>

                        <Container to="/cart">
                            <Badge badgeContent ={cartItems.length} color="secondary">
                            <ShoppingCart style={{fontSize:'18',marginLeft: 15,}}/>
                            </Badge>
                             <Typography style={{ marginLeft: 7, marginRight:60,} }>Cart</Typography> 
                            
                        </Container>
                        <LoginDialog open ={open} setOpen ={setOpen}/>
                    </Wrapper>
    )
}

export default CustomButtons;