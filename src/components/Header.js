import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='banner'>
            <Navbar />
            <div className='banner__content'>
                <div className='container'>
                    <div className='banner__text'>
                        <h3>Food Delivery</h3>
                        <h1>Friends Restaurant</h1>
                        <p>Veniam velit ex occaecat commodo consequat aliquip dolore ut. Ipsum sint fugiat eu non ex in magna.</p>
                        <div className='banner__btn'>
                            <a href='' className='btn btn-smart'>DELEVER NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
