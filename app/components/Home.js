import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h1>Allison's Cocktail Mixer</h1>
            <img src="/images/background.jpg" />
            <div className="home_buttons">
                <Link to="/collection" className="homebtn">Collections</Link>
                <Link to="/cocktails" className="homebtn">Cocktails</Link>
            </div>
        </div>
    );
}

