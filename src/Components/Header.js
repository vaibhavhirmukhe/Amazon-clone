import React from 'react'
import '../Style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../firebase';

export default function Header() {
    // eslint-disable-next-line
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if (user) {
        auth.signOut();
    }
  }

  return (
    <div className='header'>
        <Link to="/">
            <img  className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="error" />
        </Link>

        <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className="header_nav">
            <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header_option">
                    <span className="option_lineOne">Hello, {user ? user?.email.split("@")[0] : "Guest"}</span>
                    <span className="option_lineTwo">{user?"Sign Out": "Sign In"}</span>
            </div>
            </Link>

            <div className="header_option">
                <span className="option_lineOne">Returns</span>
                <span className="option_lineTwo">& Orders</span>
            </div>

            <div className="header_option">
                <span className="option_lineOne">Your</span>
                <span className="option_lineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingCartIcon/>
                    <span className="option_lineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}
