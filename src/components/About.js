import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-1 p-25'>
                        <h3>About Us</h3>
                        <h1>WELCOME TO FRIENDS RESTAURANT</h1>
                        <p>Magna elit consequat dolor est non incididunt incididunt et occaecat occaecat consequat consectetur aliquip ea. Ad qui aute cillum laborum aliquip nisi et. Occaecat cillum elit amet adipisicing. Culpa deserunt Lorem officia pariatur ut labore. Aliquip consequat ipsum duis esse laborum.</p>
                        <div className='about__btn'>
                            <a href='' className='btn btn-smart'>READ MORE</a>
                        </div>
                    </div>
                    <div className='col-1'>
                        <div className='about__img'>
                            <img src='/img/about.jpg' alt='about' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
