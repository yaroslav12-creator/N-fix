import { Info, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import './feature.scss';

export default function Feature({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="advanture">Advanture</option>
                        <option value="thriller">thriller</option>
                        <option value="western">western</option>
                        <option value="horror">horror</option>
                        <option value="crime">crime</option>
                        <option value="animation">animation</option>
                        <option value="comedy">comedy</option>
                        <option value="drama">drama</option>
                        <option value="romance">romance</option>
                        <option value="historycal">historycal</option>
                        <option value="documentary">documentary</option>
                        <option value="fantasy">fantasy</option>
                        <option value="sci-fi">sci-fi</option>
                    </select>
                </div>
            )}
            <img 
                src="https://static.360tv.ru/media/images/articles/cover/d20976b2-e5c9-4b65-a755-01341f364206/the-matrix-poster-1.jpg" 
                alt="" 
            />
            <div className="info">
                <img 
                    src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" 
                    alt="" 
                />
                <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, esse. Incidunt iusto facere dolor at eaque rerum impedit dolores numquam accusamus, sequi, tempora earum. Ex numquam culpa aperiam commodi obcaecati?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayCircleFilled/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <Info/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


