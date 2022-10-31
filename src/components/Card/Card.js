import React from 'react';
import './Card.css';

const Card = ({ singlepokemon }) => {
    return (
        <div className='pokemon_card'>
            <img className='pokemon_img' src={singlepokemon.img} alt={singlepokemon.name} />
            <div className='container'>
                <h2>{singlepokemon.name}</h2>
            </div>
        </div>
    );
}

export default Card;