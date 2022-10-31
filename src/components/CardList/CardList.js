import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

const CardList = ({ allpokemon }) => {
    return(
        <div>
            {allpokemon.map((singlepokemon) => (
                <Card singlepokemon={singlepokemon}/>
            ))}
        </div>
    )
}

export default CardList;