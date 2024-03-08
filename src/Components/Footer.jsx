import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footer1'>
        <div className='f1in'>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div className='f2in'>
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
        </div>
     <div className="footer">
            <h2 className='text-light'>Questions? call 000-000-000-000</h2>
            <div className="row">
                <div className="col">
                    <a href="#">FAQ</a><br />
                    <a href="#">Investor Relations</a><br />
                    <a href="#">Privacy</a><br />

                </div>
                <div className="col">
                    <a href="#">Help Center </a><br />

                </div>
                <div className="col">
                    <a href="#">Accounts </a><br />
                    <a href="#">Corporate Informations</a><br />

                </div>
                <div className="col">
                    <a href="#">Blog Center </a><br />
                    <a href="#">Contacts Us</a><br />
                </div>
            </div>


 <select id="search_bar" className='btn bg-light m-5'>
            <option value="">English</option>
            <option value="">हिंदी</option>
        </select>
        <p className="copyright_text">COLOSHOP</p>
        </div>
       
    </>
  )
}

export default Footer