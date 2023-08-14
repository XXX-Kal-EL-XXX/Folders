import React from 'react'

import './Hero.css'
import { Button } from '../button/Button'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Folders World</h1>
                <p className='search-text'> What are you waiting for? </p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        WATCH TRAILER
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero
