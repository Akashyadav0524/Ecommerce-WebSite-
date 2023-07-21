import { useState } from "react";
import { Typography, Box,MenuItem ,Menu ,styled } from "@mui/material";
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile =({ account, setAccount }) =>{

    const[open, setOpen]= useState(false);

     const handleClick = (event) =>{
        setOpen(event.currentTarget);
     }
     const handleClose = () =>{
        setOpen(false);
     }
     const logoutUser = () => {
        setAccount('');
    }



    return(

        <>

            <Box onClick={handleClick}><Typography style={{margin: 2, cursor:'pointer'}}>{account}</Typography></Box>
            <Component
                    
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
        
                >
                    <MenuItem onClick={() => { handleClose(); logoutUser();}}>
                        <PowerSettingsNewRoundedIcon fontSize='small' color='primary'/> 
                        <Logout>Logout</Logout>
                    </MenuItem>
                    
            </Component>
        </>
    )
}

export default Profile;