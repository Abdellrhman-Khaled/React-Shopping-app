import { useEffect } from "react"
import { Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct } from "../rtk/slices/Products-slices";
import { Container , Row ,Col ,Button } from "react-bootstrap";
function Home(){
    const products = useSelector((state) =>state.Products)
    const dispatch = useDispatch();

    
    useEffect(()=>{
        dispatch(fetchproduct());
    },[])

        return (
            <>
            <Card className="bg-dark text-white mt-3">
            <Card.Img src="https://images.crowdspring.com/blog/wp-content/uploads/2022/03/12201158/fashion-models-showing-latest-clothing-fashions.png" style={{height:"700px"}} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title style={{fontSize:"50px"}}>NEW SEASON ARRIVAL</Card.Title>
                <Card.Text>CHECKOUT ALL THE TRENDS</Card.Text>
                
            </Card.ImgOverlay>
            </Card>
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
                    
                    </Card.Body>
                </Card>
             </Col>
                )) }
                
                
        </Row>
      </Container>

            </>
        );
  }


export default Home;


//    <Image src="https://s3.eu-west-2.amazonaws.com/files.sewport.com/blog/10-mistakes-to-avoid-when-starting-your-own-clothing-line/clothing-line.jpeg"  fluid />