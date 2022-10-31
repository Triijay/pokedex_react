import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = ({ allpokemon }) => {
    return(
        <div className='pokemon_list'>
            {allpokemon.map((singlepokemon) => (
                <Card singlepokemon={singlepokemon}/>
            ))}
        </div>
    )
}

export default CardList;