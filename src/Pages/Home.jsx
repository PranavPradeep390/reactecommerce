import React, { useState, useEffect } from 'react';
import './home.css';
import ProductCard from '../Components/ProductCard';
import Button from 'react-bootstrap/Button';

function Home() {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedButton, setSelectedButton] = useState('');

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      let apiUrl = 'https://fakestoreapi.com/products';
      if (category) {
        apiUrl += `/category/${category}`;
      }
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setSelectedButton(newCategory); 
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className='homepage'>
        <div id='homein'>
          <p>SPRING / SUMMER COLLECTION 2024</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <br />
          <Button style={{ borderRadius: "0px" }} variant="danger">Shop Now</Button>{' '}
        </div>
      </div>

      <div className="App">
        <h1 style={{textAlign:"center",marginTop:"50px"}}><i>New Arrivals</i></h1>
        <hr style={{width:"300px",margin:"auto",height:"10px"}} />
        <div className="category-buttons">
          <button
            className={selectedButton === '' ? 'selected' : ''}
            onClick={() => handleCategoryChange('')}
          >
            All Products
          </button>
          <button
            className={selectedButton === 'electronics' ? 'selected' : ''}
            onClick={() => handleCategoryChange('electronics')}
          >
            Electronics
          </button>
          <button
            className={selectedButton === 'jewelery' ? 'selected' : ''}
            onClick={() => handleCategoryChange('jewelery')}
          >
            Jewelery
          </button>
          <button
            className={selectedButton === "men's clothing" ? 'selected' : ''}
            onClick={() => handleCategoryChange("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className={selectedButton === "women's clothing" ? 'selected' : ''}
            onClick={() => handleCategoryChange("women's clothing")}
          >
            Women's Clothing
          </button>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="     Search Products Here . . ."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="product-list">
          <div className='card-container'>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
