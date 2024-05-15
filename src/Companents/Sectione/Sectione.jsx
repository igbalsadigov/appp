import React from 'react'
import style from '../Sectione/Sectione.module.css'
import logo from '../../Companents/Images/women.jpg'
import logoo from '../../Companents/Images/children.jpg'
import logow from '../../Companents/Images/men.jpg'

const Sectione = () => {
  return (
    <div className={style.container}>
      <div className={style.photo}>
        <img src={logo} alt="" />
        <div className={style.texe}>
           <p>COLLECTIONS</p>
           <h5>Women</h5>
        </div>
      </div>
      <div  className={style.photo}>
        <img src={logoo} alt="" />
        <div className={style.texe}>
            <p>COLLECTIONS</p>
            <h5>Children</h5>
        </div>
      </div>
      <div  className={style.photo}>
        <img src={logow} alt="" />
        <div className={style.texe}>
            <p>COLLECTIONS</p>
            <h5>Men</h5>
        </div>
      </div>
    </div>
  )
}

export default Sectione
