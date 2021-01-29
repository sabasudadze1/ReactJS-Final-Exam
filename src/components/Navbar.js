import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">PlantsShopTbilisi</Link>
                        
                    
                    <ul className="right">
                                
                        <li><a href="https://en.wikipedia.org/wiki/Plant">მეტი ინფორმაცია</a> </li>
                        <li><a href="https://www.instagram.com/houseplantshop/?hl=en">ინსტაგრამი</a> </li>
                        <li><a href="https://en.wikipedia.org/wiki/Plant">კონტაქტი</a> </li>


                        <li><a href="https://github.com/sabasudadze1/">მენეჯერი</a> </li>

                        <li><Link to="/cart">კალათა</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
            
   
        
    )
}

export default Navbar;