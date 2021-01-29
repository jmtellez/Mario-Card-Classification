import React from 'react';

import './card.styles.scss';

export const Card = props => (
    <figure className={`card card--${props.marioCard.rarity}`}>
        <div className='card__image-container'>
            <img src={`https://mario-poirest.herokuapp.com/mario/${props.marioCard.id}`} alt='marioCard' />
        </div>
        <figcaption className="card__caption">
            <h1 className="card__name">{props.marioCard.name}</h1>
            <h3 className="card__type">{props.marioCard.rarity}</h3>
            <table className="card__stats">
                <tbody>
                    <tr>
                        <th>HP</th>
                        <td>{props.marioCard.hp}</td>
                    </tr>
                    <tr>
                        <th>Attack</th>
                        <td>{props.marioCard.attack}</td>
                    </tr>
                    <tr>
                        <th>Defense</th>
                        <td>{props.marioCard.defense}</td>
                    </tr>
                    <tr>
                        <th>Special Attack</th>
                        <td>{props.marioCard.specialAttack}</td>
                    </tr>
                    <tr>
                        <th>Special Defense</th>
                        <td>{props.marioCard.specialDefense}</td>
                    </tr>
                    <tr>
                        <th>Speed</th>
                        <td>{props.marioCard.speed}</td>
                    </tr>
                </tbody>
            </table>
            <div className="card__abilities">
                <h4 className="card__ability">
                    <span className="card__label">Ability</span>
                    {props.marioCard.ability}
                </h4>
                <h4 className="card__ability">
                    <span className="card__label">Hidden Ability</span>
                    {props.marioCard.hiddenAbility}
                </h4>
            </div>
        </figcaption>
    </figure>

)