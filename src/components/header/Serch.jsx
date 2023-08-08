import React from "react";
import { InputBase, Box,styled,List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'; 
import{getProducts} from '../../redux/actions/productActions';

import { Link } from 'react-router-dom';

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

const ListWrapper = styled(List)`
  position: absolute;
  background: #FFFFFF;
  color: #000;
  margin-top: 36px;
`;






const Serch = () => {

  const [ text, setText ] = useState('');
  // const [ open, setOpen ] = useState(true);


  

 const { products }  = useSelector(state => state.getProducts);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getProducts())
}, [dispatch])

 const getText = (text) => {
  setText(text);
  // setOpen(false)
}





  return (
    <SerchContainer>
      <InputSerchBase 
        placeholder="Serch for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SerchIconWrapper>
        <SearchIcon/>
      </SerchIconWrapper>

       {
          text &&
            <ListWrapper>
                {

                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                    <ListItem>
                      <Link
                        to={`/product/${product.id}`}
                        onClick={() => setText('')}
                        style={{ textDecoration: 'none' , color: 'inherit' }}
                      >
                          {product.title.longTitle}
                      </Link>
                      
                    </ListItem>

                  ))
                }
            </ListWrapper>
        }
      
    </SerchContainer>
  );
};

export default Serch;
