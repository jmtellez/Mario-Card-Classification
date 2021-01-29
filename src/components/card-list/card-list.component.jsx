
import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.scss';

export const CardList = props => (
    <div className='card-list'>
        {
            props.marioCards.map(marioCard => (
                <Card key={marioCard.id} marioCard={marioCard} />
            ))
        }
    </div>
)