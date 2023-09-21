import React from 'react'
import { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import {useDispatch,useSelector} from 'react-redux';





// components
import NavBar from './NavBar';
import Banner from './Banner';
import  Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import BottomSection from './BottomSection';
import BottomSlide from './BottomSlide';

const Component = styled(Box)`
padding: 10px 10px;
background: #F2F2F2;
overflow: hidden;

`


const Home =() =>{

    const { products } = useSelector(state=> state.getProducts);
    console.log(products);
    
    const dispatch = useDispatch();


    useEffect(() =>{
      dispatch(getProducts())  
    },[dispatch])

    return(
        <>
           <NavBar/>
           <Component>
            <Banner/>
            <MidSlide products={products} title="Deal of the Day" timer ={true}/>
            <MidSection/>
            <Slide products={products} title="Discount for You" timer ={false}/>
            <Slide products={products} title="Suggesting items" timer ={false}/>
            <Slide products={products} title="Top Selection" timer ={false}/>
            <Slide products={products} title="Recommended Items" timer ={false}/>
            <BottomSlide products ={products} title="Travel Dream" timer ={false}/>
            <BottomSection />
            <Slide products={products} title="Trending Offers" timer ={false}/>
            <Slide products={products} title="Season's Top picks" timer ={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer ={false}/>
           </Component>
         
        </>
    )
}

export default Home;