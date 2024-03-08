import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import './wishlist.css'
import { Button } from 'react-bootstrap';
function Wishlist() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));

    if (comments.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setComments(data.slice(0, 10))) 
        .catch(error => console.error('Error fetching comments:', error));
    }
  }, [productId, comments]);

  return (
    <div className='Container'>
      {product ? (
        <div className='wllist'>
          <h2><i>{product.title}</i></h2>
          <img src={product.image} alt={product.title} />
          <h5 className='mt-5'><i>Product Details</i></h5>
          <p>{product.description}</p>
          <h5><span className='sspn'>Price &nbsp;&nbsp;&nbsp;:</span> ${product.price}</h5>
          <h5><span className='sspn'>Rating : </span>( {product.rating.rate}<i class="fa-solid fa-star srating"></i>/5 )</h5>
       <div>
            <Button className='mt-3' variant="success">Buy Now</Button>{' '}
            <Button className='mt-3 ms-5' variant="danger">Add To Cart</Button>{' '}
       </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className='wcmnts'>
        <label htmlFor="">Drop A Comment &nbsp; <input id='inputcmnts' style={{width:"450px"}} type="text"  placeholder='  Type here . . .'/></label>
        <h5 style={{marginTop:"20px"}}><i>Comments : </i></h5>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <b>{comment.email} :</b> <br />"{comment.body}"
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;



