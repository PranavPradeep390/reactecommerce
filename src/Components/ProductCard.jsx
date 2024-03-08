import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './productcard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product }) {
  return (
    <Row>
      <Col className='mb-4' sm={12} md={6} lg={4}>
        <Card className='cardproduct' style={{ width: "14rem", height: "24rem", position: "relative",borderColor:"transparent",marginLeft:"50px" }}>
          <Card.Img
            style={{ width: "13.5rem", height: "14.5rem",textAlign:"center" }}
            variant="top"
            src={product.image}
          />
          <Card.Body>
            <Card.Title><span style={{fontSize:"16px"}}><i>{product.title}</i></span></Card.Title>

  
             <div className='btns' >
  
                <Link to={`/wishlist/${product.id}`}>
                  <Button className='pbtns'  variant="success" >
                    View Product
                  </Button>
                </Link>
  
               
                  {/* <Button className='pbtns' variant="success" >
                    Add To Cart
                  </Button> */}
                
             </div>


          </Card.Body>
        </Card>
      </Col>
      <hr />
    </Row>
  );
}

export default ProductCard;

