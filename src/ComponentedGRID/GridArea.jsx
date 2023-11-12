import React from 'react'
import './Styles/GridArea.css'

export const GridArea = () => {
    return (
        <div className="container">
            <h1>GRID CON AREA</h1>
            <div className='gridArea area'>
                <article className="iten iten1">
                    <p>HEADER</p>
                </article>
                <article className="iten iten2">
                    <p>CONTAIN</p>
                </article>
                <article className="iten iten3">
                    <p>SIDEBAR</p>
                </article>
                <article className="iten iten4">
                    <p>FOOTER</p>
                </article>
            </div>
        </div>
    )
}

