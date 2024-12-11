import React from 'react'
import classes from "./Header.module.css"

import HeaderCartButton from './HeaderCartButton';

const  Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src="https://t3.ftcdn.net/jpg/02/60/12/88/360_F_260128861_Q2ttKHoVw2VrmvItxyCVBnEyM1852MoJ.jpg"
          alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyyo4xeeXvO0eGRE1lSMunGukbZUdH7Tztbw&s'/>
      </div>
    </>
  )
}

export default Header;