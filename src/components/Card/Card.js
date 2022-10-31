import React from 'react';
import './Card.css';

const Card = ({ singlepokemon }) => {
    return (
        <div className='pokemon_card' key={singlepokemon.key}>
            <div className='pokemon_card__imgBox'>
                <img className='pokemon_img' src={singlepokemon.img} alt={singlepokemon.name} />
                <h2 className='pokemon__name'>#{singlepokemon.key} {singlepokemon.name}</h2>
            </div>
            <div className='pokemon__content'>
                <div className='pokemon__types'>
                    {singlepokemon.types.map((type, i) => {
                        return (
                            <span key={i} className={`type_tag type--${type.type.name}`}>{type.type.name}</span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Card;