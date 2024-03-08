import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct ,fetchCatProduct  , fetchproductID} from "../rtk/slices/Products-slices";
import { Container , Row ,Col ,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const mens ="men's clothing";
export const women ="women's clothing"
export const Electronics ="electronics"
function Products(){   

    const products = useSelector((state) =>state.Products)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchproduct());
    },[])

   return(
       <> 
                <button className="mt-5" onClick={()=>{dispatch(fetchproduct())}} > All Products </button>
              <button className="mt-5" onClick={()=>{dispatch(fetchCatProduct(mens))}}> Men's clothing </button>
              <button className="mt-5" onClick={()=>{dispatch(fetchCatProduct(women))}}> Women's clothing </button>
              <button className="mt-5" onClick={()=>{dispatch(fetchCatProduct(Electronics))}}> Electronics </button>
         <Container className='py-5'>
            <Row className='py-3'>
                {products.map( (product)=>(
                    <Col key={product.id} className=" mb-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title>{product.title.substring(0, 20) }</Card.Title>
                    {/* <Card.Text>{product.description}
                    </Card.Text> */}
                    <Card.Text>
                        price: {product.price}$
                    </Card.Text>
                    <Link to={`${product.id}`} className="btn btn-info btn-sm">View item</Link>
                    </Card.Body>
                </Card>
             </Col>
                )) }
                
                
        </Row>
      </Container>
      </>

    )
}
export default Products;

//onClick={()=>{dispatch(addToCart(product))}}