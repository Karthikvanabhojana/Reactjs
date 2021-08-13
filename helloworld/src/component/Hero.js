import React from 'react'

function Hero({heroName}) {
    if(heroName="Jocker")
    throw 'not a hero'
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
