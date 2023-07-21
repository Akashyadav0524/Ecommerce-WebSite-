import React from "react";
import { InputBase, Box,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SerchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius :2px;
margin-left:10px;
display:flex;
`;

const InputSerchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const SerchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
    display:flex;

`;


const Serch = () => {
  return (
    <SerchContainer>
      <InputSerchBase 
        placeholder="Serch for products, brands and more"
      />
      <SerchIconWrapper>
        <SearchIcon/>
      </SerchIconWrapper>
    </SerchContainer>
  );
};

export default Serch;
