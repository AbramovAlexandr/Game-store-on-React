import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from "../../redux/games/reducer";
import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';
import { GameGenre } from '../game-genre';
import './game-item.css';


export const GameItem = ({ game }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`);
    }
    return (
        <div className="game-item" onClick={handleClick} >
            <GameCover image={game.image}></GameCover>
            <div className="game-item__details" >
                <span>{game.title}</span> 

                <div className="game-item__genre" >
                    {game.genres.map(genre => <GameGenre genre={genre} key={genre} ></GameGenre>)}
                </div>
                <div className="game-item__buy" >
                    <GameBuy game={game} ></GameBuy>
                </div>
            </div>

        </div>
    )
}