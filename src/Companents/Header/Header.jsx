import React from 'react'
import style from '../Header/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';   
import { faUser } from '@fortawesome/free-solid-svg-icons';   
import { faHeart } from '@fortawesome/free-solid-svg-icons';   
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';   
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';   


const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.contair}>
            <div className={style.inpt}>
            <FontAwesomeIcon className={style.iccons} icon={faMagnifyingGlass} />
            <input className={style.inp} type="text" placeholder='Search' />
            </div>
      
     <div>
     <button>SHOPPERS</button>
     </div>
    
        
     <div className={style.icons}>
     <FontAwesomeIcon icon={faUser} />
     <FontAwesomeIcon icon={faHeart} />
     <FontAwesomeIcon icon={faBasketShopping} />
     </div>
     </div>
     <nav>
        <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">CATALOGUE</a></li>
            <li><a href="">NEW ARRIVALS</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
     </nav>
    </div>
  )
}

export default Header
