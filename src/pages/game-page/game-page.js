import React from 'react';
import { useSelector } from 'react-redux';
import { GameBuy } from '../../componets/game-buy';
import { GameCover } from '../../componets/game-cover';
import { GameGenre } from '../../componets/game-genre';
import './game-page.css';

export const GamePage = () => {
    const game = useSelector(state => state.game.currentGame);

    if (!game) return null

    return (
        <div className='game-page' >
            <h1 className='game-page__title'>{game.title}</h1>
            <div className='game-page__content' >
                <div className='game-page__left' >
                    <iframe width="90%"
                        height="450px"
                        src={game.video}
                        title="Youtube Video"
                        frameBorder="0">
                        
                    </iframe>
                </div>
                <div className='game-page__right'>
                    <GameCover image={game.image} ></GameCover>
                    <p>{game.description}</p>
                    <p className='secondary-text' >Популярные метки этого продукта:</p>
                    {game.genres.map((genres) => <GameGenre genre={genres} key={genres} ></GameGenre>)}
                    <div className='game-page__buy-game' >
                        <GameBuy game={game} ></GameBuy>
                    </div>
                </div>
            </div>
        </div>
    )
}
