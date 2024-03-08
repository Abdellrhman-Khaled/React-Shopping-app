import { useDispatch, useSelector } from "react-redux"
import { Button, Container , Table ,Image } from "react-bootstrap";
import {Clearproducts , Removeproduct} from "../rtk/slices/Cart-slices";
function Cart(){

    const carts = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

    const totalprice = carts.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)
    return (
        <Container className="py-5">
            <h1>Welcome to cart</h1>
            <h2><Button variant="primary" className="mb-3" onClick={() => dispatch(Clearproducts())}>Clear Cart </Button> </h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {carts.map((product) => (
                    <tbody>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td><Image src={product.image} style={{ width: '100px', height: "100px" }}></Image></td>
                            <td>{product.price}$</td>
                            <td>#{product.quantity}</td>
                            <td><Button variant="danger" onClick={() => dispatch(Removeproduct(product))}>Delete </Button></td>
                        </tr>
                    </tbody>
                ))}

            </Table>
            <h2 className="mt-5"> Your total :{totalprice}</h2>
        </Container>
    )
}
export default Cart;