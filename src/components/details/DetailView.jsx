import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productActions";
import { Box ,Grid, styled} from  '@mui/material';
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
    background:#F2F2F2;
    margin-top: 55px
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

//  const RightContainer = styled(Grid)`
//    margin-top: 50px;
//    padding-left: 25px;
//    & >p {
//     margin-top: 10px;
//    }
//  `;

const RightContainer = styled(Grid)(({ theme }) => ({
    marginTop: '50px',
    paddingLeft: '25px',
  
    '& > p': {
      marginTop: '10px',
    },
  
    [theme.breakpoints.up('lg')]: {
      marginTop: '70px',
      paddingLeft: '45px',
  
      '& > p': {
        marginTop: '15px',
        paddingLeft: '40px',
      },
    },
  
    [theme.breakpoints.up('md')]: {
      marginTop: '60px',
      paddingLeft: '20px',
  
      '& > p': {
        marginTop: '12px',
      },
    },
  
    [theme.breakpoints.up('sm')]: {
      marginTop: '40px',
      paddingLeft: '15px',
  
      '& > p': {
        marginTop: '10px',
      },
    },
  
    [theme.breakpoints.up('xs')]: {
      marginTop: '30px',
      paddingLeft: '10px',
  
      '& > p': {
        marginTop: '8px',
      },
    },
  }));


const DetailView = () =>{

    const dispatch = useDispatch();
    const {id}=useParams();

   const{loading,product}= useSelector( state => state.getProductDetails);



    useEffect(() =>{

        if(product && id !== product.id)
            dispatch(getProductDetails(id))

    },[dispatch,id,product,loading])

    console.log(product)

    return (
        
        <Component>
            {
              product && Object.keys(product).length &&
                    <Container container>

                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product ={product}/>
                        </Grid>

                        <RightContainer item lg={8} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>

                    </Container>
            }
        </Component>
    )
}

export default DetailView;