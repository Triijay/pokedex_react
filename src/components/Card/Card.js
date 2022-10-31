import React from 'react';
import './Card.css';

const Card = ({ singlepokemon }) => {
    console.log(singlepokemon);
    return (
        <div className='pokemon_card'>
            <div className='pokemon_card__imgBox'>
                <img className='pokemon_img' src={singlepokemon.img} alt={singlepokemon.name} />
                <h2 className='pokemon__name'>#{singlepokemon.attr.order} {singlepokemon.name}</h2>
            </div>
            <div className='pokemon__content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!
            </div>
        </div>
    );
}

export default Card;